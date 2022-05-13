import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableService from './AvailableService';
import BookingModal from './BookingModal';


const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h3 className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service => <AvailableService key={service._id} service={service}
                        setTreatment={setTreatment}
                    ></AvailableService>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;