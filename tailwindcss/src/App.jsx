import { useState } from 'react'
import './App.css'
import Basics from './Component/basics';

function App() {
  
 let myobj={
    name:"Vishal",
    age:24,
  }
  return (
    <>
      <h1 className='bg-green-400 text-blue, rounded-xl p-4'>This is the heading for TailWind CSS</h1>
      <Basics username="Vishal" someobj={myobj} btn="Visit me"/>
      <Basics btn="Click me"/>
    </>
  )
}

export default App
