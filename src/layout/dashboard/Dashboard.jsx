import React from 'react';
import { FaCartPlus } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import useCart from '../../Hooks/useCart';
import { FaUtensils } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { PiUsersThreeFill } from "react-icons/pi";

const Dashboard = () => {
    const [cart] = useCart();
    console.log(cart);
    const isAdmin = true;
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-[#D1A054]'>
                <div className='p-2 pl-6 mt-4'>
                    <h2 className='text-2xl font-extrabold '>BISTRO BOSS</h2>
                    <p className='font-semibold'>R E S T A U R A N T</p>
                </div>
                <ul className='menu'>
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink
                                        to='/dashboard/adminHome' className={({ isActive }) =>
                                            isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}><FaHome className='text-xl' />
                                        Admin Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to='/dashboard/addItems'
                                        className={({ isActive }) =>
                                            isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}> <MdOutlineFoodBank className='text-xl ' />add items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageItems' className={({ isActive }) =>
                                        isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}><FaUtensils className='text-xl'/>manage items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageBooking' className={({ isActive }) =>
                                        isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}> <LuNotebookPen className='text-xl' />Manage bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users' className={({ isActive }) =>
                                        isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}>
                                        <PiUsersThreeFill className='text-xl'/> ALl Users
                                    </NavLink>
                                </li>
                              
                            </> :
                            <>
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
                                        isActive ? 'text-[#FFFFFF] font-bold underline' : 'text-[#151515]'}> <FaCartPlus className=''></FaCartPlus>My Cart:{cart.length}
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
                            </>
                    }
                    {/**shared navlinks */}
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