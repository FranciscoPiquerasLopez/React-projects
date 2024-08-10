import { useRef } from "react"
import { useContext } from "react"
import { TasksContext } from "../context/tasks"

export function useCretateTask() {
    // Usamos el contexto
    const { tasksState, setTasksState } = useContext(TasksContext)

    // Definir referencias a los input del formulario
    // También se puede hacer usando únicamente JS, y no depender tanto de React
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)

    // Función para actualizar la tarea
    const updateTask = (idTask) => {
        event.preventDefault()
        const titleTask = titleRef.current.value
        const descriptionTask = descriptionRef.current.value

        const copyTask = {
            id: idTask,
            taskName: titleTask,
            taskDescription: descriptionTask
        }

        // Al tratarse de un callBack, tu puedes introducir lógica dentro de aquí
        setTasksState(prevTasks => {
            const updatedTasks = prevTasks.map(task =>
                task.id === idTask ? copyTask : task
            )

            // Guardar el array actualizado en localStorage
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))

            // Retornar el array actualizado para setTasksState
            return updatedTasks
        })
    }

    // Función para crear la tarea
    const createTask = (event) => {
        event.preventDefault()
        const titleTask = titleRef.current.value
        const descriptionTask = descriptionRef.current.value

        if (titleTask === '' || descriptionTask === '') return

        const lastId = tasksState !== null
            ? tasksState[tasksState.length - 1].id + 1
            : 0

        const newTask = {
            id: lastId,
            taskName: titleTask,
            taskDescription: descriptionTask
        }
        const jsonTasks = JSON.parse(localStorage.getItem('tasks')) || []
        const objectTasksToArray = [...jsonTasks, newTask]

        // El localStorage solo acepta cadenas de texto, por eso al ser un objeto
        // se usa el JSON.stringify
        localStorage.setItem('tasks', JSON.stringify(objectTasksToArray))

        setTasksState(objectTasksToArray)
    }

    return { titleRef, descriptionRef, createTask, updateTask }
}