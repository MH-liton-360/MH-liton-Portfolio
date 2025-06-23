import profile from '../assets/liton.jpg'

const About = () => (
    <section id="about" className='pb-16 lg:mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-auto lg:grid-cols-2 justify-between items-center px-8'>
            <div>
                <img
                    src={profile}
                    className="rounded-lg shadow-2xl md:h-[470px]"
                />
            </div>
            <div>
                <h1 className="text-2xl font-bold">INTRODUCTION</h1>
                <p className="py-3 text-xl">
                    I'm a skilled Web Developer with experience in JavaScript, &expertise in frameworks like React, Node.js. I'm a quick learner& collaborate closely with clients to create efficient, scalable, &user-friendly solutions that solve real-world problems. Let's worktogether to bring your ideas to life!
                </p>
                <p className='py-2'>
                    <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,react,nodejs,expressjs,firebase,mongodb" />
                </p>
                <div className='py-3'>
                    <div className='text-2xl font-semibold'>
                        <h2>EDUCATION</h2>
                    </div>
                    <div className='text-xl py-2'>
                        <p>BSc.(Hons.) in CSE</p>
                        <p>BGC Trust University Bangladesh</p>
                        <p>2020-2023</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

);
export default About;
