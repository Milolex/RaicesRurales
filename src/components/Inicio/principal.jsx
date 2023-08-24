// ComponenteADesactivar.js
import React, { useState } from 'react';
import "../../assets/css/navbar.css"
import Encabezado from './encabezado';
import Promo from './promo';
const Principal = () => {
    const [activo, setActivo] = useState(true);

    const handleClick = () => {
    setActivo(false);
    };

    return (
    <div>
        <div className="nav">
            <nav className="navbar">
                <ul className="navLis">
                <div className='logo'/>
                    <li><a href="#" onClick={handleClick}>Inicio</a></li>
                    <li><a href="#">Rutas</a></li>
                    <li><a href='#'>Contactos</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </nav>
            
            
            </div>
        {activo ? (
        <div>
            <Encabezado/>
            <Promo/>
        </div>
        
        
        ) : (
        <div>

        </div>
        )}
    </div>
    );
};

export default Principal;
