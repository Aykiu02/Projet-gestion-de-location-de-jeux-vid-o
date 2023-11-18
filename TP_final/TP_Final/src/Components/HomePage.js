import React from 'react';
import { Link } from 'react-router-dom';
import './Css/HomePage.css';

const HomePage = () => {
  return (
    <div className='texteAccueil'>
      <h1>Site de location de jeux vidéo</h1>
    <div className='imageAccueil'> </div>
    <div className="home-page">
      <div className="header">
        
      </div>
      <div className="content">
  <Link to="/GameList"> 
    <button> Louer des jeux vidéo </button>
  </Link>
</div>

    <div className='containerImage'>
    </div>
    </div>
    </div>
  );
};

export default HomePage;
