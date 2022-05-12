import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const Information = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCart img={clock}></InfoCart>
            <InfoCart img={marker}></InfoCart>
            <InfoCart img={phone}></InfoCart>
        </div>
    );
};

export default Information;