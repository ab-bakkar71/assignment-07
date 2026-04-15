import Image from 'next/image';
import React from 'react';
import { BiSolidMessageDots } from 'react-icons/bi';
import { FiArchive, FiTrash } from 'react-icons/fi';
import { PiBellSimpleZBold, PiPhoneCallFill, PiVideoCameraBold } from 'react-icons/pi';

const AllFriends = async () => {
    const res = await fetch('https://assignment-07-keenkeeper.vercel.app/friends.json');

    // const res = await fetch('http://localhost:3000/friends.json')
    const allFriends = await res.json();
    return allFriends;
};


const friendDetails = async ({ params }) => {
    const { friendId } = await params;
    const allFriends = await AllFriends();
    const friend = allFriends.find(f => f.id === parseInt(friendId));



    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-20">
            {/* Left Side */}
            <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <Image
                            src={friend.picture}
                            alt="Shoes"
                            width="100"
                            height="100"
                            className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{friend.name}</h2>
                        <span className='text-white px-2 py-1 rounded-full bg-red-500'>{friend.status}</span>
                        <div className='flex gap-2 text-emerald-900 font-medium'>
                            {
                                friend.tags.map((tag, index) => (
                                    <span key={index} className="bg-green-200 px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))
                            }
                        </div>
                        <p>{friend.bio}</p>

                        <span>Preferred: {friend.email}</span>

                    </div>
                </div>
                <div className='space-y-3 mt-4'>
                    <button className="btn bg-white w-full text-gray-800"><PiBellSimpleZBold />
                        Snooze 2 weeks</button>
                    <button className="btn bg-white text-gray-800 w-full"><FiArchive />Archive</button>
                    <button className="btn bg-white text-red-500 w-full"><FiTrash />Delete</button>
                </div>
            </div>
            {/* Right Side */}

            <section className='lg:col-span-3'>

                {/* STATS Section*/}
               <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-gray-700 font-medium'>
                 <div className='px-4 py-8 bg-white rounded-lg shadow-sm'>
                    <h3 className='text-3xl font-medium text-emerald-900'>{friend.days_since_contact}</h3>
                    <p className='text-lg text-slate-500'>Days Since Contact</p>
                </div>
                <div className='px-4 py-8 bg-white rounded-lg shadow-sm'>
                    <h3 className='text-3xl font-medium text-emerald-900'>{friend.goal}</h3>
                    <p className='text-lg text-slate-500'>Goal (Days)</p>
                </div>
                <div className='px-4 py-8 bg-white rounded-lg shadow-sm'>
                    <h3 className='text-3xl font-medium text-emerald-900'>{friend.next_due_date}</h3>
                    <p className='text-lg text-slate-500'>Next Due</p>
                </div>
               </div>
                
                {/* Relationship Goal Section*/}   
               <div className='p-6 space-y-4 bg-white rounded-lg shadow-sm mt-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-medium text-emerald-900'>Relationship Goal</h2>
                    <button className="btn btn-sm ">Edit</button>
                </div>
                <p> Connect every <span className='text-lg font-semibold text-gray-800'>{friend.goal} days</span></p>
               </div>

               {/* Quick Check-In */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-gray-700 font-medium bg-white mt-6 p-6 rounded-lg shadow-sm'>
                    <button className="p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 bg-slate-50 shadow-sm  border border-neutral-200 hover:bg-transparent">
                <PiPhoneCallFill className="text-3xl" />
                Call
              </button>
                    <button className="p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 bg-slate-50 shadow-sm  border border-neutral-200 hover:bg-transparent">
                <BiSolidMessageDots className="text-3xl" />
                Text
              </button>
                    <button className="p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 bg-slate-50 shadow-sm  border border-neutral-200 hover:bg-transparent">
                <PiVideoCameraBold className="text-3xl" />
                Video
              </button>
                </div>

            </section>
        </div>

    );
};

export default friendDetails;