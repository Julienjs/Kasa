import React from 'react';
import FullStar from '../../assets/logo/FullStar.png'
import EmptyStar from '../../assets/logo/EmptyStar.png'

const Host = ({ host, title, location, rating, tags }) => {

    const ratingNumber = [1, 2, 3, 4, 5];

    return (
        <section id='host-section'>
            <article className='location-article'>
                <div className='title-location'>
                    <h1>{title}</h1>
                    <p>{location}</p>
                </div>
                <div className='tags-container'>
                    <div className='tags'>
                        {tags.map((tag, index) => (
                            <p key={`${tag}-${index}`}>{tag}</p>
                        ))}
                    </div>
                </div>
            </article>
            <article className='host-article'>
                <div className='host'>
                    <p>{host.name}</p>
                    <img src={host.picture} alt={host.name} />
                </div>
                <div className='rating'>
                    {ratingNumber.map((ratingNumbers, index) =>
                        <img key={`${ratingNumbers}-${index}`} src={rating >= ratingNumbers ? (FullStar) : (EmptyStar)} alt={`${rating} stars`} />
                    )}
                </div>
            </article>
        </section>
    );
};

export default Host;