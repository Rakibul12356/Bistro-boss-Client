import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import FoodCard from '../../shared/FoodCard/FoodCard';

const ChefRecommend = () => {
    const [foodCard,setFoodCArd]=useState([])
    useEffect(()=>{
        fetch('../../../../public/menus.json')
        .then(res=>res.json())
        .then(data=>{
            const chefRecommend =data.slice(0,3);
            setFoodCArd(chefRecommend)
        })
    },[])
    return (
        <section>
            <SectionTitle 
            heading={"CHEF RECOMMENDS"}
            subHeading={"Should Try"}
            ></SectionTitle>
            <section className='grid md:grid-cols-3 gap-4'>
                {
                    foodCard.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                }
            </section>
            
        </section>
    );
};

export default ChefRecommend;