import { useState, useEffect} from 'react';
import "./books.css";
import { useDispatch, useSelector } from 'react-redux';
import {fetchBooks, setBooks} from '../../redux/bookSlicer';
import Table from '../../components/Table';
import TagsTable from '../../components/TagsTable'
import Search from '../../components/Search/Search';
import links from './../../utils/Links.json'

const Books =() => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.books.data);
  const linksAll = links.books;

  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState('');

  const columns = ['name','authors', 'country', 'numberOfPages', 'mediaType','isbn', 'publisher', 'released'];
  const sorting =(col) => {
    if (order === 'asc'){
        const sorted = [...data].sort((a,b) => a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1);
        setOrder('desc')
        dispatch(setBooks(sorted))
    }

    if (order === 'desc'){
        const sorted = [...data].sort((a,b) => a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1);
        setOrder('asc')
        dispatch(setBooks(sorted))
    }
  };

  const publish = (values) => {
    alert(JSON.stringify(values));
  };

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])
    return (
        <div>
            {data.isLoading ? 
            <h1>loading....</h1> : 
            <div>
             <div className='searc'>
                <Search 
                  title= "Search" 
                  onChange={(e) => setSearch(e.target.value)}
                  colorTitle= "white"
                  sizeTitle= '24px'
                  fontInput= 'Times New Roman' 
                  sizeInput= '24px' 
                />
            </div>
            <div>
              <table className='table' >
                  <TagsTable columns={columns} onClick={sorting} upIcon downIcon iconColor='white' color='white'/>
                  <Table entries={data} columns={columns} search={search} color='white' links={linksAll}  />
              </table>
            </div>
        </div>
    }
    </div>
)}

export default Books;