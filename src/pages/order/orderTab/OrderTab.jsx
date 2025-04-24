import React from 'react';
import FoodCard from '../../shared/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    console.log(items)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;