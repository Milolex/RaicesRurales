import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../../assets/css/navbar.css"

class NavBar extends Component {
    render() {
        console.log("isMenuOpen:", this.props.isMenuOpen);
        return (
            <div className="nav">
                <nav className="navbar">
                    <ul className="navLis">
                        <div className='logo'/>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Rutas</a></li>
                        <li><a href='#'>Contactos</a></li>
                        <li>
                            <label className='labelcheck' htmlFor="menuCheckbox">
                                <input type="checkbox" className='check' id="menuCheckbox" onChange={this.props.onCheckboxChange}/>
                                Login </label>
                            {this.props.isMenuOpen && (
                                <ul className="submenu">
                                    <form className='login'>
                                        <b align="center" />
                                        <br/>
                                        <label htmlFor="username"><b>Username </b><br/></label>
                                        <input type="text" id="username" name="username" size="18" required />&nbsp;
                                        <br></br><br/>
                                        <label htmlFor="password"><b>Contraseña</b><br/></label>
                                        <input type="password" id="password" name='password' size="18" required />
                                        <p className="submit" />
                                        <input type="submit" className="button" value="Entrar" />
                                        <br /><br />
                                    </form>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
