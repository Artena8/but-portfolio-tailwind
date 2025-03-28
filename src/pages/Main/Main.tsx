import { useEffect } from "react";
import { About, Footer, Formations, Header, Projects, Skills } from "../../components";
import { useLocation } from "react-router-dom";

export const Main = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        }
    }, [hash]);

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


