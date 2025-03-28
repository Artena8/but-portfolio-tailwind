import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "../../types";
import { ChevronLeftIcon, StarIcon } from "@heroicons/react/20/solid";

export const ProjectDetails = () => {
    const location = useLocation();
    const { project }: { project: Project } = location.state || {};

    if (!project) {
        return <p>Projet non trouvé.</p>;
    }

    return (
        <div className="mx-auto p-5 background w-full h-screen">
            <Link to="/#Projets" className="absolute top-5 left-5 p-2 text-white">
                <motion.div
                    className="p-2 rounded-full bg-(--primary-500) shadow-md"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </motion.div>
            </Link>

            <motion.div className="bg-white rounded-xl shadow-lg p-5 pl-12">
                <div className="flex flex-col lg:flex-row">
                    {project.image && (
                        <img
                            src={project.image ? `${import.meta.env.BASE_URL}/${project.image}` : "/default-image.jpg"} 
                            alt={project.name}
                            className="w-full lg:w-1/3 h-auto object-contain p-4"
                        />
                    )}

                    <div className="lg:pl-5 flex flex-col">
                        <h1 className="text-4xl font-bold mb-12">{project.name}</h1>

                        {project.description ? (
                            <p className="text-gray-600 text-base mb-5">{project.description}</p>
                        ) : (
                            <p className="text-gray-600 text-base mb-5">Description non disponible</p>
                        )}

                        <h3 className="h3 text-xl mb-2">Langages & outils utilisés :</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {(project.tools || []).map((tool, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 bg-(--secondary-200) rounded-md"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <h3 className="h3 text-xl mb-2">Compétences acquises :</h3>
                        <div className="mb-5">
                            {project.skills?.map((skill, index) => (
                                <div key={index} className="mb-2 flex items-center">
                                    <strong>{skill.competence} :</strong>
                                    <span className="flex ml-2">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <StarIcon
                                                key={starIndex}
                                                className={`w-5 h-5 ${
                                                    starIndex < skill.value ? "text-yellow-500" : "text-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {project.link && (
                            <motion.a
                                href={project.link}
                                className="hover:font-black mt-4 inline-block text-primary-500 font-semibold text-xl"
                                whileHover={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
                                transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                                target="_blank"
                            >
                                Lien vers le projet → 
                            </motion.a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
