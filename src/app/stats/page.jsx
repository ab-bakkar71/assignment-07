"use client"
import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const StatsPage = () => {

    const data = [
        { name: 'Text', value: 400, fill: '#7f37f5' },
        { name: 'Call', value: 300, fill: '#244d3f' },
        { name: 'Video', value: 300, fill: '#37a163' },
        
    ];
    return (

        <div className='my-20'>
            <h1 className='text-5xl text-gray-800 font-bold'>Friendship Analytics</h1>
            <div className='mt-4 shadow-sm p-6 rounded-lg bg-white h-[50vh]'>
                <p className='text-emerald-900 text-xl font-medium'>By Interaction Type</p>
                <div className='flex justify-center items-center'>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1, paddingBottom: '20px' }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;