import "./App.css";
import Home from "./Home/Home";
import { ProductContext } from "./context/ProductsContext";
import { useContext } from "react";
import Login from "./LoginPage/Login"
function App() {
  const{state} = useContext(ProductContext)
  
    
   if (!state.isLoggedIn) {
    return <Login/>;
  } return(
    <Home/>
  ) 
  
    

}

export default App;
