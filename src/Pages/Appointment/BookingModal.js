import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-dark pb-6"> {name}</h3>
                    <form onSubmit={handleBooking} >
                        <input type="text"
                            disabled value={format(date, 'PP')}
                            class="input input-bordered w-full max-w-lg my-3" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" placeholder="Full Name" class="input input-bordered w-full max-w-lg my-3" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-lg my-3" />
                        <input type="text" name='email' placeholder="Email" class="input input-bordered w-full max-w-lg my-3" />
                        <input type="submit" value="SUBMIT" class="btn w-full max-w-lg my-3" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;