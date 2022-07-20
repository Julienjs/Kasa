import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NotFound.css'

const NotFound = () => {
    return (
        <section>
            <article className='error-message'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </article>
            <article className='link'>
                <NavLink to="/" style={{ color: '#FF6060' }}>
                    <p>Retourner sur la page d'accueil</p>
                </NavLink>
            </article>
        </section>
    );
};

export default NotFound;