import React from "react";
import PropTypes from 'prop-types';
import './Header.css';

const Header= (props) => {
    const {columns, onClick, upIcon, downIcon} = props;
    return(
        <thead>
        {columns.map((column) =>
         <th key={column.id} className='users-table-cell' onClick={onClick}>
             <div className="arrows">
                 <div>
                 {column}
                 </div>
                 <div className="arrowsIcon">
                 {upIcon && <span>▲</span>}
                 {downIcon && <span>▼</span>}
                 </div>
             </div>
             
         </th>)}
     </thead>
    );
};

Header.propTypes = {
 columns: PropTypes.array.isRequired,
 onClick: PropTypes.func,
 upIcon: PropTypes.bool,
 downIcon: PropTypes.bool,
}

export default Header;