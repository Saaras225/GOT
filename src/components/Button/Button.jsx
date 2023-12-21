import React from "react";
import PropTypes from 'prop-types';
import './Button.css';

const Button= (props) => {
    const {
        text, 
        color, 
        font, 
        size, 
        backColor, 
        border, 
        onClick
    } = props;
    return(
        <button 
            className="button"
            onClick={onClick}
            style={{
                color:`${color}`, 
                fontFamily:`${font}`,  
                fontSize:`${size}`, 
                borderRadius:`${border}`, 
                backgroundColor:`${backColor}`
            }}
         >
            {text}
        </button>
    );
};

Button.propTypes = {
 text: PropTypes.string,
 color: PropTypes.string,
 font: PropTypes.string,
 size: PropTypes.string,
 border:PropTypes.string,
 backColor: PropTypes.string,
 onClick: PropTypes.func,
}

export default Button;