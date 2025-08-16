import React from 'react';

function Basics({username, btn="visit me"}){ //in btn passing default value
    console.log(username);
    return (
        <>
        <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img className="size-48 shadow-xl" alt="" src="https://images.pexels.com/photos/32776965/pexels-photo-32776965.jpeg" />
        </div>
        <div className="flex">
          <span>Class Warfare</span>
          
          <span>{username}</span>
          <span className="flex">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
            <button>{btn}</button>
          </span>
        </div>
      </div></>
    )
}

export default Basics;