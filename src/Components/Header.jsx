import logo from '../assets/MH.png';
import { GoDownload } from "react-icons/go";


const Header = () => {
    const navItems = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Project", path: "#project" },
        { name: "Contact", path: "#contact" },
    ];

    return (
        <div className="shadow-sm bg-base-100 sticky top-0 z-50">
            <div className="navbar">
                <div className="navbar-start">
                    <img
                        src={logo}
                        className="h-24 w-24 rounded-2xl filter brightness-0 invert"
                        alt="Logo"
                    />
                </div>
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

                <div className="navbar-end">
                    <a href='/public/Resume_MH_liton.pdf' className="btn btn-outline">
                        <GoDownload className="h-5 w-5"></GoDownload>GET RESUME</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
