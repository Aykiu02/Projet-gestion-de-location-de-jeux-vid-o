import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GameList from './Components/GameList';
import HomePage from './Components/HomePage';

function App() {
  const [Panier, setPanier] = useState([]);

  const addToPanier = (Jeux) => {
    setPanier([...Panier, Jeux]);
  };

  const removeFromPanier = (Jeux) => {
    const updatedPanier = Panier.filter((p) => p.id !== Jeux.id);
    setPanier(updatedPanier);
  };

  const clearPanier = () => {
    setPanier([]);
  };

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Nouvelle route pour la page d'accueil */}
          <Route
            path="/Jeux-list"
            element={<GameList addToPanier={addToPanier} />}
          />
          <Route
            path="/Panier"
            element={<Panier Panier={Panier} removeFromPanier={removeFromPanier} clearPanier={clearPanier} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
