import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Creaciones from '../Creations.json';

const Creation = () => {
  const { name } = useParams();
  const creacion = Creaciones.list.find((c) => c.name === name);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const antes = localStorage.getItem('favoritos');
    if (antes) {
      const favoritosAlmacenados = JSON.parse(antes);
      setFavoritos(favoritosAlmacenados);
    }
  }, []);

  const agregarAFavoritos = () => {
    if (!favoritos.some((favorito) => favorito.name === creacion.name)) {
      const nuevosFavoritos = [...favoritos, creacion];
      setFavoritos(nuevosFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>{`Link para descargar: ${creacion.link}`}</h1>
        <h1>{`Nombre del proyecto: ${creacion.name}`}</h1>
        <h1>{`Descripción: ${creacion.description}`}</h1>
        <img src={creacion.image} className="image" style={{ width: '35%', height: 'auto' }} />
        <div className="Listas">
          <button onClick={agregarAFavoritos} className="estilo">
            <Link to="/">Agregar a favoritos</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Creation;
