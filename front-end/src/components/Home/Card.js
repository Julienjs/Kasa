import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
    const navigate = useNavigate()

    const handleLink = (id) => {
        navigate(`/housing/${id}`)
    }

    return (
        <section id='card'>
            {data &&
                data.map((data, index) => (
                    <article key={`${data}-${index}`} onClick={() => handleLink(data.id)}>
                        <div></div>
                        <img src={data.cover} alt="cover" />
                        <p >{data.title}</p>
                    </article>
                ))
            }
        </section>
    );
};

export default Card;