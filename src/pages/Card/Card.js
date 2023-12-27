import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import characters from './../../utils/Characters.json';
import { useNavigate, useParams } from "react-router-dom";
import './card.css'


const Card =(props)=> {
    let navigate= useNavigate();
    let { person } = useParams();
    const data = characters;
    const cast = data.characters.filter((item) => item.characterName === person);
    console.log(data.characters.filter((item) => item.characterName === 'Jon Snow').map((item) => item.houseName.length));
    return (
        <>
        {cast.map((item) => {
            return (
            <div key={item.id} className='info'>
                <div className='img'>
                <img 
                    key={item}
                    className='imgCharac'
                    src={item.characterImageFull} 
                    alt={item.characterName} 
                    width="1000" 
                    height="650" 
                />
                </div>
                <div className='personalData'>
                        <div className='boxes'>
                            <h3>Nombre:</h3>
                            <p>{item.characterName}</p>
                        </div>

                        <div className='boxes'>
                            <h3>Casa:</h3>
                            <p>{item.houseName}</p>
                        </div>
                        <div className='boxes'>
                        <h3>Padres:</h3>
                        <p>{item.parents.map((item) =><p>{item}</p>)}</p>
                        </div>
                        {item.siblings? 
                        <div className='boxes'>
                        <h3>Hermanos:</h3>
                        <p>{item.siblings.map((item) =><p>{item}</p>)}</p>
                         </div> : null}
                        {item.marriedEngaged? 
                        <div className='boxes'>
                        <h3>Parejas:</h3>
                        <p>{item.marriedEngaged.map((item) => <p>{item}</p>)}</p>
                        </div> : null}
                        {item.killed ?
                        <div className='boxes'> 
                        <h3>Asesinados:</h3>
                        <p>{item.killed.map((item) =><p>{item}</p>)}</p>
                        </div> : null}
                </div>
            </div> );
            })}
        </>
    );

}

Card.prototypes = {
    text: PropTypes.object,
}

export default Card;