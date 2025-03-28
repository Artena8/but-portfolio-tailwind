import { useEffect } from "react";
import { About, Footer, Formations, Header, Projects, Skills } from "../../components";

export const Main = () => {
    useEffect(() => {
        const handleScrollToHash = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };
        handleScrollToHash();
        window.addEventListener("hashchange", handleScrollToHash);
        return () => {
            window.removeEventListener("hashchange", handleScrollToHash);
        };
    }, []);

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


