import React, { useState, useEffect } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import { getBeers, deleteBeer } from '../../services/api';
import './BeerList.css';

const BeerList = ({ onEditBeer }) => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    try {
      const response = await getBeers();
      setBeers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching beers:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta cerveza?')) {
      try {
        await deleteBeer(id);
        setBeers(beers.filter(beer => beer.id !== id));
      } catch (error) {
        console.error('Error deleting beer:', error);
      }
    }
  };

  if (loading) return <div className="loading">Cargando cervezas...</div>;

  return (
    <div className="beer-list">
      <h2>Lista de Cervezas</h2>
      <div className="beer-grid">
        {beers.map(beer => (
          <BeerCard
            key={beer.id}
            beer={beer}
            onEdit={onEditBeer}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default BeerList;
