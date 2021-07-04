import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

/* Components */
import Navbar from "../../components/Navbar/Navbar.js";
import CharacterItem from "../../components/Characters/CharacterItem.js";
import CharacterDetail from "../../components/Characters/CharacterDetail.js";
import Loading from "../../components/Loading/Loading.js";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "../../state/reducers/user";
import { setCharacters } from "../../state/reducers/characters";

/*Services*/
import CharactersService from "../../services/CharactersService";
import UserService from "../../services/UserService";

/*Others*/
import "./Characters.css";

function Characters(props) {
    const history = useHistory();
    const serviceCharacters = new CharactersService();
    const serviceUser = new UserService();

    /* Component state */
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(getPage());
    const [pages, setPages] = useState({});

    /* Redux state */
    const characters = useSelector((state) => state.characters.characters);
    const selectedCharacter = useSelector((state) => state.characters.selectedCharacter);
    const dispatch = useDispatch();

    function getPage() {
        const query = queryString.parse(props.location.search);
        
        let page = parseInt(query.page, 0);
        if (!page) page = 1;  

        return page;
    }

    function onCharactersSuccess(response) {
        switch(response.status) {
            case 200: {
                dispatch(setCharacters(response.data.results));
                setPages(response.data.info);
                break;
            }
            case 401: {
                redirectLogin();
                break;
            }
            default: onCharactersError();
        }

        setLoading(false);
    }

    function onUserSuccess(response) {
        switch(response.status) {
            case 200: {
                dispatch(
                    setUser({
                        username: response.data.username,
                        id: response.data.id
                    })
                );
                break;
            }
            case 401: {
                redirectLogin();
                break;
            }
            default: onCharactersError();
        }
    }

    function onCharactersError() {
        history.push("/notFound");
    }

    function redirectLogin() {
        clearUser();
        localStorage.clear();
        history.push("/notFound");
    }

    function moveNext() {
        setLoading(true);
        setCurrentPage(currentPage+1);
    }

    function movePrev() {
        setLoading(true);
        setCurrentPage(currentPage-1);
    }

    useEffect(() => {
        history.push("/characters?page=" + currentPage);
        serviceCharacters.get(currentPage, onCharactersSuccess, onCharactersError);
    }, [currentPage]);

    useEffect(() => {
        serviceUser.get(onUserSuccess, redirectLogin);
    }, []);

    function renderContent() {
        if (loading) return <Loading/>;
        else {
            let items = [];
            if (characters) {
                characters.forEach((character) => {
                    let component = <CharacterItem key={character.id} character={character}/>;
                    items.push(component);
                });
            }   
            
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