import React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

/* Components */
import Navbar from '../../components/Navbar/Navbar.js';
import CharacterItem from '../../components/Characters/CharacterItem.js';
import CharacterDetail from '../../components/Characters/CharacterDetail.js';
import Loading from '../../components/Loading/Loading.js';

/*Services*/
import CharactersService from '../../services/CharactersService';

/*Others*/
import "./Characters.css";

function Characters(props) {
    const history = useHistory();
    const service = new CharactersService();

    const [characters, setCharacters] = useState([]);
    const [pages, setPages] = useState({});
    const [currentPage, setCurrentPage] = useState(getPage());

    const [selectedCharacter, setSelectedCharacter] = useState(undefined);
    const [loading, setLoading] = useState(true);

    function getPage() {
        const query = queryString.parse(props.location.search);
        
        let page = parseInt(query.page, 0);
        if (!page) page = 1;  

        return page;
    }

    function onCharactersSuccess(response) {
        switch(response.status) {
            case 200: {
                setCharacters(response.data.results);
                setPages(response.data.info);
                break;
            }
            case 401: {
                localStorage.clear();
                history.push("/login");
                break;
            }
            default: onCharactersError();
        }

        setLoading(false);
    }

    function onCharactersError() {
        history.push("/notFound");
    }

    function onSelect(character) {
        return () => {
            setSelectedCharacter(character);
        }
    }

    useEffect(() => {
        history.push("/characters?page=" + currentPage);
        service.get(currentPage, onCharactersSuccess, onCharactersError);
    }, [currentPage]);

    function renderContent() {
        if (loading) return <Loading/>;
        else {
            let items = [];
            characters.forEach((character) => {
                let component = <CharacterItem key={character.id} character={character} onClickItem={onSelect(character)}/>;
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

    function moveNext() {
        setLoading(true);
        setCurrentPage(currentPage+1);
    }

    function movePrev() {
        setLoading(true);
        setCurrentPage(currentPage-1);
    }

    function renderPagination() {
        if (!pages || !currentPage || loading) return null;

        let buttonNext = null;
        if (pages.next) buttonNext = <button onClick={moveNext}>Next</button>

        let buttonPrev = null;
        if (pages.prev) buttonPrev = <button onClick={movePrev}>Prev</button>

        return (
            <div className="pagination">
                 {buttonPrev}
                <p>{currentPage}</p>
                {buttonNext}
            </div>
        )
    }

    return (
        <div>
            <Navbar></Navbar>
            {renderContent()}
            {renderPagination()}
        </div>
    );
}

export default Characters;