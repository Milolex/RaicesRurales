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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Rutas</a></li>
                        <li><a href='#'>Contactos</a></li>
                        <li><a href='#'>Login</a>
                            <ul>
                            <form ><br/>
                                <b align="center"/>
                                <label><b>Username </b><br/>
                                <input type="text" class="input" size="18" value="" required />&nbsp
                                </label><br></br>
                                <label><b>Contraseña</b><br/>
                                <input type="password" class="input" value="" size="18" required/>
                                </label>
                                <p class="submit"/>
                                <input type="submit" class="button" value="Entrar" />
                                <br/><br/>
                            </form>
                            </ul>

                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}


NavBar.propTypes = {

};


export default NavBar;

