import React from 'react';

import { Navbar } from './components/NavBar';
import { CityCard } from './components/CityCard';
import { useCities } from './hooks/useCities';

import { countries } from './utils/countries';


import './styles/global.scss';
import './styles/app.scss';
import './styles/cities.scss'
import { SearchInput } from './components/Searchinput';


export function App() {
  const  { cities, selectedCountry} = useCities();
 
  
  return (
    <div  className="app">
      <Navbar />

      <section className="cities">       
        <div className="search-area">
          <SearchInput />
         <h1>{countries[selectedCountry]}</h1>
       </div>


        <div className="card-container">
          {cities.map(city => (
          <CityCard key={city.id} city={city} />
       
          ))}
         </div>
      </section>
    </div>
  );
}

