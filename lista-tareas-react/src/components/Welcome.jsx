import { Link } from 'react-router-dom'
import '../styles/Welcome.css'

export function Welcome() {
    return (
        <>
            <h1 className='title'>COMIENZA A CREAR TUS TAREAS</h1>
            <Link to='/tasks'>
                <button className='button-start'>Comenzar</button>
            </Link>
        </>
    )
}