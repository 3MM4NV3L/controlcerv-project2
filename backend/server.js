const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const beerRoutes = require('./routes/beers');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
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
    database: 'MongoDB Atlas' 
  });
});

app.listen(PORT, () => {
  console.log('🚀 Servidor corriendo en http://localhost:' + PORT);
});
