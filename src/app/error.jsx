"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const error = () => {
    return (
        <div>
             <div className='flex flex-col items-center justify-center min-h-screen'>
            <Image src='https://i.ibb.co.com/wZz4XcBQ/output-onlinegiftools.gif' alt="Not Found" width={400} height={400} className="mx-auto" />
            <h1 className='text-4xl font-bold'>404-Page Not Found</h1>
            <Link href='/'>
            <button className='btn btn-secondary mt-7'>Go Back To Homepage</button>
            </Link>
        
        </div>
        </div>
    );
};

export default error;