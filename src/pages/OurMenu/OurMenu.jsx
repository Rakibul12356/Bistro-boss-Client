import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';

import useMenu from '../../Hooks/useMenu';
import MenuItem from '../shared/MenuItem/MenuItem';
import menuImg from "../../assets/menu/banner3.jpg"
import DesertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from '../Menu/MenuCategory';
import { Link } from 'react-router-dom';
const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Bistro || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            {/**1 */}
            <section className='todays-offer'>
                <SectionTitle heading={"TODAY'S OFFER"}
                    subHeading={"Don't miss"}>
                </SectionTitle>
                <div className='grid mb-4 md:grid-cols-2 gap-4'>
                    {
                        offered.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link><button className='btn  border-b-black rounded'>ORDER YOUR FAVORITE FOOD</button> </Link>
                </div>
            </section>
            <section className='dessert-section mt-4'>
                <MenuCategory img={DesertImg} title={'dessert'} items={dessert} />
            </section>

            <section className='pizza-section mt-4'>
                <MenuCategory img={pizzaImg} title={'pizza'} items={pizza} />
            </section>

            <section className='salad-section mt-4'>
                <MenuCategory img={saladImg} title={'salad'} items={salad} />
            </section>

            <section className='soup-section mt-4'>
                <MenuCategory img={soupImg} title={'soup'} items={soup} />
            </section>

            <section className='drinks-section mt-4 mb-10'>
                <MenuCategory img={DesertImg} title={'drinks'} items={drinks} />
            </section>
        </div>
    );
};

export default OurMenu;