import { useState, useEffect} from 'react';
import "./characters.css";
import characters from './Characters.json';

const Characters =()=>{
    const data = characters;
    console.log(data.characters)
    return (
        data.characters.map((item) => {
            return(
                <div className='character'>
                    <div>
                        <img 
                        src={item.characterImageThumb} 
                        alt={item.characterName} width="150" 
                        height="200" />
                    </div>
                    <div className='personalData'>
                        <div>
                            <h3>Nombre</h3>
                            <p>{item.characterName}</p>
                        </div>
                        <div>
                            <h3>Casa</h3>
                            <p>{item.houseName}</p>
                        </div>
                        <div>
                        <h3>Padres</h3>
                        <p>{item.parents}</p>
                        </div>
                        <div>
                        <h3>Hermanos</h3>
                        <p>{item.siblings}</p>
                        </div>
                        <div>
                        <h3>Asesinados</h3>
                        <p>{item.killed}</p>
                        </div>
                    </div>
                    <div className='personalData'>
                        <div>
                            <h3>Nombre</h3>
                            <p>{item.characterName}</p>
                        </div>
                        <div>
                            <h3>Casa</h3>
                            <p>{item.houseName}</p>
                        </div>
                        <div>
                        <h3>Padres</h3>
                        <p>{item.parents}</p>
                        </div>
                        <div>
                        <h3>Hermanos</h3>
                        <p>{item.siblings}</p>
                        </div>
                        <div>
                        <h3>Asesinados</h3>
                        <p>{item.killed}</p>
                        </div>
                    </div>
                </div>
            );
        })    
    );
}

export default Characters;