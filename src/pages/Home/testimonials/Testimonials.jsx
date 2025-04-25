import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"

import { BiSolidQuoteLeft } from "react-icons/bi";

import RatingStars from './RatingStars';
const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='m-24 flex flex-col items-center'>
                         <RatingStars rating={review.rating}></RatingStars>
                         <BiSolidQuoteLeft className='text-6xl text-[#151515'/>
                            <p className='text-center'>{review.details}</p>
                            <h3 className='text-2xl text-[#CD9003] text-center font-bold'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;