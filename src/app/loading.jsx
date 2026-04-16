import React from 'react';
import { BounceLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
          <BounceLoader color='#004f3b'/>
        </div>
    );
};

export default loading;