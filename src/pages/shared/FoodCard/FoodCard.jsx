import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';


const FoodCard = ({ item }) => {
  const { name, recipe, price, image ,_id} = item;
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure= useAxiosSecure()
  const [,refetch]= useCart()

  const handleAddToCart = () => {
    if (user && user.email) {
      //send data to database
      
      const cartItem = {
        menuId: _id,
        email:user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }
    else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please loggedIn first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go TO login page"
      }).then((result) => {
        if (result.isConfirmed) {
          //send user to login page
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <p className='font-bold'>price: <span className='text-2xl font-semibold text-[#BB8506]'> ${price}</span></p>
        <div className="card-actions justify-center ">
          <button onClick= { handleAddToCart } className="box-border  hover:bg-black btn border-b-[3px] border-[#bb8506] rounded-lg bg-[#e8e8e8] text-[#BB8506]">ADD to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;