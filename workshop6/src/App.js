import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';   
import Home from './Home/Home'; 
import Details from './DetailedInfo/Details';




function App() {

  return (
    <div className="App">

<Routes>
<Route path="/" element={<Navigate to="/home" />} />
  <Route 
     path="/home" 
     element={<Home  /> }/>
  <Route 
     path="/details" 
     element={<Details/>}/>
</Routes>
    </div>
  );
}

export default App;
