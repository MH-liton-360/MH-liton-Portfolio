import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div>
            <div className="py-40 px-8">
                <h1 className="text-5xl font-bold font-serif">Hi! I'M LITON MIA</h1>
                <p className="py-6">
                    I'm Crafting Digital Experiences That Make a Lasting Impact.
                </p>
                <div className="mb-4 w-42 overflow-hidden">
                    <Marquee gradient={false} speed={50} pauseOnHover>
                        <span className="mx-1">Frontend Developer</span>
                        <span className="mx-1">Backend Developer</span>
                        <span className="mx-1">Mern Developer</span>
                        <span className="mx-1">FullStack Developer</span>
                    </Marquee>
                </div>
                <button className="btn btn-primary">Let's Talk</button>
            </div>
        </div>
    );
};

export default Banner;
