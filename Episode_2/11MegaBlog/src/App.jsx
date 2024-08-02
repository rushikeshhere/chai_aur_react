import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import './App.css'
import { login, logOut } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logOut())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div></div>
  ) : (null)
}

export default App
