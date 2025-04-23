import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navOption = <>
        <li>
            <NavLink 
            to='/' 
            className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold ' : 'text-[#FFFFFF]'}>
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink 
            to='contact'
             className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold ' : 'text-[#FFFFFF]'} >
                CONTACT US
            </NavLink>
        </li>
        <li>
            <NavLink
            to='dashboard'
                className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-[#FFFFFF]'}>
                DASHBOARD
            </NavLink>
        </li>
        <li>
            <NavLink
                to='our-menu'
                className={({ isActive }) =>
                    isActive ? 'text-[#EEFF25] font-bold ' : 'text-[#FFFFFF]'}>
                OUR MENU
            </NavLink>
        </li>
        <li>
            <NavLink
            to='our-shop'
                className={({ isActive }) =>
                    isActive ? 'text-[#EEFF25] font-bold underline' : 'text-[#FFFFFF]'}>
                OUR SHOP
            </NavLink>
        </li>

    </>
    return (
        <>
            <div className="navbar max-w-screen-xl bg-[#15151580] fixed z-10 opacity-90 shadow-sm text-[#FFFFFF]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  rounded-box  z-1 mt-3 w-52 p-2 shadow bg-[#15151580]">
                            {navOption}
                        </ul>
                    </div>
                    <a className="text-xl font-extrabold">Bistro Boss <br />
                        R E S T A U R A N T </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>

    );
};

export default Navbar;
