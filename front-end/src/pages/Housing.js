import React from 'react';
import UseCallData from '../UseCallData'
import { useParams } from 'react-router-dom';
import Carousel from '../components/Housing/Carousel';
import HousingDescription from '../components/Housing/HousingDescription';
import Accordion from '../components/Accordion';
import '../styles/Housing.css'

const Housing = () => {
    const urlParams = useParams();
    const data = UseCallData();
    const HousingData = data.filter((data) => data.id === urlParams.id)
    return (
        <>
            {HousingData.map((data, index) => (
                <main key={`${data}-${index}`}>
                    < Carousel pictures={data.pictures} />
                    <HousingDescription data={data} />
                    <section id="housingAccordion-section">
                        <Accordion description={data.description} title="Description" index={index} page="housing" />
                        <Accordion equipments={data.equipments} title="Équipements" index={index} page="housing" />
                    </section>
                </main>
            ))}
        </>
    );
};

export default Housing;