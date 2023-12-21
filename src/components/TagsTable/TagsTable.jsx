import React from "react";
import PropTypes from 'prop-types';
import './TagsTable.css';

const TagsTable= (props) => {
    const {columns, onClick, upIcon, downIcon, border, iconColor, color} = props;
    return(
        <thead>
        {columns.map((column) =>
         <th key={column} style={{border: `${border}`}} className='users-table-cell' onClick={()=>{onClick(column)}}>
             <div className="arrows">
                 <div style={{color: `${color}`}} >
                 {column}
                 </div>
                 <div className="arrowsIcon">
                 {upIcon && <span style={{color: `${iconColor}`}} >▲</span>}
                 {downIcon && <span style={{color: `${iconColor}`}}>▼</span>}
                 </div>
             </div>
             
         </th>)}
     </thead>
    );
};

TagsTable.propTypes = {
 columns: PropTypes.array.isRequired,
 onClick: PropTypes.func,
 upIcon: PropTypes.bool,
 downIcon: PropTypes.bool,
 border: PropTypes.string,
 iconColor: PropTypes.string,
 color: PropTypes.string,
}

export default TagsTable;