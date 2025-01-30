import React from 'react';
import './App.css';
import users from './data/users';
import UserCard from './components/UserCard';
import { useState } from 'react';
import Login from './components/loggedIn/logIn';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin(credentials) {
    const { username, password } = credentials;
    if (username === "digitalAcademy@gmail.com" && password === "iLoveReact123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect username or password!");
    }
  }
  const [visibleCount, setVisibleCount] = useState(5);
  const showMoreCards = () => {
    setVisibleCount(visibleCount + 5);
  };
  if (!isAuthenticated){
    return < Login onLogin={handleLogin}/>
  };
  
  return (
    <div className="App">
      <div className="user-card-container">
      {users.slice(0,visibleCount).map((user,index)=>{
       return <UserCard key={index} user={user}/>
      })}
      </div>
      <button onClick={showMoreCards}>Click to show rest of cards</button>
    </div>
  );
}

export default App;
