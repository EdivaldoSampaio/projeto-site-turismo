import React from 'react';
import { useCities } from '../../hooks/useCities';
import './styles.scss';
import { countries } from '../../utils/countries';


export function Button ({icon: Icon, country }) {
   

const { listCitiesByCountry, selectedCountry } = useCities();

   async function handleChangeCities() {
    listCitiesByCountry (country)

   }
        
    return (

    <button
    className={`nav-button &{selectedCountry === country && 'selected'}`} 
    onClick={handleChangeCities}>< Icon/>{countries[country]}</button>
   
    )
}