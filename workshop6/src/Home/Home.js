import React from "react";
import UniversityCard from "../Universities/UniversityCard";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import Filter from "../Filter/Filter";

const Home = () => {
  const[universities,setUniversities]= useState([])
  const[countryFilter,setCountryFilter]= useState('')
  useEffect(()=> {
  fetch("http://universities.hipolabs.com/search")    
      .then((response)=>{
        if(response.ok){
        return response.json();
        };
       })
       .then((data)=>setUniversities(data))
       .catch((error)=>console.log(error.message))
       .finally(()=>console.log("I am done")); 
       
    },[]);
    const filteredUniversities = universities.filter((university) =>
      university.country.toLowerCase().includes(countryFilter.toLowerCase()));
    console.log(universities)
    return (

    <div className="uni-cards">
      <h1>Universities</h1>
     <div>
      <Filter setCountryFilter={setCountryFilter} />
     </div>
      <ul>
     
        {filteredUniversities.map((university,index) => (
         
            <li key={index}>
         <UniversityCard university={university} />
         <Button university={university}/>
         </li>
         ))}
       
       
      </ul>
     
    </div>
  );
};

export default Home;
