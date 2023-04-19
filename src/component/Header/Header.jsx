

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>

            <Link to ="/">Home</Link>
            <Link to ="/register">Register</Link>
            <Link to ="/login">Login</Link>
            <Link to ="/registerrbs">Register RBS</Link>
            <Link to= "/register-bs">RegisterBS</Link>
            
        </nav>
    );
};

export default Header;