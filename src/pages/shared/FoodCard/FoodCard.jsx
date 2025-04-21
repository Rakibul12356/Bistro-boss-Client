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
          <h2 className="card-title text-center">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-center ">
            <button className="box-border hover:bg-black btn border-b-[3px] border-[#bb8506] rounded-lg bg-[#e8e8e8] text-[#BB8506]">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;