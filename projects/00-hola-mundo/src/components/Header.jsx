import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Bienvenido</h1>
        <nav>
            <ul>
                <li><Link to="/">Primera seccion</Link></li>
                <li><Link to="/segunda-seccion">Segunda seccion</Link></li>
                <li><Link to="/tercera-seccion">Tercera seccion</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header