import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <header>
            <h1>This is header </h1>
            <Link to='/about'>About</Link>

        </header>
    );
};

export default Header;