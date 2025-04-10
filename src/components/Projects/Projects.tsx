import { useEffect, useMemo, useState } from "react";
import projectData from "./projects_new.json";
import { ProjectCard } from "./ProjectCard";
import { Project } from "../../types/ProjectTypes";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import { ContextMenuFilter } from "./ContextMenuFilter";
import { XMarkIcon } from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Projects = () => {
    const allProjects: Project[] = projectData;

    const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags || [])));
    const allLangages = Array.from(new Set(allProjects.flatMap((p) => p.langages || [])));
    const allTools = Array.from(new Set(allProjects.flatMap((p) => p.tools || [])));

    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedLangages, setSelectedLangages] = useState<string[]>([]);
    const [selectedTools, setSelectedTools] = useState<string[]>([]);

    const [isOpenTags, setIsOpenTags] = useState(false);
    const [isOpenLangages, setIsOpenLangages] = useState(false);
    const [isOpenTools, setIsOpenTools] = useState(false);

    const toggleSelection = (item: string, list: string[], setList: (val: string[]) => void) => {
        if (list.includes(item)) {
            setList(list.filter((i) => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    const filteredProjects = useMemo(() => {
        return allProjects.filter((project) => {
            const tagMatch = selectedTags.length === 0 || selectedTags.every((tag) => project.tags?.includes(tag));
            const langMatch = selectedLangages.length === 0 || selectedLangages.every((lang) => project.langages?.includes(lang));
            const toolMatch = selectedTools.length === 0 || selectedTools.every((tool) => project.tools?.includes(tool));

            return tagMatch && langMatch && toolMatch;
        });
    }, [selectedTags, selectedLangages, selectedTools, allProjects]);

    useEffect(() => {
        if (isOpenTags == true) {
            setIsOpenLangages(false);
            setIsOpenTools(false);
        }
    }, [isOpenTags]);

    useEffect(() => {
        if (isOpenLangages == true) {
            setIsOpenTags(false);
            setIsOpenTools(false);
        }
    }, [isOpenLangages]);

    useEffect(() => {
        if (isOpenTools == true) {
            setIsOpenLangages(false);
            setIsOpenTags(false);
        }
    }, [isOpenTools]);

    return (
        <div id="Projets" className="relative z-20 flex flex-col items-center min-h-screen mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mt-20 mb-8">Mes projets</h2>

            <div className="flex mb-8 w-auto gap-4">
                <ContextMenuFilter
                    title="Tags"
                    items={allTags}
                    selected={selectedTags}
                    setSelected={setSelectedTags}
                    isOpen={isOpenTags}
                    setIsOpen={setIsOpenTags}
                />
                <ContextMenuFilter
                    title="Langages"
                    items={allLangages}
                    selected={selectedLangages}
                    setSelected={setSelectedLangages}
                    isOpen={isOpenLangages}
                    setIsOpen={setIsOpenLangages}
                />
                <ContextMenuFilter
                    title="Outils"
                    items={allTools}
                    selected={selectedTools}
                    setSelected={setSelectedTools}
                    isOpen={isOpenTools}
                    setIsOpen={setIsOpenTools}
                />
                <button
                    onClick={() => {
                        setSelectedTags([]);
                        setSelectedLangages([]);
                        setSelectedTools([]);
                        setIsOpenTags(false);
                        setIsOpenLangages(false);
                        setIsOpenTools(false);
                    }}
                    className="mb-6 text-sm flex items-center justify-center p-2 bg-white rounded-full border hover:bg-gray-100"
                >
                    <XMarkIcon className="h-6 w-6 text-(--primary-500) hover:text-(--primary-500) cursor-pointer" />
                </button>
            </div>

            {/* Slider < lg */}
            <div className="w-full lg:hidden">
                <Swiper
                    modules={[Scrollbar, Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    scrollbar
                    pagination={{ clickable: true }}
                >
                    {filteredProjects.map((project: Project) => (
                        <SwiperSlide key={project.title} className="!flex !items-stretch">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 80 }}
                                className="w-full flex items-stretch pb-14 pt-2"
                            >
                                <div className="flex flex-col justify-between h-full w-full">
                                    <ProjectCard project={project} />
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grille > lg */}
            <div className="hidden lg:grid grid-cols-3 gap-6 w-full pb-14">
                {filteredProjects.map((project: Project) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 80 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
