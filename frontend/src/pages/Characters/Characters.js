import React from 'react';
import { useEffect, useState } from "react";

/* Components */
import Navbar from '../../components/Navbar/Navbar.js';
import CharacterItem from '../../components/Characters/CharacterItem.js';
import CharacterDetail from '../../components/Characters/CharacterDetail.js';
import Loading from '../../components/Loading/Loading.js';

import "./Characters.css";

function Characters() {
    let character = {
        id: 1,
        name: "Pavel",
        status: "Alive",
        type: "Human",
        gender: "Male",
        origin: "Earth 1",
        location: "Earth 2",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    };

    let aux = [
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character,
        character
    ] 

    const [characters, setCharacters] = useState(aux);
    const [selectedCharacter, setSelectedCharacter] = useState(undefined);
    const [loading, setLoading] = useState(false);

    function renderContent() {
        if (loading) return <Loading/>;
        else {
            let items = [];
            characters.map((character, index) => items.push(<CharacterItem key={index} character={character}/>));

            let detail = null;
            if (selectedCharacter) detail = <CharacterDetail character={selectedCharacter}/>;
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