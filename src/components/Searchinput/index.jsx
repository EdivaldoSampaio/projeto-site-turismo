import React, { useState } from "react";
import { useCities} from '../../hooks/useCities';
import './styles.scss';


export function SearchInput() {

const {filterCitiesByName} = useCities();
const [searchText, setSearchText] = useState('');

    function handleInput (event) {
        setSearchText(event.target.value)

    }

    function handleSearch() {
        filterCitiesByName(searchText);
        
        setSearchText('');
    }

    return (

    <div className="search-input">
    <input type="text" 
    placeholder="Pesquise uma cidade"
    value={searchText}
    onChange={handleInput}
    
    />
    <button onClick={handleSearch}>Pesquisar</button>
    </div>

);

}