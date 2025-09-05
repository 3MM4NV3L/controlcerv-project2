import React, { useState } from 'react';
import BeerList from './components/BeerList/BeerList';
import BeerForm from './components/BeerForm/BeerForm';
import './App.css';

function App() {
  const [editingBeer, setEditingBeer] = useState(null);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🍻 ContrólCerv - Gestión de Cervezas</h1>
      </header>
      
      <main className="app-main">
        <BeerForm 
          beer={editingBeer} 
          onSave={() => setEditingBeer(null)}
        />
        
        <BeerList 
          onEditBeer={setEditingBeer}
        />
      </main>
    </div>
  );
}

export default App;