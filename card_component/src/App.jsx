import './App.css'
import Usercomponent from './component/user-component'
import me from './assets/me.jpg'
import dice from './assets/dice.jpeg'
import potato from './assets/potato.jpg'

function App() {
  return (
    <div className="comp">
      <Usercomponent name="Vishal" image={me} desc="Hello, this is me, Vishal"/>
      <Usercomponent name="Dice" image={dice} desc="Hello, this is a dice"/>
      <Usercomponent name="Potato" image={potato} desc="Hello, this is me, a potato"/>
    </div>
  )
}

export default App
