/*External or react libraries*/
import React from 'react';
import { useHistory } from "react-router-dom";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from '../../services/reducers/user';

/*Other*/
import "./Navbar.css";
import icon from "../../assets/images/icon.svg";

function Navbar() {
    const history = useHistory();

    const username = useSelector((state) => state.user.username);
    const dispatch = useDispatch();

    function onClickLogout() {
        dispatch(clearUser());
        localStorage.clear();
        history.push("/login");
    }

    function renderLogout() {
        if (username) {
            return (
                <div className="nav-item nav-clickable" onClick={onClickLogout}>
                    <p> Logout </p>
                </div>
            );
        } else return null;
    }


    return (
        <nav className="navbar">
            <a className="nav-item nav-clickable home" href="https://rickandmortyapi.com/">
                <img src={icon} alt="Rick and Morty logos"/>
                <p>Rick & Morty</p>
            </a>
            <div id="username" className="nav-item">{username}</div>
            <div className="nav-spacing"></div>
            { renderLogout() }
        </nav>
    )
}

export default Navbar;