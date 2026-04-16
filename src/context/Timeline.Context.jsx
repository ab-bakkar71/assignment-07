"use client"

import React, { createContext, useState } from 'react';

export const TimelineContext = createContext();

console.log(TimelineContext);



const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);


    const btnActivity = (type, name) => {
        const newActivity = {
            id: Date.now(),
            text: name,
            type: type,
            time: new Date().toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
            })
        };

        setTimeline(prev => [newActivity, ...prev])
    }




    return <TimelineContext.Provider value={{ btnActivity, timeline }}>{children}</TimelineContext.Provider>

};

export default TimelineProvider;