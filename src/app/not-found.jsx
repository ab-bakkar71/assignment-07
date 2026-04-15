import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <Image src='https://i.ibb.co.com/4Rf2N816/404.gif' alt="Not Found" width={400} height={400} className="mx-auto" />
            <h1 className='text-4xl font-bold'>404-Page Not Found</h1>
            <Link href='/'>
            <button className='btn btn-secondary mt-7'>Go Back To Homepage</button>
            </Link>
        
        </div>
    );
};

export default NotFound;