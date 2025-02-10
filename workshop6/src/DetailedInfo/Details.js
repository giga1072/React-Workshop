import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const { university } = state;
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget turpis vel orci faucibu+s convallis. Proin vitae urna magna,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget turpis vel orci faucibus convallis,nsectetur adipiscing elit. Quisque eget turpis vel orci faucibu+s convallis. Proin vitae urna magna,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget turpis vel orci faucibus convallis,nsectetur adipiscing elit. Quisque eget turpis vel orci faucibu+s convallis. Proin vitae urna magna,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget turpis vel orci faucibus convallis"
;return (
  
    <div>
      <h1>{university.name}</h1>
      <p><b>Country:</b> {university.country} <b>{university.alpha_two_code}</b></p>
      <p><b>Webpage:</b> {university.web_pages}</p>
      <p><b>Information:</b> {lorem}</p>
    
    </div>
  );
};

export default Details;