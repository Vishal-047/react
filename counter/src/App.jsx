import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='counter'>
      <p>You have clicked {count} times</p>
      <button onClick={()=>{
        setCount(count+1)
      }}>Click me to increase</button>

      <button on onClick={()=>{
        if(count!=0) setCount(count-1)
          else alert("You have reached to 0")
      }}>Click me to decrease</button>

      <button onClick={()=>{
        for(let i=count;i!=0;i--)
        setCount(i-1)
      if(count==0) alert("You have already reset the counter")
      }}>Click me to reset the counter</button>
    </div>
  )
}

export default App
