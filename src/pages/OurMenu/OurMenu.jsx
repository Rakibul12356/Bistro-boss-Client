import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import useMenu from '../../Hooks/useMenu';
import menuImg from "../../assets/menu/banner3.jpg"
import DesertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from '../Menu/MenuCategory';
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
                <MenuCategory items={offered}></MenuCategory>
            </section>
            {/** 2*/}
            <section className='dessert-section mt-4'>
                <Cover img={DesertImg} title={'DESSERTS'}></Cover>

                <MenuCategory items={dessert}></MenuCategory>
            </section>
            {/**3 */}
            <section className='pizza-section mt-4'>
                <Cover img={pizzaImg} title={'Pizza'}></Cover>
                <MenuCategory items={pizza}></MenuCategory>
            </section>   {/**4 */}
            <section className='dessert-section mt-4'>
                <Cover img={saladImg} title={'Salads'}></Cover>
                <MenuCategory items={salad}></MenuCategory>
            </section>
            {/** 5*/}
            <section className='dessert-section mt-4'>
                <Cover img={soupImg} title={'soups'}></Cover>
                <MenuCategory items={soup}></MenuCategory>
            </section>
            {/** 5*/}
            <section className='dessert-section mt-4 mb-10'>
                <Cover img={DesertImg} title={'Drinks'}></Cover>
                <MenuCategory items={drinks}></MenuCategory>
            </section>
        </div>
    );
};

export default OurMenu;