import React from 'react';

import loginImg from '../../../assets/others/authentication2.png'
import { LiaFacebook } from "react-icons/lia";
import bgImg from '../../../assets/others/authentication.png'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const SignUp = () => {
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
       console.log(email,password)}
    return (
         <div
                   style={{ backgroundImage: `url(${bgImg})` }} className=" hero font-inter min-h-screen p-8">
                   <div className="hero-content flex-col md:flex-row-reverse rounded-6xl md:h-[800px]   shadow-black shadow-2xl " style={{ backgroundImage: `url(${bgImg})` }}>
                       <div className="text-center md:w-1/2 lg:text-left">
                         <img src={loginImg} alt="" />
                       </div>
                       <div
                           className="card inter-font  w-full md:w-1/2 max-w-sm shrink-0 ">
                           <div className="card-body">
                           <h1 className="text-5xl font-bold">Sign Up  </h1>
                               <form onSubmit={handleSignUp} className="fieldset">
                                   <label className="label">Email</label>
                                   <input type="email"
                                       name='email' className="input" placeholder="Enter Your Email" />
                                   <label className="label">Password</label>
                                   <input type="password"
                                       name='password'
                                       className="input" placeholder="Enter your password" />
                                         <input type="submit"
                                       value="sign Up" className="btn text-white bg-[#D1A054B3] mt-4 hover:bg-black hover:text-[#d19f54f1] hover:border-[#D1A054B3] hover:border-b-4" />
                               </form>
                               <div>
                                <h2 className='text-[#D1A054] text-center'>Already Have an account? <Link to='/login'>Go To Login</Link ></h2>
                                <h2 className='text-center mt-4 text-[#444444]'>
                                Or sign up with 
                                </h2>
                                <div className='flex justify-center items-center gap-6  mt-8'>
                                    <button ><LiaFacebook className='text-4xl' /></button>
                                    <button className='border-1 rounded-full p-1'><FaGoogle className='text-xl' /> </button>
                                    <button><VscGithub className='text-3xl'  /></button>
                                    
                                </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
    );
};

export default SignUp