const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const beerRoutes = require('./routes/beers');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🔹 Configuración de CORS - ACTUALIZADA
const allowedOrigins = [
  'http://localhost:3000', // Desarrollo local
  'https://controlcerv-frontend.onrender.com', // Tu frontend en Render
  'https://controlcerv-backend.onrender.com' // Tu backend mismo (por si acaso)
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requests sin origen (como Postman, curl)
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

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Conectado a MongoDB Atlas');
})
.catch((err) => {
  console.log('❌ Error conectando a MongoDB:', err.message);
  console.log('💡 Verifica tu conexión a internet y la configuración de MongoDB Atlas');
});

// Rutas
app.use('/api/beers', beerRoutes);

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '¡Servidor funcionando!',
    database: 'MongoDB Atlas',
    timestamp: new Date().toISOString()
  });
});

// Ruta health check para Render
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is healthy',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

app.listen(PORT, () => {
  console.log('🚀 Servidor corriendo en http://localhost:' + PORT);
});