import { useState } from "react"


function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center px-4 bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-5 bg-white py-3 px-3 rounded-lg shadow-xl">
          <button onClick={() => setColor("red")} className="bg-red-600 rounded px-4 ">Red</button>
          <button onClick={() => setColor("blue")} className="bg-blue-700 rounded px-4 ">Blue</button>
          <button onClick={() => setColor("green")} className="bg-green-600 rounded px-4">Green</button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-600 rounded px-4">Yellow</button>
          <button onClick={() => setColor("brown")} className="bg-red-800 rounded px-4">Brown</button>
          <button onClick={() => setColor("orange")} className="bg-orange-400 rounded px-4">Orange</button>
          <button onClick={() => setColor("grey")} className="bg-gray-400 rounded px-4">Grey</button>
        </div>
      </div>
    </div >

  )
}

export default App
