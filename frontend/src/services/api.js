import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Funciones para las operaciones CRUD
export const getBeers = () => api.get('/beers');
export const getBeerById = (id) => api.get('/beers/' + id);
export const createBeer = (beerData) => api.post('/beers', beerData);
export const updateBeer = (id, beerData) => api.put('/beers/' + id, beerData);
export const deleteBeer = (id) => api.delete('/beers/' + id);

export default api;