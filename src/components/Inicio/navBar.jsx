import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../../assets/css/navbar.css"

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <nav className="navbar">
                    <ul className="navLis">
                    <div className='logo'/>
                        <li><a href="#">Inicio1</a></li>
                        <li><a href="#">Rutas</a></li>
                        <li><a href='#'>Contactos</a></li>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}


NavBar.propTypes = {

};


export default NavBar;
