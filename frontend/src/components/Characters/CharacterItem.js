import React from 'react';

import "./Character.css";
import "./CharacterItem.css";

import favIcon from "../../assets/images/favourite.svg";
import nonFavIcon from "../../assets/images/nonFavourite.svg";

function CharacterItem(props) {
    function getFavouriteIcon() {
        if (props.favourite) return favIcon;
        else return nonFavIcon;
    }

    return (
        <div className="character-item" onClick={props.onClickItem}>
            <img className="avatar" src={props.character.image} alt={props.character.name + " image"}></img>
            <div className="character-info">
                <p className="character-name">{props.character.name}</p>

                <p className="character-value">{props.character.status} - {props.character.species}</p>
            
                <p className="character-label">First known location:</p>
                <p className="character-value">{props.character.origin}</p>
                
                <p className="character-label">Last known location:</p>
                <p className="character-value">{props.character.location}</p>

                <img className="fav-icon" src={getFavouriteIcon()}></img>
            </div>
        </div>
    );
}

export default CharacterItem;