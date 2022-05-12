import React from 'react';

import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from './Service/Service';

const Services = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-20'>
            <Service cardTitle="Flouride Treatment" cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={flouride}></Service>
            <Service cardTitle="Cavity Filling" cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={cavity}></Service>
            <Service cardTitle="Teeth Whitenig" cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={teeth}></Service>
        </div>
    );
};

export default Services;