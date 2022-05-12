import React from 'react';


const Service = ({ img, cardTitle, cardText }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 mb-2 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardText}</p>

            </div>
        </div>
    );
};

export default Service;