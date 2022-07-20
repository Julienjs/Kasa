import React from 'react';
import Host from './Host';

const HousingDescription = ({ data }) => {

    return (
        <div>
            <Host host={data.host} title={data.title} location={data.location} rating={data.rating} tags={data.tags} />
        </div>
    );
};

export default HousingDescription;