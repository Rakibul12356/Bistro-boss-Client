import React from 'react';
import MenuItem from '../shared/MenuItem/MenuItem';

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className='grid mt-4 mb-4 md:grid-cols-2 gap-4'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-outline border-0 border-b-4 border-b-black rounded-full hover:bg-black hover:text-white hover:border-b-[#BB8506]'>ORDER YOUR FAVORITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;