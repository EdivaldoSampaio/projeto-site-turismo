import React from 'react';
import './styles.scss';

export function CityCard({ city }) {
  return (
    <div className="card">
      <img 
        src={city.image}
        alt={`Paisagem de ${city.cityName}`}
      />
      <div className="labels">
        <p><span>Cidade:</span>{city.cityName}</p>
        <p><span>População:</span>{city.population}</p>
        <p><span>Estado:</span>{city.state}</p>
        <p><span>Área:</span>{city.area} km²</p>
      </div>
    </div>
  );
}