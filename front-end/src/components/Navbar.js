import React from 'react';
import { NavLink } from "react-router-dom"
import logo from '../assets/logo/LOGO.png'
import '../styles/Navbar.css'

function Navbar() {

    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? "underline" : "none", color: '#FF6060'
        };
    };

    return (
        <header>
            <NavLink to="/">
                <img src={logo} alt='logo' />
            </NavLink>
            <nav>
                <ul>
                    <NavLink to="/" style={navLinkStyles}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" style={navLinkStyles}>
                        <li>À Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;