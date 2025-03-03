import React from "react";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import "./MoviesList.css";

const MoviesList = () => {
  return (
    <div>
      <MoviesCard />
    </div>
  );
};

//აქ ტოპ 250 ფილმი დაჯდება. სანამ არ დარეგისტრირდება ეს გვერდი არ უნდა გამოჩნდეს, home იქნება მთავარი,
//სადაც მოკლე ინფორმაცია იქნება
export default MoviesList;
