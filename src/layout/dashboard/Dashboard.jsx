import React from 'react';
import { FaCartPlus } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-[#D1A054]'>
                <ul className='menu'>
                    <li>
                        <NavLink
                            to='/dashboard/userHome' className={({ isActive }) =>
                                isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}><FaHome />
                                    User HOMe
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/dashboard/reservation'
                            className={({ isActive }) =>
                                isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}> <MdDateRange />Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/paymentHistory' className={({ isActive }) =>
                            isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}><FaMoneyBills />Payment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart' className={({ isActive }) =>
                            isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}> <FaCartPlus className=''></FaCartPlus>My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addReview' className={({ isActive }) =>
                            isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}> <FaMoneyBills></FaMoneyBills> Add review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/myBooking' className={({ isActive }) =>
                            isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}> <MdDateRange />My booking
                        </NavLink>
                    </li>
                    <div className='divider'></div>
                    <li>
                    <NavLink
                            to='/' className={({ isActive }) =>
                                isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515] '}><FaHome />
                                    User HOMe
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to='/our-menu' className={({ isActive }) =>
                                isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}><IoMdMenu />
                                    Menu
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to='/order' className={({ isActive }) =>
                                isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}><MdShoppingBag />
                                  shop
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to='/contact' className={({ isActive }) =>
                                isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}><MdEmail />
                                  contact
                        </NavLink>
                    </li>
                   
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet>

                </Outlet>
            </div>
        </div>
    );
};

export default Dashboard;