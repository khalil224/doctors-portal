import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const Information = () => {



    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-16'>
            <InfoCart cardTitle='Opening Hours' cardText="Lorem ipsum dolor sit amet consectetur adipisicing.
            " bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCart>
            <InfoCart cardTitle='Visit our location' cardText="Dhanmondi,1102,Dhaka" bgClass="bg-accent" img={marker}></InfoCart>
            <InfoCart cardTitle='Contact us now' cardText="01925214154" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCart>
        </div>
    );
};

export default Information;