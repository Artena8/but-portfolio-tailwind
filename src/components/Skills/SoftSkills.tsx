import JsonData from "./softskills.json";

export const SoftSkills: React.FC = () => {  
    return (
        <>
        <h3 className="text-2xl font-medium mb-6">
            On dit de moi que je suis ...
        </h3>
        <div className="px-4 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex flex-wrap gap-5 justify-center items-center">
                {JsonData.competences.map((category, index) => (
                <div key={index} className="px-12 text-center sm:px-0 w-full sm:w-1/2 lg:w-1/4">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-(--secondary-100) ring-3 sm:w-16 sm:h-16 tw-border-solid">
                    <img
                        src={category.icon}
                        alt={category.titre}
                        className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    </div>
                    <h6 className="mb-2 text-lg font-bold leading-5 tracking-wider uppercase">
                    {category.titre}
                    </h6>
                    <div className="mb-2">{category.description}</div>
                </div>
                ))}
            </div>
        </div>
        </>
    );
}
