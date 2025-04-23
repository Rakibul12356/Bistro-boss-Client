import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import menuImg from "../../assets/menu/banner3.jpg"
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
       
            
            <h2>Our Menu</h2>
        </div>
    );
};

export default OurMenu;