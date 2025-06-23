import logo from '../assets/MH.png'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";



const Footer = () => {
    return (
        <footer className="bg-[#27323f] text-white py-12 px-6 md:px-16 lg:px-24 p-3">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-15">

                <div>
                    <div className='flex text-center items-center'>
                        <img className='h-[50px] rounded-2xl filter brightness-0 invert' src={logo} alt="" />
                        <h1 className='font-semibold'>GET IN TOUCH</h1>
                    </div>
                </div>


                <div className='px-15'>

                </div>
                <div>
                    <p className="flex  items-center gap-2 mb-2"><IoLocationOutline></IoLocationOutline>Chittagong, Dhaka, Bangladesh</p>
                    <p className="flex  items-center gap-2 mb-2"><IoCallOutline></IoCallOutline> +8801898915012</p>
                    <p className="flex  items-center gap-2 mb-2">< MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread> liton72524nk@gmail.com</p>
                    <div className="flex gap-3 text-xl">
                        <a href="https://github.com/MH-liton-360" className="hover:text-teal-400"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/liton-36t/" className="hover:text-teal-400"><FaLinkedin /></a>
                        <a href="https://www.facebook.com/MH.liton.360" className="hover:text-teal-400"><FaFacebookF /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;