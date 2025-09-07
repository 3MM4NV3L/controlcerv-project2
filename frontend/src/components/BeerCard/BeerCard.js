import React from "react";
import "./BeerCard.css";

const BeerCard = ({ beer, onView, onEdit, onDelete }) => {
  return (
    <div className="beer-card">
      <h3 className="beer-name">{beer.nombre}</h3>
      <p className="beer-type">{beer.tipo} · {beer.alcohol}% ABV</p>

      <div className="beer-details">
        <div className="beer-detail">
          <div className="detail-value">{beer.ibu}</div>
          <div className="detail-label">IBU</div>
        </div>
        <div className="beer-detail">
          <div className="detail-value">{beer.stock}</div>
          <div className="detail-label">Stock</div>
        </div>
        <div className="beer-detail">
          <div className="detail-value">${beer.precio}</div>
          <div className="detail-label">Precio</div>
        </div>
      </div>

      <p className="beer-description">{beer.descripcion}</p>

      <div className="beer-actions">
        <button className="btn btn-secondary" onClick={() => onView(beer)}>
          Ver Información
        </button>
        <div>
          <button className="btn btn-primary" onClick={() => onEdit(beer)}>
            Editar
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(beer._id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
