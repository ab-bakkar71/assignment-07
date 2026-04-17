"use client"
import { TimelineContext } from "@/context/Timeline.Context";
import { useContext, useState } from "react";

const TimelinePage = () => {

    const { timeline } = useContext(TimelineContext);
    const [filter, setFilter] = useState("All");


    const filteredTimeline = filter === "All" ? timeline : timeline.filter(item => item.type === filter);

    return (
        <div className="py-20">
            <h1 className="text-gray-800 text-5xl font-extrabold mb-6">Timeline</h1>
            <select value={filter} className="select" onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Filter timeline</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
            </select>

            <div className="mt-6">
                {
                    filteredTimeline.length === 0 ? (<div className=" flex items-center justify-center mt-4 shadow-sm p-6 rounded-lg bg-white h-[50vh]">
                        <p className="text-center text-4xl font-bold text-slate-500">No Data In Timeline. </p>
                    </div>) : (filteredTimeline.map((data, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm mb-6 flex gap-2 items-center">
                            {/* Icon */}
                            <div>
                                {
                                    data.type === 'Call' ? <p className="text-3xl">📞</p>
                                        : data.type === 'Text' ? <p className="text-3xl">💬</p>
                                            : data.type === 'Video' ? <p className="text-3xl">📹</p>
                                                : null
                                }
                            </div>

                            <div>
                                {/* name & action */}
                                <div className="text-slate-500 text-lg flex items-center gap-1">
                                    <p className="text-xl font-medium text-emerald-900 ">{data.type}</p>
                                    with
                                    <p>{data.text}</p>
                                </div>

                                {/* date & time */}
                                <div>
                                    <p className="text-sm text-gray-500">{data.time}</p>
                                </div>
                            </div>
                        </div>
                    )))};
            </div>
        </div>
    );
};

export default TimelinePage;