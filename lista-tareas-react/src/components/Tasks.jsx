import { useContext } from "react";
import { TasksContext } from "../context/tasks";
import '../styles/Tasks.css'

export function Tasks() {

    const { tasksState } = useContext(TasksContext)

    return (
        <>
            <section className='gestionar-container'>
                <table className='tabla'>
                    <thead>
                        <tr>
                            <td>Título</td>
                            <td>Descripción</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasksState === null ? (
                                <tr>
                                    <td colSpan='4' style={{ textAlign: 'center' }}>
                                        <p>No hay tareas creadas, crea una</p>
                                    </td>
                                </tr>
                            ) : (
                                tasksState.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.taskName}</td>
                                        <td>{task.taskDescription}</td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    )

}