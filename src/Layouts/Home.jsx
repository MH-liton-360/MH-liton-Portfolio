import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import Project from "../Components/Project";


const Home = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Header />
                <section id="home">
                    <Banner></Banner>
                </section>

                <About />
                <Project />
                <Contact />
            </div>
        </>
    );
};

export default Home;
