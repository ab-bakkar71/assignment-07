"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoTimeOutline } from "react-icons/io5";
import { PiChartLineThin } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";



const NavLink = () => {

    const pathName= usePathname()

    return (
        <>
           <Link href="/" className={`btn btn-ghost ${pathName === "/" ? "bg-emerald-900 text-white" : ""}`}><RiHome2Line />Home</Link>
           <Link href="/timeline" className={`btn btn-ghost ${pathName === "/timeline"? "bg-emerald-900 text-white": ""}`}><IoTimeOutline />Timeline</Link>
           <Link href="/stats" className={`btn btn-ghost ${pathName === "/stats" ? "bg-emerald-900 text-white" : ""}`}><PiChartLineThin />Stats</Link>
        </>
    );
};

export default NavLink;