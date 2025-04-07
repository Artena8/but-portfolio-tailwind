import { Project } from "../../types/ProjectTypes";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
            {project.title && (
                <div className="flex-shrink-0 h-48 w-full mt-2">
                    <img 
                        src={project.logo || "/default-image.jpg"}
                        alt={project.title}
                        className="w-full h-full object-contain"
                    />
                </div>
            )}

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                {project.description ? (
                    <p className="text-gray-600 text-sm mb-3 text-justify flex-grow">{project.description}</p>
                ) : (
                    <p className="text-gray-600 text-sm mb-3">Description non disponible</p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tags || []).map((tool, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-(--secondary-200) rounded-md">
                            {tool}
                        </span>
                    ))}
                </div>

                <Link 
                    to={`/project/${project.title}`} 
                    state={{ project }}
                    className="hover:font-black mt-auto inline-block text-primary-500 font-semibold"
                >
                    Voir le projet → 
                </Link>
            </div>
        </div>
    );
};