import React from 'react';
import bgImg from '../../../assets/home/chef-service.jpg';
const HeroSection = () => {
    return (
        <div  className="hero max-w-screen-xl h-96 mt-4"
        style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: 'center',
        }}>
        <div className=" lg:w-[1000px] h-7 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white m-8 p-8 shadow-lg text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">BISTRO BOSS</h1>
            <p className="text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;
