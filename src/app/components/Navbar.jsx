import Link from "next/link";
import NavLink from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {



    return (
        <nav className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <GiHamburgerMenu />

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <NavLink />
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-2xl font-extrabold">
                        Keen<span className="text-emerald-900">Keeper</span>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex gap-2">
                    <NavLink />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;