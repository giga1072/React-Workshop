import React from 'react';

function Cards({user,showName,showEmail}){
    return(
        <div className="user-card">
        <img src={user.picture.large} alt="user"/>
      {showName && (<h2>Name:{user.name.title} {user.name.first} {user.name.last}  </h2>)}
       {showEmail &&<p><b>Email: </b>{user.email} </p>}
       <p><b>Phone Number:</b>{user.phone}</p>
       <p><b>Location: </b>{user.location.country}, {user.location.city}</p>

        </div>
    )
}





export default Cards;