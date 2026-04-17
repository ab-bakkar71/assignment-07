import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-60vh mt-20 mb-10">
                <div className="hero-content text-center">
                    <div >
                        <h1 className="text-5xl text-gray-800 font-bold">Friends to keep close in your life</h1>
                        <p className="py-6 text-slate-500">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            <br />relationships that matter most.
                        </p>
                        <button className="btn text-white bg-emerald-900"> <FaPlus /> Add Friends</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Hero;