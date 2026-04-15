import React from 'react';
import FriendsCard from './FriendsCard';

const Friends = async() => {
    const res = await fetch('https://assignment-07-keenkeeper.vercel.app/friends.json');

    // const res = await fetch('http://localhost:3000/friends.json')
    const friends = await res.json();
    
    return (
        <>
            <h4 className='text-2xl text-gray-800 font-semibold mt-6'>Your Friends</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-20'>
                {
                    friends.map(friend => <FriendsCard key={friend.id} friend={friend}/>)
                }
            </div>
        </>
    );
};

export default Friends;