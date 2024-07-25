import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './Context'

function App() {
  const [todos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateToDo = (id, todo) => {
    setToDos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  // used Filter method bcz map is not suitable for this function
  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo !== id))
  }

  const toogleToDo = (id) => {
    setToDos((prev) => prev.map((prevTodo) => prevTodo === id ?
      { ...prevTodo, completed: !prevTodo.completed } :
      prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos > 0) {
      setToDos(todos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify("todos"));
  }, [todos])

  return (
    <ToDoProvider>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
