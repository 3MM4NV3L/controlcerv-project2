const Beer = require('../models/Beer');

// GET /api/beers
exports.getAllBeers = async (req, res) => {
  try {
    const { q } = req.query;
    const filter = q
      ? {
          $or: [
            { nombre: { $regex: q, $options: 'i' } },
            { tipo: { $regex: q, $options: 'i' } },
            { descripcion: { $regex: q, $options: 'i' } }
          ]
        }
      : {};
    const beers = await Beer.find(filter).sort('-createdAt');
    res.json(beers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/beers/:id
exports.getBeerById = async (req, res) => {
  try {
    const beer = await Beer.findById(req.params.id);
    if (!beer) return res.status(404).json({ message: 'Cerveza no encontrada' });
    res.json(beer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/beers
exports.createBeer = async (req, res) => {
  try {
    const beer = await Beer.create(req.body);
    res.status(201).json(beer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/beers/:id
exports.updateBeer = async (req, res) => {
  try {
    const beer = await Beer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!beer) return res.status(404).json({ message: 'Cerveza no encontrada' });
    res.json(beer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/beers/:id
exports.deleteBeer = async (req, res) => {
  try {
    const beer = await Beer.findByIdAndDelete(req.params.id);
    if (!beer) return res.status(404).json({ message: 'Cerveza no encontrada' });
    res.json({ message: 'Cerveza eliminada correctamente', beer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
