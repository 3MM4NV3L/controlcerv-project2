const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  tipo: {
    type: String,
    required: true,
    enum: ['IPA', 'Lager', 'Stout', 'Porter', 'Ale', 'Pilsner', 'Trigo', 'Otro']
  },
  alcohol: {
    type: Number,
    required: true,
    min: 0
  },
  ibu: {
    type: Number,
    required: true,
    min: 0
  },
  descripcion: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    default: ''
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  fechaProduccion: {
    type: Date,
    default: Date.now
  },
  fechaCaducidad: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Beer', beerSchema);
