import { createContext, useContext } from "react"

export const ToDoContext = createContext({
    toDos: [{
        id: 1,
        todo: "Task One",
        completed: false,
    }],
    addToDo: (todo) => { },
    updateToDo: (id, todo) => { },
    deleteToDo: (id) => { },
    toggleToDo: (id) => { },
})

export const useToDo = () => {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;