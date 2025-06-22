import project_logo from '../assets/project-1.jpg';

const Project = () => {
    return (
        <section id="project" className="mb-28 px-4">
            <div>
                <h1 className="text-2xl font-semibold pb-8 text-center md:text-left">LATEST PROJECTS</h1>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center md:justify-start gap-6 md:gap-10">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="card bg-base-200 w-72 shadow-lg">
                        <figure>
                            <img
                                src={project_logo}
                                className="rounded-2xl p-2"
                                alt="Car cleaning"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Car Cleaning</h2>
                            <p>
                                A card component has a figure, a body part, and inside body there are title and actions parts.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">Tailwind CSS</div>
                                <div className="badge badge-outline">Node.js</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
