import React from "react"



function UserCard ({user}){
    return (
        <div className="user-card">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`}/>
            <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
            <p>{user.email} {user.phone} </p>
            <p>{user.location.country}.{user.location.city},{user.location.state}</p>
            <p>Age: {user.dob.age}</p>
        </div>
    )
}

export default UserCard;