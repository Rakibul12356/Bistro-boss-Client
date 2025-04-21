import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className="footer sm:footer-horizontal bg-gray-600  text-neutral-content p-10 pb-12">
                <aside className=''>
                    <h3 className='text-center text-3xl font-bold'>CONTACT US</h3>
                    <p className='text-center'>123 ABS Street, Uni 21
                        Bangladesh  <br />
                        +88 123456789  <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-2xl">Follow US</h6>
                    <p>Join us on social media</p>
                    <div className="grid grid-flow-col gap-4">
                        <Link>  <i className="text-2xl ri-facebook-fill"></i></Link>
                        <Link>  <i className="ri-instagram-line text-2xl"></i></Link>
                        <Link>  <i className="ri-twitter-fill text-2xl"></i></Link>
                    </div>
                </nav>
            </footer>
            <div className="footer sm:footer-horizontal footer-center bg-gray-800 text-[#FFFFFF]  p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()}  CulinaryCloud. All right reserved by Bistro Boss</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;