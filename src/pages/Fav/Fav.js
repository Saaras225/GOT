import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rmvItem } from '../../redux/favSlicer';
import './fav.css'

const Favs =()=> {
    const dispatch = useDispatch();
    const items = useSelector(state => state.favs.items)
    const [button, setButton] = useState(true);
    
    return(
        <>
        <div className='container'>
            {items.map((item) => {
                return (
                <div key={item.id} className= 'card'>
                    <div id="erase">
                        <button onClick={()=>{
                            dispatch(rmvItem(item))
                            setButton(button)}}>X</button>
                    </div>
                    <div>
                    <p><b>authors: </b> {item.authors}</p>
                    <p><b>isbn: </b>{item.isbn}</p>
                    <p><b>title: </b>{item.name}</p>
                    <p><b>Nº of pages: </b>{item.numberOfPages}</p>
                    </div>
                </div>
                )
            })}
         </div>
        </>

    );
};

export default Favs;