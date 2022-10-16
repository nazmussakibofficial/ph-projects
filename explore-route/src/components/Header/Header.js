import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </div>
    );
};

export default Header;