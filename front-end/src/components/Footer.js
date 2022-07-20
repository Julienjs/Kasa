import React from 'react';
import Logo from '../assets/logo/LOGO-FOOTER.png'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="logo" />
            <p>© 2022 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;