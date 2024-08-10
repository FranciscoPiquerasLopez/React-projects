import { useId } from 'react'
import { useCretateTask } from '../hooks/useCreateTask'
import { useState } from 'react'
import '../styles/CreateTask.css'

export function CreateTask({ changeModalValue, changeTaskSelected, taskSelected = null }) {

    // Custom hook para guardar la tarea del usuario
    const { titleRef, descriptionRef, createTask, updateTask } = useCretateTask()

    // Estados locales para los input
    const [title, setTitle] = useState(taskSelected.titleTask)
    const [description, setDescription] = useState(taskSelected.descriptionTask)

    // Las id únicas de cada elemento del form
    const titleTask = useId()
    const descriptionTask = useId()

    // Esta función pertenece más a la lógica de aquí
    const handleClickChangeModal = (event) => {
        event.preventDefault();
        changeTaskSelected({})
        changeModalValue(false)
    }

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }

    const changeDescription = (event) => {
        setDescription(event.target.value)
    }

    return (
        <>
            <div className="overlay"></div>
            <form>
                <div className='create-task-container center'>
                    <div>Crear tarea</div>
                    <div>
                        <label htmlFor={titleTask}>Título</label>
                        {
                            taskSelected.id >= 0
                                ? <input onChange={changeTitle} value={title} type="text" name="title" id="titleTask" ref={titleRef} />
                                : <input type="text" name="title" id="titleTask" ref={titleRef} />
                        }
                    </div>
                    <div>
                        <label htmlFor={descriptionTask}>Descripción</label>
                        {
                            taskSelected.id >= 0
                                ? <input onChange={changeDescription} value={description} type="text" name="descripcion" id={descriptionTask} ref={descriptionRef} />
                                : <input type="text" name="descripcion" id={descriptionTask} ref={descriptionRef} />
                        }
                    </div>
                    <div>
                        {
                            taskSelected.id >= 0
                                ? <button onClick={() => updateTask(taskSelected.id)}>Editar</button>
                                : <button onClick={createTask}>Añadir</button>
                        }
                    </div>
                    <div>
                        <button onClick={handleClickChangeModal}>Cerrar</button>
                    </div>
                </div>
            </form>
        </>
    )
}