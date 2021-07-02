import React from 'react';

import loadingImage from '../../assets/images/loading.gif';
import './Loading.css';

function Loading() {
    return (
        <div className="loading-container center-absolute">
            <img src={loadingImage} className="loading" alt="Loading animation"/>
            <p>The bits are flowing slowly today...</p>
        </div>
    );
}

export default Loading;