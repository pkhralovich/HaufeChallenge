import React from 'react';

import "./Navbar.css";
import icon from "../../assets/images/icon.svg";

function Navbar() {
    return (
        <nav className="navbar">
            <a className="nav-item nav-clickable home" href="https://rickandmortyapi.com/">
                <img src={icon} alt="Rick and Morty logos"/>
                <p>Rick & Morty</p>
            </a>
            <div className="nav-item">Pavel Khralovich</div>
            <div className="nav-spacing"></div>
            <div className="nav-item nav-clickable">
                <p> Logout </p>
            </div>
        </nav>
    )
}

export default Navbar;