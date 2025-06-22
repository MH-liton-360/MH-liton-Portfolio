import profile from '../assets/liton.jpg';

const About = () => (
    <section id="about" className="py-24 md:py-48">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-40">
                <img
                    src={profile}
                    alt="Profile"
                    className="w-64 md:w-80 rounded-lg shadow-2xl"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold">INTRODUCTION</h1>
                    <p className="py-3 text-lg md:text-xl">
                        I'm a skilled Web Developer with experience in JavaScript, and expertise in frameworks like React and Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                    </p>

                    <div className="py-2">
                        <img
                            src="https://skillicons.dev/icons?i=html,css,tailwind,js,react,nodejs,expressjs,firebase,mongodb"
                            alt="Skills"
                            className="mx-auto md:mx-0"
                        />
                    </div>

                    <div className="py-4">
                        <h2 className="text-2xl font-semibold">EDUCATION</h2>
                        <div className="text-lg md:text-xl py-2">
                            <p>BSc. (Hons.) in CSE</p>
                            <p>
                                BGC Trust University Bangladesh<br />
                                <span className="text-gray-500">2020–2023</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
