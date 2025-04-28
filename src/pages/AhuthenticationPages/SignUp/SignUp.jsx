import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import loginImg from '../../../assets/others/authentication2.png'
import { LiaFacebook } from "react-icons/lia";
import bgImg from '../../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile ,loading} = useContext(AuthContext)
    const navigate=useNavigate()

    const onSubmit = data => {
        console.log(data);
        const email = data.email
        const password = data.password
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile updated')
                       
                        Swal.fire({
                            title: "SignUp successfully",
                            icon: "success",
                            draggable: true
                        });
                        reset();
                        navigate('/')
                    }).catch((error) => {
                        console.error(error.message)
                    });
            })


    }

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
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text"
                                name='name'
                                className="input"
                                {...register("name", { required: true })}
                                placeholder="Enter Your Name" />
                            {/* errors will return when field validation fails  */}
                            <p>
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </p>
                            <label className="label">Photo Url</label>
                            <input type="text"

                                className="input"
                                {...register("photoURL", { required: true })}
                                placeholder="Photo URL" />
                            {/* errors will return when field validation fails  */}
                            <p>
                                {errors.photoURL && <span className='text-red-500'>photo URL is required</span>}
                            </p>
                            <label className="label">Email</label>
                            <input type="email"
                                name='email ' required
                                {...register("email", { required: true })}
                                className="input" placeholder="Enter Your Email" />
                            {/* errors will return when field validation fails  */}
                            <p>
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </p>
                            <label className="label">Password</label>
                            <input type="password"
                                {...register("password", { required: true, minLength: 6, maxLength: 18, pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/ })}
                                name='password'
                                className="input" placeholder="Enter your password" />
                            {/* errors will return when field validation fails  */}
                            <p className=''>
                                {errors.password?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password length must be 8</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password length should 12 </span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Password should have 1 letter and 1 number </span>}
                            </p>
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
                                <button><VscGithub className='text-3xl' /></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp