import React from 'react'
import './header.css'

export default function Header() {
    return (
        <header>
            <div className="container">
                
                <h2 className="logo">NasaClicks</h2>
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Estrelas</a>
                    <a href="#">Galáxias</a>
                    <a href="#">Rovers</a>
                </nav>
            </div>
        </header>
    );
}
