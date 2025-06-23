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
                            <p>Ctg Market Service Sharing Web Application is a user-friendly platform where users can add, update, and manage their own services while browsing and booking services from others. It features secure authentication  role-based dashboards, real-time booking updates. </p>

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
                            <p>Donate Bangladesh is a donation-based web platform designed to support urgent humanitarian causes across the country. Users can contribute funds to relief efforts for injured individuals in social movements. Built for transparency and impact, the system tracks donations </p>

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
                            <p>E-Matrimony platform enabling users to create, browse, and manage detailed biodata profiles with secure authentication and premium features.Dashboards for profile management,contact approvals,and success stories.The system sorting, payments for premium access.</p>

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