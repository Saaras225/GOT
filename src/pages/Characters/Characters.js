import { useState, useEffect} from 'react';
import "./characters.css";

const Header = ({columns}) => {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                 <th key={column} className='users-table-cell'>{column}</th>   
                ))}
            </tr>
        </thead>
    );
};

const Content = ({entries, columns}) => {
    console.log(entries);
    return(
        <tbody>
         {entries.map((entry) => (
            <tr key={entry.id}>
                {columns.map((column) => (
                    <td key={column} className='users-table-cell'>
                        {entry[column]}
                    </td>
                ))}
            </tr>
         ))}

        </tbody>
    );
}

const Characters =()=>{
  const [data, setData] = useState([])
  const columns = ['aliases', 'gender', 'born'];
//   const houses= "https://www.anapioficeandfire.com/api/houses";
//   const books = "https://www.anapioficeandfire.com/api/books";
  const characters = "https://www.anapioficeandfire.com/api/characters";
  
  
  useEffect(()=>{
    fetch(characters)
    .then((res) => res.json())
    .then((data) => setData(data))
  }, []);
  
  console.log(data);
    return (
        <div>
            SEARCH BAR
            <table className='users-table'>
                <Header columns={columns}/>
                <Content entries={data} columns={columns}/>
            </table>
        </div>
    
    )
}

export default Characters;