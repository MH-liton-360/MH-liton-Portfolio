import project_logo from '../assets/project-1.jpg'

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
                            <h2 className="card-title">
                                Car Cleaning
                            </h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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
                                src={project_logo}
                                className='rounded-2xl p-2'
                                alt="Car cleaning" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Car Cleaning
                            </h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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
                                src={project_logo}
                                className='rounded-2xl p-2'
                                alt="Car cleaning" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Car Cleaning
                            </h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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