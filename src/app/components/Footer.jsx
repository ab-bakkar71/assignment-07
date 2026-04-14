import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (

        <footer className=" bg-emerald-900 text-white ">
           <div className='container mx-auto footer footer-horizontal footer-center p-10'>
             <div>
                <h1 className='text-5xl font-bold'>KeenKeeper</h1>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <nav>
                <h5 className='text-xl font-medium pb-2'>Social Links</h5>
                <div className="grid grid-flow-col gap-4  text-black">
                    <a className='text-xl bg-white p-2 rounded-full' href='https://www.instagram.com/'>
                       <FaInstagramSquare />

                    </a>
                    <a className='text-xl bg-white p-2 rounded-full' href="https://www.facebook.com/">
                    <FaFacebook />
                    </a>
                    <a className='text-xl bg-white p-2 rounded-full' href='https://x.com/'>
                        <FaXTwitter />
                    </a>
                </div>
            </nav>
            <div className='border w-full opacity-50'>
               
            </div>
           <aside className=' w-full flex flex-col md:flex-row justify-between'>
                <div><p>Copyright © {new Date().getFullYear()} - KeenKeeper. All rights reserved.</p></div>
                <div>
                    <ul className='flex gap-4'>
                    <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                    <li className='cursor-pointer hover:underline'>Terms of Service</li>
                    <li className='cursor-pointer hover:underline'>Cookies</li>
                </ul>
                </div>
            </aside>
           </div>
        </footer>

    );
};

export default Footer;