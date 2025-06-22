import profile from '../assets/liton.jpg'

const About = () => (
    <section id="about" className='py-48'>
        <div>
            <div className='flex justify-between gap-40'>
                <img
                    src={profile}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-2xl font-bold">INTRODUCTION</h1>
                    <p className="py-3 text-xl">
                        I'm a skilled Web Developer with experience in JavaScript, &expertise in frameworks like React, Node.js. I'm a quick learner& collaborate closely with clients to create efficient, scalable, &user-friendly solutions that solve real-world problems. Let's worktogether to bring your ideas to life!
                    </p>
                    <p className='py-2'>
                        <a>
                            <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,react,nodejs,expressjs,firebase,mongodb" />
                        </a>
                    </p>
                    <div className='py-3'>
                        <div className='text-2xl font-semibold'>
                            <h2>EDUCATION</h2>
                        </div>
                        <div className='text-xl py-2'>
                            <p>BSc.(Hons.) in CSE</p>
                            <p>BGC Trust University Bangladesh
                                <p>2020-2023</p>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);
export default About;
