import project_logo from '../assets/project-1.jpg'
import project_logo_2 from '../assets/project-2.jpg'
import project_logo_3 from '../assets/project-3.jpg'
import { FaLink } from "react-icons/fa";

const Project = () => {
    return (
        <section id="project" className="mb-28 px-5 md:px-8">
            <div>
                <h1 className="text-2xl font-semibold pb-5">LATEST PROJECTS</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:px-8 lg:flex justify-between'>
                <div>

                    <div className="card bg-base-200 w-72 shadow-lg">
                        <figure>
                            <img
                                src={project_logo}
                                className='rounded-2xl p-2'
                                alt="Car cleaning" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-between">
                                Ctg Market
                                <div>
                                    <a href='https://ctg-market-sharing-web-client.web.app/'><FaLink></FaLink></a>

                                </div>
                            </h2>
                            <p>A full-stack service-sharing platform built with the MERN stack that allows users to add, manage, and book local services with real-time status updates. It supports user authentication, role-based dashboards, and seamless service interaction between providers and customers.</p>

                            <div className="justify-start">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">Tailwind CSS</div>
                                <div className="badge badge-outline">Node.js</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="card bg-base-200 w-72 shadow-lg">
                        <figure>
                            <img
                                src={project_logo_2}
                                className='h-[185px] rounded-2xl p-2'
                                alt="Car cleaning" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-between">
                                Donate Bangladesh
                                <div>
                                    <a href='https://mh-liton-360.github.io/RBA5-Donate-Bangladesh/'><FaLink></FaLink></a>

                                </div>
                            </h2>
                            <p>Empowers people to easily donate through web and mobile platforms to support flood relief efforts across Bangladesh, ensuring transparent fund collection and efficient distribution of aid to affected communities.</p>

                            <div className="justify-start">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">Tailwind CSS</div>
                                <div className="badge badge-outline">Node.js</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="card bg-base-200 w-72 shadow-lg">
                        <figure>
                            <img
                                src={project_logo_3}
                                className='h-[185px] rounded-2xl p-2'
                                alt="Car cleaning" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-between">
                                E-Matrimony
                                <div>
                                    <a href='https://e-matrimony-cf61e.web.app/'><FaLink></FaLink></a>

                                </div>
                            </h2>
                            <p>A full-stack service-sharing platform built with the MERN stack that allows users to add, manage, and book local services with real-time status updates. It supports user authentication, role-based dashboards, and seamless service interaction between providers and customers.</p>

                            <div className="justify-start">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">Tailwind CSS</div>
                                <div className="badge badge-outline">Node.js</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;