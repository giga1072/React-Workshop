import React from 'react';


function UniversityCard ({university}) {
    return (
      <div>
        <h2>{university.name}</h2>
        <p>Country:{university.country}</p>
        <p>Website:<a href={university.web_pages[0]}>{university.web_pages[0]}</a></p>
      </div>   
    );
}
export default UniversityCard;