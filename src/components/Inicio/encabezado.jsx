import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from "../../assets/images/enca.jpg"
import imagen_p from "../../assets/images/segunda_portada.jpg"
import "../../assets/css/encabezado.css" 



class Encabezado extends Component {
    render() {
        return (
            <div>
                <div className="encabezado-container" >
                    <img className= 'imagen_p1' src={image} alt=" " />

                    <img className= 'imagen_p2' src={imagen_p} alt=" " />

                </div>
                 <div className="texto_superpuesto">
                    <h1> Raices Rurales </h1>
                    <p className='parrafo'> Descubre la escencia de la comunidad en cada rincon con Raices Rurales </p>
                </div>
            </div>
        );
    }
}


Encabezado.propTypes = {

}; 


export default Encabezado;
