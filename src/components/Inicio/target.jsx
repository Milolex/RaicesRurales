import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from "../../assets/images/caminar.png"
import imagen_t from "../../assets/images/target_p.jpeg"

import "../../assets/css/target.css" 

class Target extends Component {
    render() {
        return (
            <div className='contenedor_target'>

                <div className='target_ruta'>

                    <img className= 'image_icon' src={image} />

                    <h1 className='titulo_tar'>Paseo turistico+estadia</h1>
                </div>
                
                <div className='imagen_target'>

                    <img className= 'image_tar' src={imagen_t} />

                </div>

                <div className="texto_sp">

                    <h1 className='txt_sup'> Raices Rurales </h1>

                </div>
                    
               

            </div>

        );
    }
}


Target.propTypes = {

};


export default Target;
