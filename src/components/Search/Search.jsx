import React from "react";
import PropTypes from 'prop-types';
import './Search.css';

const Search= (props) => {
    const {
        title, 
        colorTitle, 
        fontTitle, 
        sizeTitle, 
        background, 
        colorInput, 
        fontInput, 
        sizeInput, 
        onChange
    } = props;
    return(
     <div className="search">
        <div>
        <label id='label' for="search" 
            style={{
                color:`${colorTitle}`, 
                fontFamily:`${fontTitle}`,  
                fontSize:`${sizeTitle}`
                }}>
            {title}
        </label>

        </div>
        <div>
            <input 
             type="text" 
             id="search" 
             name="search" 
             onChange={onChange} 
             style={{
              color:`${colorInput}`, 
              backgroundColor:`${background}`, 
              fontColor:`${colorInput}`, 
              fontFamily:`${fontInput}`, 
              fontSize:`${sizeInput}` 
             }} 
            />
        </div>
     </div>
    );
};

Search.propTypes = {
 title: PropTypes.string,
 type: PropTypes.string,
 onChange: PropTypes.func,
 colorTitle: PropTypes.string,
 sizeTile: PropTypes.string,
 backGround: PropTypes.string,
 colorInput: PropTypes.string,
 fontTitle: PropTypes.string,
 fontInput: PropTypes.string,
 sizeInput: PropTypes.string,
}

export default Search;