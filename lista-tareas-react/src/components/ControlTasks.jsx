import { CreateTask } from "./CreateTask"
import { useControlTasks } from "../hooks/useControlTasks"
import '../styles/ControlTasks.css'

export function ControlTasks() {

    // Usamos el custom hook
    const { tasksState, deleteTask, updateTask, modal, setModal, taskSelected, setTaskSelected } = useControlTasks()

    const handleClickModal = () => {
        setModal(!modal)
    }

    return (
        <section className='gestionar-container'>
            <table className='tabla'>
                <thead>
                    <tr>
                        <td>Título</td>
                        <td>Descripción</td>
                        <td>Eliminar</td>
                        <td>Modificar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasksState === null ? (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center' }}>
                                    <p>No hay tareas existentes todavía</p>
                                </td>
                            </tr>
                        ) : (
                            tasksState.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.taskName}</td>
                                    <td>{task.taskDescription}</td>
                                    <td><button onClick={() => { deleteTask(task.id) }}>Eliminar</button></td>
                                    <td><button onClick={() => { updateTask(task.id) }}>Modificar</button></td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>

            <button className='btn-crear-tarea' onClick={handleClickModal}>Crear tarea</button>

            {modal && <CreateTask changeModalValue={setModal} changeTaskSelected={setTaskSelected} taskSelected={taskSelected} />}

        </section>
    )
}