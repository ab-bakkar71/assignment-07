import TimelineProvider from '@/context/Timeline.Context';
import React from 'react';

const Providers = ({children}) => {
    return <TimelineProvider> {children} </TimelineProvider>};

export default Providers;