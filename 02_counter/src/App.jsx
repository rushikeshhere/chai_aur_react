import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const disableButton = () => {
    setButtonDisabled(true);
    alert("You will not allowed to increase more than 20!");
  }

  const addValue = () => {
    if (count == 20) {
      disableButton();
    }
    else {
      setCount(count + 1)
    }
  }
  const removeCount = () => {
    if (count === 0) {
      setCount(count)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h3>Counter value is :{count}</h3>
      <button onClick={addValue}>Add count</button>
      <button onClick={removeCount}>Remove Count</button>
    </>
  )
}

export default App
