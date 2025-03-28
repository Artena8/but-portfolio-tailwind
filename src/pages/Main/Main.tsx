import { About, Footer, Formations, Header, Projects, Skills } from "../../components";

export const Main = () => {
    return (
        <div className='background'>
            <Header />
            <div className="contenu backdrop-blur-lg">
                <About />
                <Skills />
                <Projects />
                <Formations />
            </div>
            <Footer />
        </div>
    );
};


