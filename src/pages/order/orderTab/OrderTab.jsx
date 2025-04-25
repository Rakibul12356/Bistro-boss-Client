import React from 'react';
import FoodCard from '../../shared/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

const OrderTab = ({items}) => {
      const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    }
  };
  const itemChunks = chunkArray(items, 6);
    console.log(items)
    return (
        <div >

<Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwipe "
      >
        {itemChunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10">
              {chunk.map(item => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default OrderTab;