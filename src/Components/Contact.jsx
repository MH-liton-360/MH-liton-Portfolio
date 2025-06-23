import contact_logo from '../assets/handshake-vector-icon.jpg';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Contact = () => {
    return (
        <section id='contact' className="py-16 px-4 md:py-24">
            {/* Image Section */}
            <div className="flex justify-center items-center">
                <img
                    src={contact_logo}
                    className="h-20 w-20 md:h-24 md:w-24 rounded-full brightness-50 object-cover"
                    alt="Contact"
                />
            </div>

            {/* Heading Section */}
            <div className="flex justify-center items-center py-5 text-center">
                <p className='text-xl md:text-3xl font-semibold'>
                    Let's Discuss Our Next Project!
                </p>
            </div>

            {/* Buttons Section */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 p-2'>
                <a href="liton72524nk@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline flex items-center gap-2">
                        <MdOutlineMarkEmailUnread className="h-5 w-5" />
                        Email
                    </button>
                </a>

                <a href="https://wa.me/+8801835635138" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline flex items-center gap-2">
                        <FaWhatsapp className="h-5 w-5" />
                        WhatsApp
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Contact;
