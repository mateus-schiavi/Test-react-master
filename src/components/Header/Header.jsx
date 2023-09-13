import React from 'react'
import logo from '../../../public/logo.svg'
import './Header.css'

function Header() {
  return (
    <div className= 'titulo'>
        <div>
       <ul className= 'lista'>
          <div>
            <img src={logo} alt="lgogo de la pagina" />
            </div>
          <li>
             About
          </li>
          <li>
            Services
          </li>
          <li>
            Projects
          </li>
          <li>
            CONTACT
          </li>
        </ul>
          </div>
        <h1>WE ARE CREATIVES</h1>
        
    </div>
  )
}

export default Header