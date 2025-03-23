import { About } from '../About';
import { Skills } from '../Skills';
import { Projects } from '../Projects';
import { Formations } from '../Formations';

export const Main = () => {
    return (
        <div className="contenu backdrop-blur-lg">
            <About />
            <Skills />
            <Projects />
            <Formations />
        </div>
    );
};


