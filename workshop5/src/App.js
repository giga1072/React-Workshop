import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Login from './components/login';

import Cards from './components/Cards';
import Toggle from './components/toggle';

function App() {
  const[showName,setShowName]=useState(true);  
  const[showEmail,setShowEmail]=useState(true);  


 const[userData,setUserData]= useState([])
 useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then((response)=>{
      if(response.ok){
      return response.json();
      };
     })
     .then((data)=>setUserData(data.results))
     .catch((error)=>console.log(error.message))
     .finally(()=>console.log("I am done")); 
  },[]);

  console.log(userData)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function handleLogin(credentials) {
    const { username, password } = credentials;
    if (username === "digitalAcademy@gmail.com" && password === "iLoveReact123") {
      setIsAuthenticated(true);
    } else { alert("Incorrect username or password!"); }
  }
  const [count,setCount] = useState(5);
  
  const showMoreCards = () => {
    setCount(count + 1);
  };
  const toggleName = () => setShowName(!showName);
  const toggleEmail = () => setShowEmail(!showEmail);

    if(!isAuthenticated){
      return <Login onLogin={handleLogin}/>
    }
    

  return (
    
    <div className="App">
       <Toggle 
        showName={showName} 
        showEmail={showEmail} 
        toggleName={toggleName} 
        toggleEmail={toggleEmail} 
      />
   {userData.slice(0,count).map((user)=>{
       return <Cards key={user.login.uuid} user={user} showName={showName} showEmail={showEmail}/>
      })}
      <button onClick={showMoreCards}>Click To See Card</button>
     
    </div>
  );
}


export default App;
