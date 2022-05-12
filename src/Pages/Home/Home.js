import React from 'react';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import ServiceBanner from './Services/ServiceBanner/ServiceBanner';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <p className='text-center mt-20 text-secondary font-bold'>OUR SERVICES</p>
            <p className='text-2xl text-center mb-12 '>Services We Provide</p>
            <Services></Services>
            <ServiceBanner></ServiceBanner>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;