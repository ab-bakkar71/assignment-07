import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            {/* banner 1st */}
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

            {/* banner stats */}

            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
                {/*stats card 1 */}
                <div className='p-8 shadow text-center '>
                    <h4 className='text-[32px] text-emerald-900 font-semibold'>10</h4>
                    <p className='text-[18px] text-slate-500'>Total Friends</p>
                </div>

                {/*stats card 2 */}
                <div className='p-8 shadow text-center '>
                    <h4 className='text-[32px] text-emerald-900 font-semibold'>10</h4>
                    <p className='text-[18px] text-slate-500'>On Track</p>
                </div>

                {/*stats card 3 */}
                <div className='p-8 shadow text-center '>
                    <h4 className='text-[32px] text-emerald-900 font-semibold'>10</h4>
                    <p className='text-[18px] text-slate-500'>Need Attention</p>
                </div>

                {/*stats card 4 */}
                <div className='p-8 shadow text-center '>
                    <h4 className='text-[32px] text-emerald-900 font-semibold'>10</h4>
                    <p className='text-[18px] text-slate-500'>Interactions This Month</p>
                </div>

            </section>

        </div>
    );
};

export default Hero;