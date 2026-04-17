import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendsCard = ({ friend }) => {
  return (
    <>
      <Link className='hover-3d' href={`/${friend.id}`}>
        <div className="card shadow-sm">
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
            <div className='text-slate-500'>{friend.days_since_contact}d ago</div>
            <div className='flex gap-2 text-emerald-900 font-medium'>
              {
                friend.tags.map((tag, index) => (
                  <span key={index} className="bg-green-200 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))
              }
            </div>
            <div className={`text-white px-2 py-1 rounded-full ${friend.status === 'almost due' ? 'bg-red-500' : ''} ${friend.status === 'overdue' ? 'bg-amber-500' : 'bg-emerald-900'}`}>{friend.status}</div>
          </div>
        </div>

       
      </Link>
    </>
  );
};

export default FriendsCard;