import Link from "next/link";
import NavLink from "./NavLink";



const Navbar = () => {



    return (
        <nav className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link href="/" className="btn btn-ghost text-2xl text-gray-900 font-extrabold">Keen<span className="text-emerald-900">Keeper</span></Link>
                </div>
                <div className="navbar-end gap-2">
                    <NavLink></NavLink>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;