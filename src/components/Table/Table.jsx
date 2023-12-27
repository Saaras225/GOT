import React from "react";
import {useState} from 'react';
import PropTypes from 'prop-types';
import './Table.css';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/favSlicer';



const Table= (props) => {
    const dispatch = useDispatch();
    const {entries, columns, search, color, links} = props;
    const [btnAdd, setBtnAdd] = useState(false)
    function addChange(item){
        dispatch(addItem(item));
        setBtnAdd(btnState => !btnState);
    }

    let tggle = btnAdd ? 'White' : 'Red';
    return(
        search? 
         <tbody> 
            {entries.filter((item) =>
                search === ''? 
                item : 
                item.name.toLowerCase().includes(search.toLowerCase()) || 
                item.authors.some((author)=> author.toLowerCase().includes(search.toLowerCase()))? 
                item : 
                null).map((entry) => (
                <tr key={entry.id}>
                    {columns.map((column) => (
                        column === 'name'? 
                        <td className='users-table-cell' key={column}>
                         <a href={links? links.find((item) => item.name == entry[column]).link : ''} target="_blank" style={{color: `${color}`}}>{entry[column]}</a>:
                        </td> :
                        <td className='users-table-cell' key={column}>
                            <p style={{color: `${color}`}}>{entry[column]}</p>
                        </td>    
                    ))}
                </tr>
                
            ))}
        </tbody> :
         <tbody> 
            {entries.map((entry) => (
                <tr key={entry.id}>
                    {columns.map((column) => ( 
                        column === 'name'? 
                        <td className='users-table-cell' key={column}>
                         <a href={links? links.find((item) => item.name == entry[column]).link : ''} target="_blank" style={{color: `${color}`}}>{entry[column]}</a>:
                        </td> :
                       column === 'add Fav'?
                        <td className='users-table-cell' key={column}>
                          <button className={`btn${tggle}`} onClick={()=>{addChange(entry)}}>♥</button>
                        </td> :
                        column === 'released'?
                        <td className='users-table-cell released' key={column}>
                            <p style={{color: `${color}`}}>{entry.released.split('-')[0]}</p>
                        </td>:
                        <td className='users-table-cell' key={column}>
                            <p style={{color: `${color}`}}>{entry[column]}</p>
                        </td> 
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

Table.propTypes = {
 entries: PropTypes.any,
 columns: PropTypes.any,
 search: PropTypes.string,
 color: PropTypes.string,
 links: PropTypes.any,
}

export default Table;