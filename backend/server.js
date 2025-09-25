// server.js - Actualiza la conexión a MongoDB
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const beerRoutes = require('./routes/beers');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🔹 Configuración de CORS
const allowedOrigins = [
  'http://localhost:3000',
  'https://controlcerv2-frontend.onrender.com',
  'https://controlcerv2-backend.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Middleware
app.use(express.json());

// 🔹 CONEXIÓN MEJORADA A MONGODB
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ Error: MONGODB_URI no está definida en las variables de entorno');
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
    console.log(`📊 Base de datos: ${mongoose.connection.db.databaseName}`);
  })
  .catch((err) => {
    console.error('❌ Error conectando a MongoDB:', err.message);
    console.log('💡 Verifica:');
    console.log('   - Tu conexión a internet');
    console.log('   - La configuración de MongoDB Atlas');
    console.log('   - Las credenciales en el archivo .env');
  });

// Manejo de eventos de conexión
mongoose.connection.on('error', (err) => {
  console.error('❌ Error de MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB desconectado');
});

// Rutas
app.use('/api/beers', beerRoutes);

// Ruta de prueba mejorada
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '¡Servidor funcionando correctamente!',
    database: mongoose.connection.readyState === 1 ? 'Conectado' : 'Desconectado',
    environment: process.env.NODE_ENV || 'development',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// Ruta health check mejorada para Render
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is healthy',
    environment: process.env.NODE_ENV,
    port: PORT,
    database: dbStatus,
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de ControlCerv2',
    version: '2.0.0',
    endpoints: {
      beers: '/api/beers',
      test: '/api/test',
      health: '/health'
    }
  });
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada'
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error global:', err);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Error interno'
  });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log('🚀 Servidor ContrólCerv iniciado');
  console.log(`📍 Puerto: ${PORT}`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`💾 MongoDB: ${mongoose.connection.readyState === 1 ? 'Conectado' : 'Desconectado'}`);
});