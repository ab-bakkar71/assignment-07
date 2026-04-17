import React from 'react';

const Highlights = ({ friends }) => {
    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 rounded-lg lg:grid-cols-4 gap-6 mb-10'>
                {/*stats card 1 */}
                <div className='p-8 shadow text-center '>
                    <h4 className='text-[32px] text-emerald-900 font-semibold'>{friends.length}</h4>
                    <p className='text-[18px] text-slate-500'>Total Friends</p>
                </div>

                {/*stats card 2 */}
                <div className='p-8 shadow text-center '>
                    <h4 className='text-[32px] text-emerald-900 font-semibold'>{friends.filter(friend => friend.status === 'on-track').length}</h4>
                    <p className='text-[18px] text-slate-500'>On Track</p>
                </div>

                {/*stats card 3 */}
                <div className='p-8 shadow text-center '>
                    <h4 className='text-[32px] text-emerald-900 font-semibold'>{friends.filter(friend => friend.status === 'almost due').length}</h4>
                    <p className='text-[18px] text-slate-500'>Need Attention</p>
                </div>

                {/*stats card 4 */}
                <div className='p-8 shadow text-center '>
                    <h4 className='text-[32px] text-emerald-900 font-semibold'>{friends.filter(friend => friend.status === 'overdue').length}</h4>
                    <p className='text-[18px] text-slate-500'>Interactions This Month</p>
                </div>
            </section>
            <div className='border border-neutral-200 w-full opacity-50'>
            </div>
        </>
    );
};

export default Highlights;