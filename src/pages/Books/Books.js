import { useState, useEffect} from 'react';
import "./books.css";
import FormBook from '../FormBook/FormBook';
import { useDispatch, useSelector } from 'react-redux';
import {fetchBooks} from '../../redux/bookSlicer';

const Header = ({columns, sorting}) => {
    return (
        <thead>
           {columns.map((column) =>
            <th key={column.id} className='users-table-cell' onClick={()=>sorting(column)}>
                <div className='titles'>
                    <div>
                    {column}
                    </div>
                    <div>
                    <span>▲</span>
                    <span>▼</span>
                    </div>
                </div>
                
            </th>)}
        </thead>
    );
};

const Content = ({entries, columns, search}) => {
    return(
        <tbody>
         {entries.filter((item) =>
            search === ''? item : item.name.toLowerCase().includes(search) || 
            item.authors.some((author)=> author.toLowerCase().includes(search))? item : null).map((entry) => (
            <tr key={entry.id}>
                {columns.map((column) => (
                    <td className='users-table-cell' key={column}>{entry[column]}</td>     
                ))}
            </tr>
        ))}
        </tbody>
    );
};

const Books =() => {
  const dispatch = useDispatch();
  const dataIs = useSelector(state => state.books.data);

  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState('');
  const [data, setData] = useState(dataIs);

  const columns = ['name','authors', 'country', 'numberOfPages', 'mediaType','isbn', 'publisher', 'released'];
  const sorting =(col) => {
    if (order === 'asc'){
        const sorted = [...data].sort((a,b) => a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1);
        setData(sorted)
        setOrder('desc')
    }

    if (order === 'desc'){
        const sorted = [...data].sort((a,b) => a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1);
        setData(sorted)
        setOrder('asc')
    }
  };

  useEffect(() => {
    dispatch(fetchBooks())
  })

    return (
        <div>
            {data.isLoading ? 
            <h1>loading....</h1> : 
            <div>
             <form action="/action_page.php">
                <label for="search">Search:</label>
                <input type="text" id="search" name="search" onChange={(e) => setSearch(e.target.value)} />
            </form>
            <table className='users-table'>
                <Header columns={columns} sorting={sorting} />
                <Content entries={data} columns={columns} search={search}/>
            </table>
            <div>
                <FormBook />
            </div>
        </div>
    }
    </div>
)}

export default Books;