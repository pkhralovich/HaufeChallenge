/*External or react libraries*/
import React from 'react';

/*Services*/
import CharactersService from '../../services/CharactersService';

/* Images */
import closeIcon from '../../assets/images/close.svg';
import aliveIcon from '../../assets/images/alive.svg';
import deadIcon from '../../assets/images/dead.svg';
import unknownIcon from '../../assets/images/unknown.svg';

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { selectCharacter, setFavourite } from "../../state/reducers/characters";

/* Others */
import "./Character.css";
import "./CharacterDetail.css";

function CharacterDetail() {
    const dispatch = useDispatch();
    const service = new CharactersService();

    const character = useSelector((state) => state.characters.selectedCharacter);

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
        if (character.favourite) removeFav(character.favourite);
        else addFav(character.id);
    }

    function onFavSuccess(response) {
        if (response.status === 200) {
            setFav(response.data.id);
        }
    }

    function onUnfavSuccess(response) {
        if (response.status === 200) {
            setFav(undefined);
        }
    }

    function setFav(favId) {
        dispatch(
            setFavourite({
                id: character.id,
                favourite: favId
            })
        );
    }

    function addFav(characterId) {
        service.like(characterId, onFavSuccess);
    }

    function removeFav(favId) {
        service.unlike(favId, onUnfavSuccess);
    }

    function onClickClose() {
        dispatch(selectCharacter(undefined));
    }

    return (
        <div className="detail-container">
            <div className="detail-content center-absolute">
                <img className="close-button" src={closeIcon} onClick={onClickClose} alt="Close button"></img>
                <img className="avatar" src={character.image} alt={character.name + " image"}></img>
                <div className="detail-info">
                    <p className="character-name">{character.name}</p>
                    
                    <p className="character-label">Status:</p>
                    <div className="character-status">
                        <p className="character-value">{character.status}</p>
                        <img src={getStatusIcon(character.status)} alt="Fav indicator"/>
                    </div>
                    
                    <p className="character-label">Variety:</p>
                    <p className="character-value">{character.species}</p>

                    <p className="character-label">Gender:</p>
                    <p className="character-value">{character.gender}</p>

                    <p className="character-label">First known location:</p>
                    <p className="character-value">{character.origin}</p>
                    
                    <p className="character-label">Last known location:</p>
                    <p className="character-value">{character.location}</p>

                    <button className="like-button" onClick={toggleFav}>
                        {getFavouriteText(character.favourite)}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;