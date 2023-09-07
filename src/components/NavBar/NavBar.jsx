import React from 'react'
import CartWidge from './CartWidge'
import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">StreetWear</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Acerca de nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contáctanos</a>
                    </li>
                </ul>
            </div>
            <CartWidge />
            
        </div>
    </nav>
  )
}

export default NavBar