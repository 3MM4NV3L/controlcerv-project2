import axios from 'axios';

// Para desarrollo local: http://localhost:5000
// Para producción: la URL de tu backend en Render
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://tu-backend-en-render.onrender.com/api' 
  : 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 
    "Content-Type": "application/json",
    "Accept": "application/json"
  } 
});

// Funciones CRUD
export const getBeers = () => api.get('/beers');
export const getBeerById = (id) => api.get(`/beers/${id}`);
export const createBeer = (beerData) => api.post('/beers', beerData);
export const updateBeer = (id, beerData) => api.put(`/beers/${id}`, beerData);
export const deleteBeer = (id) => api.delete(`/beers/${id}`);

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
