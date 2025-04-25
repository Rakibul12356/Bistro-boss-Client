import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar';

const MainLayOut = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet/>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;