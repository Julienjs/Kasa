import React, { useState } from 'react';
import Vector from '../assets/logo/Vector.svg'

const Accordion = ({ title, description, equipments, index, page }) => {
    const [active, setActive] = useState(-1);

    const handleToggle = index => {
        if (index === active) {
            setActive(-1)
            return
        }
        setActive(index)
    }

    return (
        <section>
            <article className='accordion-container '>
                <div className={`accordion accordion-${page}`} >
                    <div onClick={() => handleToggle(index)}>
                        <p className='title'>{title}</p>
                        <img src={Vector} alt="vector" className={active === index ? "active" : ""} />
                    </div>
                </div>
                <div className={`${page}-description ${active === index ? "active" : ""}`}>
                    <p className={active === index ? "active" : ""}>{description}</p>
                    {equipments &&
                        equipments.map((equipment, index) => (
                            <p key={`${equipment}-${index}`} className="equipments">{equipment}</p>
                        ))
                    }
                </div>
            </article>
        </section >
    );
};

export default Accordion;