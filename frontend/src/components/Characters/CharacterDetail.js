import React from 'react';

import closeIcon from '../../assets/images/close.svg';
import aliveIcon from '../../assets/images/alive.svg';
import deadIcon from '../../assets/images/dead.svg';
import unknownIcon from '../../assets/images/unknown.svg';

import "./Character.css";
import "./CharacterDetail.css";

function CharacterDetail(props) {
    const CHAR_STATUS = {
        ALIVE: "ALIVE",
        DEAD: "DEAD",
        UNKNOWN: "UNKNOWN"
    }

    function getStatusIcon(status) {
        if (status && status instanceof String) {
            switch(status.toUpperCase()) {
                case CHAR_STATUS.ALIVE: return aliveIcon;
                case CHAR_STATUS.DEAD: return deadIcon;
                default: return unknownIcon;
            }
        } else return unknownIcon;
    }

    return (
        <div className="detail-container">
            <div className="detail-content center-absolute">
                <img className="close-button" src={closeIcon}></img>
                <img className="avatar" src={props.character.image} alt={props.character.name + " image"}></img>
                <div className="detail-info">
                    <p className="character-name">{props.character.name}</p>

                    <p className="character-label">Status:</p>
                    <div className="character-status">
                        <p className="character-value">{props.character.status}</p>
                        <img src={getStatusIcon(props.character.status)}/>
                    </div>
                    
                    <p className="character-label">Variety:</p>
                    <p className="character-value">{props.character.type}</p>

                    <p className="character-label">Gender:</p>
                    <p className="character-value">{props.character.gender}</p>

                    <p className="character-label">First known location:</p>
                    <p className="character-value">{props.character.origin}</p>
                    
                    <p className="character-label">Last known location:</p>
                    <p className="character-value">{props.character.location}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;