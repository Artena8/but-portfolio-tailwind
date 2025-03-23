import { motion } from "framer-motion";
import { Project } from "./ProjectTypes";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
            {project.image && (
                <img 
                    src={project.image || "/default-image.jpg"}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                />
            )}

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>

                {project.description ? (
                    <p className="text-gray-600 text-sm mb-3 text-justify">{project.description}</p>
                ) : (
                    <p className="text-gray-600 text-sm mb-3">Description non disponible</p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tools || []).map((tool, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-(--secondary-200) rounded-md">
                            {tool}
                        </span>
                    ))}
                </div>

                {project.link && (
                    <motion.a
                        href={project.link}
                        className="hover:font-black mt-auto inline-block text-primary-500 font-semibold"
                        whileHover={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
                        transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                        target="_blank"
                        >
                        Voir le projet →
                    </motion.a>
                )}
            </div>
        </div>
    );
};
