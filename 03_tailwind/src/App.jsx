import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Component/Card"

function App() {

  return (
    <>
      <Card username="Delta" btnText="visit me" />
      <Card username="Alpha" />
    </>
  )
}

export default App
