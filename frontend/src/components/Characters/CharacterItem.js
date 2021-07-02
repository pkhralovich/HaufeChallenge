import React from 'react';

import "./Character.css";
import "./CharacterItem.css";

function CharacterItem(props) {
    return (
        <div className="character-item" onClick={props.onClickItem}>
            <img className="avatar" src={props.character.image} alt={props.character.name + " image"}></img>
            <div className="character-info">
                <p className="character-name">{props.character.name}</p>

                <p className="character-value">{props.character.status} - {props.character.type}</p>
            
                <p className="character-label">First known location:</p>
                <p className="character-value">{props.character.origin}</p>
                
                <p className="character-label">Last known location:</p>
                <p className="character-value">{props.character.location}</p>
            </div>
        </div>
    );
}

export default CharacterItem;