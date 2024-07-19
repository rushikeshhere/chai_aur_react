import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <header className="App-header">
          <Login />
          <Profile />
        </header>
      </div>
    </UserContextProvider >
  )
}

export default App
