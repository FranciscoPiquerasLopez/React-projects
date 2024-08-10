import { useState } from "react";
import { createContext } from "react";

// Creo mi primer Context 💞
export const TasksContext = createContext()

// Creo mi primer Provider
export function TasksProvider({ children }) {
    
    const getTasks = JSON.parse(localStorage.getItem('tasks'))

    const [tasksState, setTasksState] = useState(getTasks)

    // En el return(Provider) devuelves lo que quieres que los demás componentes usen
    // como información o estado global
    return (
        <TasksContext.Provider value={{
            tasksState,
            setTasksState
        }}>
            {children}
        </TasksContext.Provider>
    )
}