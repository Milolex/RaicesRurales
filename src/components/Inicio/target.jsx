import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imagen_t from "../../assets/images/caminar.png"
import "../../assets/css/target.css" 

class Target extends Component {
    render() {
        return (
            <div className='target_ruta'>
                <h1><img src={imagen_t}/>Paseo turistico+estadia</h1>
               
            </div>
        );
    }
}


Target.propTypes = {

};


export default Target;
