import { Link } from 'react-router-dom'
import '../styles/Header.css'

export function Header() {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav-items'>
                    <li><Link to="/tasks">TAREAS</Link></li>
                    <li><Link to="/control-tasks">GESTIONAR TAREAS</Link></li>
                </ul>
            </nav>
        </>
    )
}