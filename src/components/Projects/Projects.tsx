import { useMemo, useState } from "react";
import projectData from "./projects.json";
import { ProjectCard } from "./ProjectCard";
import { Categorie, Project } from "../../types/ProjectTypes";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

            <Swiper
                modules={[Scrollbar, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                scrollbar
                pagination={{ clickable: true }}
                className="w-full !flex !items-stretch"
                breakpoints={{
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1248: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {filteredProjects.map((item: Project) => (
                    <SwiperSlide key={item.name} className="flex !flex !items-stretch">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 80 }}
                            className="w-full !flex !items-stretch pb-14 pt-2"
                        >
                            <div className="flex flex-col justify-between">
                                <ProjectCard project={item} />
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
