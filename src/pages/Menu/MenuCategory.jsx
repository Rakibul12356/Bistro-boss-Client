import React from 'react';
import MenuItem from '../shared/MenuItem/MenuItem';
import Cover from '../shared/cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items,img, title }) => {
    return (
        <div>
            <Cover img={img} title={title}></Cover>
            <div className='grid mt-4 mb-4 md:grid-cols-2 gap-10 my-16 px-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-4 border-b-black rounded-full hover:bg-black hover:text-white hover:border-b-[#BB8506]'>ORDER YOUR FAVORITE FOOD</button>
                </Link>
                
            </div>
        </div>
    );
};

export default MenuCategory;