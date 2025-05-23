import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';

import useMenu from '../../../../Hooks/useMenu';

const PopularMenu = () => {
    {/**
        const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('../../../../../public/menus.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, []) */}
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category === 'popular')


    return (
        <section className='mb-12 ml-2 mr-3'>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'check it out'}></SectionTitle>
            <div className='grid mb-4 md:grid-cols-2 gap-4'>      
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }  
            </div>
            <div className='flex justify-center'>
                <button className='btn  border-b-black rounded'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;