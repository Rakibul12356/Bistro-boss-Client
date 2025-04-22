import React from 'react';

const RatingStars = ({ rating }) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={`ri-star${i <= rating ? '-fill' : '-line'}`}>

            </span>
        )
    }
    return (
        <div className='text-[#CD9003] text-4xl mb-2'>
            {stars}

        </div>
    );
};

export default RatingStars;