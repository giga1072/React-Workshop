import React from 'react';


function Toggle({showEmail,showName,toggleEmail,toggleName}){


  return(
    <div>
    <input 
        type="checkbox" 
        onChange={toggleName} 
        // checked={showName} 
      />
      <label>Name filter</label>

      <input 
        type="checkbox" 
        onChange={toggleEmail} 
        checked={showEmail} 
      />
      <label>Email filter</label>
    </div>
  )
}


export default Toggle;