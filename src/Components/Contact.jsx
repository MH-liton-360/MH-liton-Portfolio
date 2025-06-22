import logo from '../assets/MH.png'
import { FaFacebookF, FaInstagram, FaGithub, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
    return (
        <footer id="contact" className="bg-[#27323f] text-white py-10 px-6 md:px-16 lg:px-24 p-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-15">

                <div>
                    <div className='flex text-center items-center'>
                        <img className='h-[50px] rounded-2xl filter brightness-0 invert' src={logo} alt="" />
                    </div>
                    <p className="mb-2">Location: Dhaka, Bangladesh</p>
                    <p className="mb-2">Phone: +8801758-908138</p>
                    <p className="mb-2">Email: liton72524nk@gmail.com</p>
                    <div className="flex gap-3 text-xl">
                        <a href="https://www.facebook.com/MH.liton.360" className="hover:text-teal-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-teal-400"><FaXTwitter /></a>
                        <a href="https://github.com/MH-liton-360" className="hover:text-teal-400"><FaGithub /></a>
                        <a href="#" className="hover:text-teal-400"><FaInstagram /></a>
                    </div>
                </div>


                <div className='px-15'>

                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Drop a Message</h3>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-1/2 bg-white h-8 rounded-lg p-5 text-black"
                    />
                    <br />
                    <div className='py-3'>
                        <button className="w-1/2 bg-[#0E7A81] h-9 rounded-lg hover:bg-teal-700 px-2">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;