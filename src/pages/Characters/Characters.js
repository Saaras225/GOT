import { useState, useEffect} from 'react';
import "./characters.css";
import characters from './Characters.json';

const Characters =()=>{
    const data = characters;
    const [cast, setCast] = useState([]);
    const urlGOT = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbrby4iLrUkapqxUXakoY19uL79BW-CToEg&usqp=CAU';
    const castAll = data.characters.map((item) => {
        return(
            <div className='itemCharac'>
                <img 
                    className='imgCharac'
                    src={item.characterImageThumb} 
                    alt={item.characterName} 
                    width="350" 
                    height="290" 
                />
            </div>
        )});

    useEffect(() => {
     setCast(castAll)
    })
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