import React from 'react';

/*Services*/
import CharactersService from '../../services/CharactersService';

/* Images */
import closeIcon from '../../assets/images/close.svg';
import aliveIcon from '../../assets/images/alive.svg';
import deadIcon from '../../assets/images/dead.svg';
import unknownIcon from '../../assets/images/unknown.svg';

/* Others */
import "./Character.css";
import "./CharacterDetail.css";

function CharacterDetail(props) {
    const service = new CharactersService();

    const CHAR_STATUS = {
        ALIVE: "ALIVE",
        DEAD: "DEAD",
        UNKNOWN: "UNKNOWN"
    }

    function getStatusIcon(status) {
        if (status) {
            switch(status.toUpperCase()) {
                case CHAR_STATUS.ALIVE: return aliveIcon;
                case CHAR_STATUS.DEAD: return deadIcon;
                default: return unknownIcon;
            }
        } else return unknownIcon;
    }

    function getFavouriteText(fav) {
        if (fav) return "Remove from favs";
        else return "Add to favs";
    }

    function toggleFav() {
        if (props.character.favourite) removeFav(props.character.favourite);
        else addFav(props.character.id);
    }

    function addFav(characterId) {
        service.like(characterId);
    }

    function removeFav(favId) {
        service.unline(favId);
    }

    return (
        <div className="detail-container">
            <div className="detail-content center-absolute">
                <img className="close-button" src={closeIcon} onClick={props.onClickClose} alt="Close button"></img>
                <img className="avatar" src={props.character.image} alt={props.character.name + " image"}></img>
                <div className="detail-info">
                    <p className="character-name">{props.character.name}</p>
                    
                    <p className="character-label">Status:</p>
                    <div className="character-status">
                        <p className="character-value">{props.character.status}</p>
                        <img src={getStatusIcon(props.character.status)} alt="Fav indicator"/>
                    </div>
                    
                    <p className="character-label">Variety:</p>
                    <p className="character-value">{props.character.species}</p>

                    <p className="character-label">Gender:</p>
                    <p className="character-value">{props.character.gender}</p>

                    <p className="character-label">First known location:</p>
                    <p className="character-value">{props.character.origin}</p>
                    
                    <p className="character-label">Last known location:</p>
                    <p className="character-value">{props.character.location}</p>

                    <button class="like-button" onClick={toggleFav}>
                        {getFavouriteText(props.character.favourite)}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;