import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../../assets/css/promo.css"

class Promo extends Component {
    render() {
        return (
            <div>
                <div className="conte">
                    <h3>PROMOCIONES Y OFERTAS DE VIAJE</h3>
                    
                </div>
                <div className='listado'> 
                    <nav>
                        <ul className="lista">
                            <li><a href="#">Estadía</a></li>
                            <li><a href="#">Especial</a></li>
                            <li><a href='#'>Estadias + Tour</a></li>
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
