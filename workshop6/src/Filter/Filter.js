
import React, {useState} from "react";

const Filter =({setCountryFilter}) =>{
    const [country, setCountry ]= useState('');
    const handleChange = (e) =>{
        setCountry(e.target.value);
        setCountryFilter(e.target.value);
    }
    return (
        <div className="filter">
        <input 
        type="text" 
        value={country}
        onChange={handleChange} 
        placeholder="Filter by country"
          /> 
       </div>
    );
}

export default Filter;