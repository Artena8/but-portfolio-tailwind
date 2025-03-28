import { useMemo, useState } from "react";
import projectData from "./projects.json";
import { ProjectCard } from "./ProjectCard";
import { Categorie, Project } from "../../types/ProjectTypes";
import { motion } from "framer-motion";

const categoryList = [
    { id: 1, category: "Réaliser", value: "Réaliser" },
    { id: 2, category: "Optimiser", value: "Optimiser" },
    { id: 3, category: "Administrer", value: "Administrer" },
    { id: 4, category: "Gérer", value: "Gérer" },
    { id: 5, category: "Conduire", value: "Conduire" },
    { id: 6, category: "Collaborer", value: "Collaborer" },
];

export const Projects = () => {
    const [filter, setFilter] = useState("Réaliser");

    const categories: Categorie = projectData.categories;

    const filteredProjects = useMemo(() => {
        return categories[filter]?.projects || [];
    }, [filter]);

    return (
        <div id="Projets" className="relative z-20 flex flex-col items-center min-h-screen mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mt-20 mb-8">Mes projets</h2>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categoryList.map(({ id, category }) => (
                    <button
                        key={id}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            filter === category
                                ? "bg-(--primary-500) text-white"
                                : "bg-(--secondary-100) hover:bg-(--secondary-300) cursor-pointer"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-7xl">
                {filteredProjects.map((item: Project) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 80 }} // RESSORT
                    >
                        <ProjectCard project={item} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
