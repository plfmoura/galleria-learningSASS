import React from 'react'
import '../../styles/components/navBar.sass'

export default function NavBar() {
  return (
    <header className="header">
        <a href="" className="header-brand">Galeria</a>
        <nav className="header-navBar">
            <ul>
                <li><a href="" className="active">Home</a></li>
            </ul>
            <ul>
                <li><a href="">Fotos</a></li>
            </ul>
            <ul>
                <li><a href="">Sobre</a></li>
            </ul>
            <ul>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}
