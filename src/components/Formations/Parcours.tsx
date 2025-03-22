
import formationsData from './formations.json';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

export const Parcours = () => {
    return (
        <ol className="mx-8 relative border-s border-(--primary-500)">
        {formationsData.items.map((formation) => (
            <li key={formation.id} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-(--secondary-300) rounded-full -start-4 ">
                    {formation.type === "formation" ? (
                        <AcademicCapIcon className="w-5 h-5 text-(--primary-500)" />
                    ) : (
                        <BriefcaseIcon className="w-5 h-5 text-(--primary-500)" />
                    )}
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 ">{formation.titre}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-(--secondary-600) ">{formation.date} | {formation.lieu}</time>
                <p className="text-base font-normal text-gray-700 ">{formation.description}</p>
                
                {formation.missions && (
                    <ul className="mt-2 text-sm text-gray-700 ">
                        {formation.missions.map((mission, index) => (
                            <li key={index} className="list-disc ml-4">{mission}</li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
        </ol>
    );
};






