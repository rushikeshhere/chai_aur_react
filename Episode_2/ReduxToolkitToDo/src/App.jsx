import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './Components/Todo'
import { AddToDo } from './Components/AddToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Learning Redux tool Kit From Hitesh sir</h1>
      <AddToDo />
      <Todos />
    </>
  )
}

export default App
