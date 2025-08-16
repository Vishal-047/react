import React, { Component } from 'react'
import './user-component.css'

function Usercomponent(props) {
  return (
    <div className="container">
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.image}></img>
        <p>{props.desc}</p>
    </div>
  )
}

export default Usercomponent