const express = require('express');
const router = express.Router();
const {
  getAllBeers,
  getBeerById,
  createBeer,
  updateBeer,
  deleteBeer
} = require('../controllers/beersController');

// Rutas CRUD
router.get('/', getAllBeers);
router.get('/:id', getBeerById);
router.post('/', createBeer);
router.put('/:id', updateBeer);
router.delete('/:id', deleteBeer);

module.exports = router;