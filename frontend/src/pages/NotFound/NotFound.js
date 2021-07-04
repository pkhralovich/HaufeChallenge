import React from 'react';

/* Components */
import Navbar from '../../components/Navbar/Navbar.js';

/* Others */
import './NotFound.css';
import imageNotFound from '../../assets/images/not-found.png';

function NotFound() {
    return (
        <div className="not-found">
            <Navbar/>
            <div className="content center-absolute">
                <img src={imageNotFound} alt="Rick surprised"/>
                <h1>Oops... Page not found</h1>
                <h2>Somebody has disconnected the wrong cable!</h2>
            </div>
        </div>
    )
}

export default NotFound;