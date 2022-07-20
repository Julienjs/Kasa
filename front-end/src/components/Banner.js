import React from 'react';

const Banner = (props) => {
    return (
        <section className='banner'>
            <div></div>
            {props.text ?
                <h1>{props.text}</h1>
                : null
            }
            <img src={props.image} alt='banner' />
        </section>
    );
};

export default Banner;