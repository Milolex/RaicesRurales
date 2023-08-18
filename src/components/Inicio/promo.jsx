import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../../assets/css/promo.css";
import cabana from "../../assets/images/cabina.png";
import etiqueta from "../../assets/images/etiqueta.png";
import jeep from "../../assets/images/jeeps.png";


class Promo extends Component {
    render() {
        return (
            <div>
                <h3>PROMOCIONES Y OFERTAS DE VIAJE</h3> 
                <div className='listado'> 
                    <nav>
                        <ul className="lista">
                            <li><img src={cabana}/><a href="#">Estadía</a></li>
                            <li><img src={etiqueta}/><a href="#">Especial</a></li>
                            <li><img src={jeep}/><a href='#'>Estadias + Tour</a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        );
    }
}


Promo.propTypes = {

};


export default Promo;
