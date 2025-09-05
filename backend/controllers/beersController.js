// Almacenamiento en memoria para demostracion
let beers = [];
let nextId = 1;

// Obtener todas las cervezas
exports.getAllBeers = async (req, res) => {
  try {
    res.json(beers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una cerveza por ID
exports.getBeerById = async (req, res) => {
  try {
    const beer = beers.find(b => b.id === parseInt(req.params.id));
    if (!beer) {
      return res.status(404).json({ message: 'Cerveza no encontrada' });
    }
    res.json(beer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva cerveza
exports.createBeer = async (req, res) => {
  try {
    const newBeer = {
      id: nextId++,
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    beers.push(newBeer);
    res.status(201).json(newBeer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una cerveza
exports.updateBeer = async (req, res) => {
  try {
    const index = beers.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ message: 'Cerveza no encontrada' });
    }
    
    beers[index] = { 
      ...beers[index], 
      ...req.body, 
      updatedAt: new Date(),
      id: parseInt(req.params.id)
    };
    res.json(beers[index]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una cerveza
exports.deleteBeer = async (req, res) => {
  try {
    const index = beers.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ message: 'Cerveza no encontrada' });
    }
    
    const deletedBeer = beers.splice(index, 1);
    res.json({ message: 'Cerveza eliminada correctamente', beer: deletedBeer[0] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};