import React, { useState } from 'react';


const BeerForm = ({ beer, onSave }) => {
  const [formData, setFormData] = useState(beer || {
    nombre: '',
    tipo: 'IPA',
    alcohol: 0,
    ibu: 0,
    descripcion: '',
    precio: 0,
    stock: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="beer-form">
      <h2>{beer ? 'Editar Cerveza' : 'Añadir Nueva Cerveza'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Tipo:</label>
          <select name="tipo" value={formData.tipo} onChange={handleChange}>
            <option value="IPA">IPA</option>
            <option value="Lager">Lager</option>
            <option value="Stout">Stout</option>
            <option value="Porter">Porter</option>
            <option value="Ale">Ale</option>
            <option value="Pilsner">Pilsner</option>
            <option value="Trigo">Trigo</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Alcohol (%):</label>
          <input
            type="number"
            name="alcohol"
            value={formData.alcohol}
            onChange={handleChange}
            step="0.1"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>IBU:</label>
          <input
            type="number"
            name="ibu"
            value={formData.ibu}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Guardar</button>
        {beer && <button type="button" onClick={() => onSave(null)}>Cancelar</button>}
      </form>
    </div>
  );
};

export default BeerForm;

