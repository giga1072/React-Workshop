import React from 'react';
import './App.css';
import users from './data/users';
import UserCard from './components/UserCard';
import { useState } from 'react';
function App() {
  const [visibleCount, setVisibleCount] = useState(5);
  const showMoreCards = () => {
    setVisibleCount(visibleCount + 5);
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
