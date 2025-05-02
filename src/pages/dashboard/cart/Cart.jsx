import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useCart from '../../../Hooks/useCart';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Cart = () => {
    const [cart,refetch] = useCart();
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete =id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if(res.data.deletedCount >0){
                    refetch()
                    Swal.fire({
                             title: "Deleted!",
                           text: "Your file has been deleted.",
                             icon: "success"
                           });
                }
            })
            }
          });
    }
    return (
        <section className='bg-gray-100 min-h-screen'>
             <SectionTitle heading={'WANNA ADD MORE?'} subHeading={'My CArt'}></SectionTitle>
            <div className='ml-8 p-2 shadow-2xl rounded bg-white'>
           

                <div className='flex justify-evenly'>
                    <h2 className='text-2xl font font-bold'>TOTAL Orders:{cart.length}</h2>
                    <h2 className='text-2xl font-bold'>Total price: ${totalPrice.toFixed(2)}</h2>
                    <button  disabled={cart.length === 0} className='btn text-white bg-[#D1A054]'>Pay</button>
                </div>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead className='text-white bg-[#D1A054]'>
                            <tr>
                                <th>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            cart.map((item,index)=> <tr key={item._id} >
                                <th>
                                {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <th>
                                    <button onClick={()=>{handleDelete(item._id)}} className="btn btn-ghost bg-[#B91C1C] s"><RiDeleteBin6Line /></button>
                                </th>
                            </tr>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        
   
    );
};

export default Cart;