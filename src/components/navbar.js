import React from "react";
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg dark-light bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="navbar-brand">
                <NavLink  to= '/' className="navbar-brand">Ahmed AGREBI SELMI</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to= '/' className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/projects' className="nav-link">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/skills' className="nav-link">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link">Contacts</NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar