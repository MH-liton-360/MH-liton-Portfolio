import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Project from "../Components/Project";
import Provider from "../Components/Provider";



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
                <Footer></Footer>
                <Provider></Provider>
            </div>
        </>
    );
};

export default Home;
