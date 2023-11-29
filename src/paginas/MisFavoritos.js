import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    if (storedFavoritos) {
      setFavoritos(JSON.parse(storedFavoritos));
    }
  }, []);

  const handleRemoveFavorite = (name) => {
    const updatedFavoritos = favoritos.filter((favorito) => favorito.name !== name);
    setFavoritos(updatedFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(updatedFavoritos));
  };

  const favoritesChunks = [];
  const chunkSize = 3;

  for (let i = 0; i < favoritos.length; i += chunkSize) {
    favoritesChunks.push(favoritos.slice(i, i + chunkSize));
  }

  return (
    <div>
      <br /><br /><br /><br /><br />
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <br /><br /><br /><br /><br />
        <div style={{ textAlign: 'center', color: '#2e3440', fontSize: '48px', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Nunito, sans-serif' }}>
          Favoritos
        </div>
        {favoritesChunks.map((chunk, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {chunk.map((favorito) => (
              <div key={favorito.name} style={{ textAlign: 'center', fontFamily: 'Nunito, sans-serif', fontSize: '14px', width: '30%', margin: '10px' }}>
                <Link to={`/Creation/${favorito.name}`}>
                  <div style={{ marginBottom: '10px' }}>{favorito.name}</div>            
                  <img src={favorito.image} className="image" alt={`${favorito.name} Preview`} style={{ width: '80%', height: 'auto' }} />
                </Link>
                <div className="center">
                  <button onClick={() => handleRemoveFavorite(favorito.name)} className="estilo">
                    <Link to="/">Borrar de tus favoritos</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
        <br /><br />
      </div>
    </div>
  );
};

export default Favorite;
