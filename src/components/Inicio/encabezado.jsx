import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from "../../assets/images/imgencabezado.jpg"
import "../../assets/css/encabezado.css" 



class Encabezado extends Component {
    render() {
        return (
            <div>
                <div className="encabezado-container" >
                    <img src={image} alt="Descripción de la imagen"/>
                </div>
            </div>
        );
    }
}


Encabezado.propTypes = {

}; 


export default Encabezado;
