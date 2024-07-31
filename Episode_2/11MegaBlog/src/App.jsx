import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = import.meta.env.VITE_APPWRITE_URL;
  console.log(name);
  return (
    <>

      <h1>Learn code with me</h1>
    </>
  )
}

export default App
