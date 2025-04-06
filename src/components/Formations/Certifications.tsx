import certificationsData from './certifications.json';
import { BuildingLibraryIcon, DocumentCheckIcon, LanguageIcon } from '@heroicons/react/24/solid';

export const Certifications = () => {
    return (
        <div id="Certifications" className="mx-auto md:max-w-full lg:max-w-screen-xl px-6 md:px-24 lg:px-8 lg:pb-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData.items.map((certification) => (
                    <div key={certification.id} className="flex items-center py-4 sm:p-4 bg-white rounded-lg shadow-md flex-col sm:flex-row">
                        <div className="flex items-center justify-center w-16 h-16 bg-(--secondary-300) rounded-full">
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
                        <div className="sm:ml-4 w-4/5 ">
                            <h3 className="text-sm sm:text-md font-bold text-gray-900 pt-1 text-center sm:text-left">{certification.titre}</h3>
                            <p className="text-sm text-gray-600 text-center sm:text-left">{certification.source} - {certification.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
