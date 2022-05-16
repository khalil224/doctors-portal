import React from 'react';

const AvailableService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
            <div class="card-body justify-center items-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slot Available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} spaces available</p>
                <label htmlFor="booking-modal"
                    disabled={slots.length === 0}
                    onClick={() => setTreatment(service)}
                    class="btn btn-secondary text-white uppercase">Book Appointment</label>
            </div>
        </div>
    );
};

export default AvailableService;