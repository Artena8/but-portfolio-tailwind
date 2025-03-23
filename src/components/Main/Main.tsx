import { About } from '../About';
import { Skills } from '../Skills';
import { Project } from '../Projects';
import { Formations } from '../Formations';

export const Main = () => {
    return (
        <div className="contenu backdrop-blur-lg">
            <About />
            <Skills />
            <Project />
            <Formations />
        </div>
    );
};


