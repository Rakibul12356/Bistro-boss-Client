import React from 'react';

const FoodCard = ({item}) => {
    const {name,recipe,price ,image}=item
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe}</p>
          <p className='font-bold'>price: <span className='text-2xl font-semibold text-[#BB8506]'> ${price}</span></p>
          <div className="card-actions justify-center ">
            <button className="box-border hover:bg-black btn border-b-[3px] border-[#bb8506] rounded-lg bg-[#e8e8e8] text-[#BB8506]">ADD to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;