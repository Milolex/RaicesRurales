import React, { Component} from 'react';
import PropTypes from 'prop-types';
import "../../assets/css/navbar.css"
import Encabezado from './encabezado';
import Promo from './promo';    
class NavBar extends Component {
    render() {

        


        return (
            <div className="nav">
                <nav className="navbar">
                    <ul className="navLis">
                    <div className='logo'/>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Rutas</a></li>
                        <li><a href='#'>Contactos</a></li>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </nav>
                <Encabezado/>
                <Promo/>
            
            </div>
        );
    }
}


NavBar.propTypes = {

};


export default NavBar;
