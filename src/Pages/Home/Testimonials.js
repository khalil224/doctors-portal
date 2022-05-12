import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            review: '',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Harry',
            review: '',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Harry',
            review: '',
            location: 'California',
            img: people3
        }
    ]


    return (
        <section className='my-28 px-12'>
            <div className='flex justify-between'>
                <div >
                    <h5 className='  text-secondary font-bold'>Testimonial</h5>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div><img src={qoute} className='w-24 lg:w-48' alt="" /></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;