import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ data }) => {
    return (
        <section id='card'>
            {data &&
                data.map((data, index) => (

                    <NavLink key={`${data}-${index}`} to={`/housing/${data.id}`} style={{ textDecoration: 'none', color: '#FF6060' }}>
                        <article >
                            <div></div>
                            <img src={data.cover} alt="cover" />
                            <p >{data.title}</p>
                        </article>
                    </NavLink>
                ))
            }
        </section>
    );
};

export default Card;