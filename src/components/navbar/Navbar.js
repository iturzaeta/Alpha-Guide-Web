import React from 'react'
import logo from '../../logo.svg'
import './Navbar.css'


const Navbar = () => {
  return (
    <header>
    <nav className="navbar nav-transparent">
      <img src={logo} alt="logo-alpha-guide"></img>

      {/* Este i debe ser un enlace que lleve a: 
      - Registro/inicio de sesión
      - Perfil en el caso de que ya esté iniciado */}
      
      <i className="icon-profile ri-user-4-line"></i>
    </nav>
  </header>
  )
}

export default Navbar