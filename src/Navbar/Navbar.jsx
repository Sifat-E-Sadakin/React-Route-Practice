import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
const Navbar = () => {
    return (
        <div>
            {/* <a href="/contact">Contact</a>
            <a href="/home">home</a>
            <a href="/info">Info</a>
            <a href="/pricing">Pricing</a> */}

            <ActiveLink to='/contact'>Contact</ActiveLink>
            <ActiveLink to='/home'>Home</ActiveLink>
            <ActiveLink to='/infos'>Info</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>

            <ActiveLink to='/pricing'>Pricing</ActiveLink>

        </div>
    );
};

export default Navbar;