import React, { useState, useEffect } from 'react';
import './Css/GameList.css';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://ws.jeuxvideo.com/01.jeux/<game_id>.xml');
        const data = await response.json();
        setGames(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setLoading(false);
      }
    };

    fetchGames();
  },[]);

  return (
    <div>
      <h2>Liste de Jeux</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <img src={game.cover_url} alt={game.name} />
              <p>{game.name}</p>
              <p>{game.release_date}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameList;
