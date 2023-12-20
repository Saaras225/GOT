import React from "react";
import PropTypes from 'prop-types';
import './Table.css';

const Table= ({entries, columns}) => {
    return(
          <tbody>
          {entries.map((entry) => (
             <tr key={entry.id}>
                 {columns.map((column) => (
                     <td className='users-table-cell' key={column}>{entry[column]}</td>     
                 ))}
             </tr>
         ))}
         </tbody>
    );
};

Table.propTypes = {
 entries: PropTypes.array.isRequired,
 columns: PropTypes.array.isRequired
}

export default Table;