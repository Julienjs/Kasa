import React, { useEffect, useState } from 'react';
import VectorLeft from '../../assets/logo/VectorLeft.png'
import VectorRight from '../../assets/logo/VectorRight.png'

const Carousel = (props) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === props.pictures.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(props.pictures.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <section id='section-carousel'>
            <div className='carousel-container'>
                <img src={props.pictures[index]} alt="pictures" className='carousel-pictures' />
                <div className='carousel-action'>
                    <button onClick={prev}>
                        <img src={VectorLeft} alt="Vector Left" />
                    </button>
                    <button onClick={next}>
                        <img src={VectorRight} alt="Vector Right" />
                    </button>
                </div>
                <p className='carousel-status'>{index + 1}/{props.pictures.length}</p>
            </div>
        </section>
    );
};

export default Carousel;