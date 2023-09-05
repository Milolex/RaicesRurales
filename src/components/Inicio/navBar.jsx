import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import "../../assets/css/navbar.css"


class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            mostrarInputs: false,
            ocultarbotones: true
        };
      
    }
   

    mostrar = () => {
        this.setState({ mostrarInputs: !this.state.mostrarInputs });
        this.setState({ ocultarbotones: !this.state.ocultarbotones});
    };

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
                                        <label htmlFor="username"><b>Nombre Usuario</b></label><br/>
                                        <input type="text" id="username" name="username" size="18" required />&nbsp;
                                        <br></br>
                                        <label htmlFor="password"><b>Contraseña</b></label>
                                        <input type="password" id="password" name='password' size="18" required />
                                        <p className="submit"/>
                                        {this.state.mostrarInputs && (
                                            <div>
                                            <label htmlFor="telefono"><b>Telefono</b></label>
                                            <input type="phone" id="telefono" name="telefono" size="18" required />&nbsp;
                                            <label htmlFor="correo"><b>Correo</b></label>
                                            <input type="email" id="email" name="email" size="18" required />&nbsp;
                                            <br/><br/>
                                            <input type="submit" className="button" value="Registrar"/>&nbsp;&nbsp;&nbsp;
                                        </div>)}
                                        
                                        {this.state.ocultarbotones && (
                                            <div>
                                            <input type="submit" className="button" value="Entrar"/>&nbsp;&nbsp;&nbsp;
                                            <button onClick={this.mostrar} className="button">Registrar</button>
                                        </div>)}
                                        <br/><br />
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
