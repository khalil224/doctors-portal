import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const formatedDate = format(date, 'PP')

    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set, ${formatedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null)
            })




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
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-lg my-3" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-lg my-3" />
                        <input type="text" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-lg my-3" />
                        <input type="submit" value="SUBMIT" class="btn w-full max-w-lg my-3" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;