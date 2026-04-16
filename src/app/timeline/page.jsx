"use client"
import { TimelineContext } from "@/context/Timeline.Context";
import { useContext } from "react";

const TimelinePage = () => {

    const {timeline} = useContext(TimelineContext);

    return (
        <div className="py-20">
            <h1 className="text-gray-800 text-5xl font-extrabold mb-6">Timeline</h1>
            <select defaultValue="Pick a color" className="select">
                <option disabled={false}>Filter timeline</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>

            <div className="mt-6">
                {
                    timeline.length === 0 ? (<div className=" flex items-center justify-center mt-4 shadow-sm p-6 rounded-lg bg-white h-[50vh]">
                        <p className="text-center text-4xl font-bold text-slate-500">No Data In Timeline. </p>
                    </div>) : (timeline.map((data, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm mb-6 flex gap-2 items-center">
                                {/* Icon */}
                            <div>
                                {
                                    data.type === 'Call' ?  <p className="text-3xl">📞</p>
                                    :data.type === 'Text' ? <p className="text-3xl">💬</p>
                                    :data.type === 'Video' ? <p className="text-3xl">📹</p>
                                    :null  
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