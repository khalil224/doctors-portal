import React from 'react';

const InfoCart = ({ img, cardTitle, bgClass, cardText }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass} `}>
            <figure className='pl-5 pt-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardText}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default InfoCart;