"use client"

import { TimelineContext } from '@/context/Timeline.Context';
import React, { useContext } from 'react';
import { BiSolidMessageDots } from 'react-icons/bi';
import { PiPhoneCallFill, PiVideoCameraBold } from 'react-icons/pi';
import { toast } from 'react-toastify';


const QuickCheckIn = ({friend}) => {
    const {btnActivity} = useContext(TimelineContext);
    


    const handleClick = (type)=>{

      toast.success(`${type === 'Call' ? 'call' : type === 'Text' ? 'texted' : 'video'} with ${friend.name}`,
      {
        position: "top-right",
      });
      btnActivity(type, friend.name);
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-gray-700 font-medium bg-white mt-6 p-6 rounded-lg shadow-sm'>
                    <button onClick={() => handleClick('Call')} className="p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 bg-slate-50 shadow-sm  border border-neutral-200 hover:bg-slate-200 transition delay-150">
                <PiPhoneCallFill className="text-3xl" />
                Call
              </button>
                    <button onClick={() => handleClick('Text')} className="p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 bg-slate-50 shadow-sm  border border-neutral-200 hover:bg-slate-200 transition delay-150">
                <BiSolidMessageDots className="text-3xl" />
                Text
              </button>
                    <button onClick={() => handleClick('Video')} className="p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 bg-slate-50 shadow-sm  border border-neutral-200 hover:bg-slate-200 transition delay-150">
                <PiVideoCameraBold className="text-3xl" />
                Video
              </button>
                </div>
    );
};

export default QuickCheckIn;