import React from 'react';
import './Css/Panier.css';
import { useState } from 'react';
const Panier = ({ Panier, removeFromPanier, clearPanier }) => {
  
  if(!localStorage.getItem('Panier')) {
    localStorage.setItem('Panier', JSON.stringify([]));
  }


  const [searchText, setSearchText] = useState(''); // État pour la valeur de recherche

  
  const searchGame = (Game) => {
    return (
      Game.name.toLowerCase().includes(searchText.toLowerCase()) ||
      Game.id.toString().includes(searchText)
    );
  };

  return (
    <div className="container">
      <h1 className="header">Mon Panier</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher par nom ou ID"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <button className="button" onClick={clearPanier}>Vider le Panier</button>
      <ul>
        {Panier
          .filter((Game) => searchGame(Game)) // Filtrer les Jeux en fonction de la recherche
          .map((Game, index) => (
            <li key={index}>
              {Game.name} - Type(s): {Game.types.join(', ')}
              <div class="liberer-container">
              <button className="Vider" onClick={() => removeFromPanier(Game)}>Libérer</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Panier;
