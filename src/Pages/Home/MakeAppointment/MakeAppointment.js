import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    console.log(appointment)
    return (
        <section

            className='flex justify-center items-center bg-appointment-img px-12 mt-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white py-16'>
                <h3 className='text-xl text-primary '>Appointment</h3>
                <h2 className='text-3xl mt-2 mb-3'>Make an Appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary mt-8">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;