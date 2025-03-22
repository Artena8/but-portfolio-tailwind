import certificationsData from './certifications.json';
import { BuildingLibraryIcon, DocumentCheckIcon, LanguageIcon } from '@heroicons/react/24/solid';

export const Certifications = () => {
    return (
        <div id="Certifications" className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData.items.map((certification) => (
                    <div key={certification.id} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-1/5 h-16 bg-(--secondary-300) rounded-full">
                            {certification.type === "civique" && (
                                <BuildingLibraryIcon className="w-7 h-7 text-(--primary-500)" />
                            )}
                            {certification.type === "code" && (
                                <DocumentCheckIcon className="w-6 h-6 text-(--primary-500)" />
                            )}
                            {certification.type === "langue" && (
                                <LanguageIcon className="w-6 h-6 text-(--primary-500)" />
                            )}
                        </div>
                        <div className="ml-4 w-4/5">
                            <h3 className="text-md font-semibold text-gray-900">{certification.titre}</h3>
                            <p className="text-sm text-gray-600">{certification.source} - {certification.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
