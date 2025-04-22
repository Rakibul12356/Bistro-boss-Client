import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    return (
        <div className='max-w-screen-xl featured-item bg-fixed text-white pt-8 my-10'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={'Check it out'}></SectionTitle>
            <div className='md:flex md:justify-center items-center bg-[#151515B3] opacity-80 pt-12 pb-20 px-36'>
                <div>
                    <img className='w-full' src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere</p>
                       
                        <button className=" mt-2 btn btn-outline border-0 border-b-4 ">READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;