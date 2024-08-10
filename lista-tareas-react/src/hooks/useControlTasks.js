import { useContext } from "react"
import { TasksContext } from "../context/tasks"
import { useState } from "react"

export function useControlTasks() {
    // Contextos
    const { tasksState, setTasksState } = useContext(TasksContext)

    // Estados
    const [modal, setModal] = useState(false)
    const [taskSelected, setTaskSelected] = useState({})

    const deleteTask = (idTask) => {
        const updateTasks = tasksState.filter(task => task.id !== idTask)
        localStorage.setItem('tasks', JSON.stringify(updateTasks))
        
        setTasksState(updateTasks)
    }

    const updateTask = (idTask) => {
        try {
            const task = tasksState.find(task => task.id === idTask)
            if (!task) return
            setTaskSelected(() => ({
                id: task.id,
                titleTask: task.taskName,
                descriptionTask: task.taskDescription
            }))
            setModal(!modal)
        } catch (e) {
            throw new Error(e)
        }
    }

    return { tasksState, deleteTask, updateTask, modal, setModal, taskSelected, setTaskSelected }
}

