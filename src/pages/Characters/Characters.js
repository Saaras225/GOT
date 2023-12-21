import { useState, useEffect} from 'react';
import "./characters.css";
import characters from './Characters.json';

const Characters =()=>{
    const data = characters;
    return (
        <div>
            <div className='choose'>
                <h1 style={{color:'white', fontSize:'35px'}}>Personajes</h1>
            </div>
            <div className='characterContainer'>
                {data.characters.map((item) => {
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
                    )})};
            </div>
       </div>
        );
}

export default Characters;