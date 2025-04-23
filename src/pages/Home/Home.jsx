import React from 'react';
import Banner from './Banner/BAnner';
import Category from './category/Category';
import HeroSection from './Hero/HeroSection';
import PopularMenu from './Hero/PopularMenu/PopularMenu';
import CallUs from './CallUsSection/CallUs';
import ChefRecommend from './chefRecommends/ChefRecommend';
import Featured from './featured/Featured';
import Testimonials from './testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category ></Category>
            <HeroSection></HeroSection>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;