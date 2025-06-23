import Marquee from "react-fast-marquee";
import { RxDiscordLogo } from "react-icons/rx";


const Banner = () => {
    return (
        <div>
            <div className="py-28 px-8">
                <h1 className="text-5xl font-bold font-serif">Hi! I'M LITON MIA</h1>
                <p className="py-6">
                    I'm Crafting Digital Experiences that make a lasting impact.
                </p>
                <div className="mb-4 w-42 overflow-hidden">
                    <Marquee gradient={false} speed={50} pauseOnHover>
                        <span className="mx-1">Frontend Developer</span>
                        <span className="mx-1">Backend Developer</span>
                        <span className="mx-1">Mern Developer</span>
                        <span className="mx-1">FullStack Developer</span>
                    </Marquee>
                </div>
                <a href="https://discord.com/users/1047516295626760244"><button className="btn btn-outline">Let's Talk <RxDiscordLogo className="h-5 w-5"></RxDiscordLogo> </button>
                </a>
            </div>
        </div>
    );
};

export default Banner;
