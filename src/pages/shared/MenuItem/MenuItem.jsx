import React from 'react';

const MenuItem = ({item}) => {

    const {image,name,price,recipe}=item
    return (
        <div className='flex space-x-4'>
            <img className='w-[120px]  rounded-r-full rounded-bl-full' src={image} alt="" />
            <div>
                <h3 className='uppercase text-[#151515]'>{name}------------------</h3>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;