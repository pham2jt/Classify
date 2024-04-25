import React from 'react';
import './header.css';
import header from '../assets/header-small.png';

const SmallHeader = () => {
    return (
        <div className="header">
            <img src={header} alt="header"></img>
        </div>
    );
};

export default SmallHeader;