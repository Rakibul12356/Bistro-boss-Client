import React, { useEffect, useRef, useState } from 'react';
import loginImg from '../../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import bgImg from '../../../assets/others/authentication.png'
const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return (
        <div
            style={{ backgroundImage: `url(${bgImg})` }} className="hero font-inter min-h-screen p-8">
            <div className="hero-content flex-col md:flex-row-reverse rounded-6xl    shadow-black shadow-2xl " style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="text-center md:w-1/2 lg:text-left">
                  <img src={loginImg} alt="" />
                </div>
                <div
                    className="card inter-font bg-base-100 w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                    <h1 className="text-5xl font-bold">Login </h1>
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email"
                                name='email' className="input" placeholder="Enter Your Email" />
                            <label className="label">Password</label>
                            <input type="password"
                                name='password'
                                className="input" placeholder="Enter your password" />

                            <div>
                                <label className="label">,
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text"
                                 ref={captchaRef}
                                    name='captcha'
                                    className="input" placeholder="type here --" />
                                <button className='btn btn-outline btn-xs mt-2 w-full hover:bg-black hover:text-white' onClick={handleValidateCaptcha}>Validate Captcha</button>
                            </div>

                            <input type="submit"
                                disabled={disabled}
                                value="Login" className="btn text-white bg-[#D1A054B3] mt-4 hover:bg-black hover:text-[#d19f54f1] hover:border-[#D1A054B3] hover:border-b-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;