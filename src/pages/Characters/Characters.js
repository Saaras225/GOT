import { useState, useEffect} from 'react';
import "./characters.css";
import characters from './../../utils/Characters.json';
import { Link } from "react-router-dom"

const Characters =()=>{
    const data = characters;
    const [cast, setCast] = useState([]);
    const urlGOT = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbrby4iLrUkapqxUXakoY19uL79BW-CToEg&usqp=CAU';
    const castAll = data.characters.map((item, index, arr) => {
        return(
            <div className='itemCharac'>
                <Link to={{pathname:`/Card/${item.characterName}`, state:{item: item}}} >
                <img 
                    key={item}
                    className='imgCharac'
                    src={item.characterImageThumb} 
                    alt={item.characterName} 
                    width="350" 
                    height="290" 
                />
                </Link>
            </div>
    )});
    useEffect(() => {
     setCast(castAll)
    }, [])
    return (
        <div>
            <div className='titleGOT'>
                <img 
                 className='TitleGOT'
                 src={urlGOT}
                 alt='got' 
                 width="500" 
                 height="100" 
                />
            </div>
            <div className='characterContainer'>
                {cast}
            </div>
       </div>
    );
}

export default Characters;