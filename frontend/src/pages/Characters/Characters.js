import React from 'react';
import { useEffect, useState } from "react";

/* Components */
import Navbar from '../../components/Navbar/Navbar.js';
import CharacterItem from '../../components/Characters/CharacterItem.js';
import CharacterDetail from '../../components/Characters/CharacterDetail.js';
import Loading from '../../components/Loading/Loading.js';

/*Services*/
import CharactersService from '../../services/CharactersService';
import "./Characters.css";

function Characters() {
    const service = new CharactersService();

    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(undefined);
    const [loading, setLoading] = useState(true);

    function onCharactersSuccess(response) {
        setLoading(false);
        switch(response.status) {
            case 200: {
                setCharacters(response.data.results);
                break;
            }
            default: return;
        }
    }

    function onCharactersError(error) {

    }

    function onSelect(character) {
        return () => {
            setSelectedCharacter(character);
        }
    }

    useEffect(() => {    
        service.get(1, onCharactersSuccess, onCharactersError);
    }, []);

    function renderContent() {
        if (loading) return <Loading/>;
        else {
            let items = [];
            characters.map((character, index) => {
                let component = <CharacterItem key={index} character={character} onClickItem={onSelect(character)}/>;
                items.push(component);
            });

            let detail = null;
            if (selectedCharacter) detail = <CharacterDetail character={selectedCharacter} onClickClose={onSelect(undefined)}/>;
            return (
                <div>
                    <div className="characters-list">
                        {items}
                    </div>
                    {detail}
                </div>
            );
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            {renderContent()}
        </div>
    );
}

export default Characters;