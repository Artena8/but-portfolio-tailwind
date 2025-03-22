import { Certifications, Parcours } from '.';

export const Formations = () => {
    return (
        <div id="Formations" className="flex flex-col relative z-20 items-center overflow-hidden min-h-screen m-auto mb-20">
            <div className="flex justify-center items-center gap-4 mb-8 mt-20">
                <h2 className="text-3xl font-semibold text-center">Formations & Expériences Professionnelles</h2>
            </div>
            <h3 className="text-2xl font-medium mb-6"> Mon Parcours </h3>
            <Parcours />

            <h3 className="text-2xl font-medium mb-6"> Mes Certifications </h3>
            <Certifications />
        </div>
    );
};
