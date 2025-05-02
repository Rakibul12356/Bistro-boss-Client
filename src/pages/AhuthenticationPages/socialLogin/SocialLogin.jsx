import React from 'react';
import { LiaFacebook } from "react-icons/lia";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const {googleSignIn}=useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const handleGoogleLogin=()=>{
        console.log('lala')
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div  className='flex justify-center items-center gap-6  mt-8'>
            <button ><LiaFacebook className='text-4xl' /></button>
            <button onClick={handleGoogleLogin} className='border-1 rounded-full p-1'><FaGoogle className='text-xl' /> </button>
            <button><VscGithub className='text-3xl' /></button>
        </div>
    );
};

export default SocialLogin;