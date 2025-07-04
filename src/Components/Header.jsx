import { useState } from "react";
import logo from '../assets/MH.png';
import { GoDownload } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Project", path: "#project" },
        { name: "Contact", path: "#contact" },
    ];

    return (
        <div className="shadow-sm bg-base-100 sticky top-0 z-50">
            <div className="navbar px-4">
                {/* Logo */}
                <div className="navbar-start">
                    <img
                        src={logo}
                        className="h-16 w-16 rounded-2xl filter brightness-0 invert"
                        alt="Logo"
                    />
                </div>
                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center bg-gray-800 p-2 rounded-full text-white">
                        {navItems.map(({ name, path }) => (
                            <a
                                key={name}
                                href={path}
                                className="px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-700"
                            >
                                {name}
                            </a>
                        ))}
                    </ul>
                </div>

                {/* Resume Button & Mobile Toggle */}
                <div className="navbar-end gap-3">
                    <a href='/Resume_MH_liton.pdf' className="btn btn-outline hidden md:flex">
                        <GoDownload className="h-5 w-5" /> GET RESUME
                    </a>

                    {/* Hamburger Icon on Mobile */}
                    <button
                        className="lg:hidden text-3xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-base-100 px-6 py-4">
                    <ul className="flex flex-col gap-3">
                        {navItems.map(({ name, path }) => (
                            <a
                                key={name}
                                href={path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 text-lg rounded-md hover:bg-gray-200"
                            >
                                {name}
                            </a>
                        ))}
                        <a
                            href='/Resume_MH_liton.pdf'
                            className="btn btn-outline mt-2 flex items-center gap-2 justify-center"
                        >
                            <GoDownload className="h-5 w-5" /> GET RESUME
                        </a>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
