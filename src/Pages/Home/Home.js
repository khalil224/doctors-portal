import React from 'react';
import Banner from './Banner/Banner';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Information from './Information/Information';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import ServiceBanner from './Services/ServiceBanner/ServiceBanner';
import Services from './Services/Services';
import Testimonials from './Testimonials';


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
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;