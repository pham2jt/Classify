import React from 'react';
import './header.css';
import header from '../assets/header.png';

const Header = () => {
    return (
        <div className="header">
            <img src={header} alt="university"></img>
        </div>
    );
};

export default Header;