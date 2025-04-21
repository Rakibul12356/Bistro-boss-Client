import React from 'react';
import Banner from './Banner/BAnner';
import Category from './category/Category';
import HeroSection from './Hero/HeroSection';
import PopularMenu from './Hero/PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category ></Category>
            <HeroSection></HeroSection>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Home;