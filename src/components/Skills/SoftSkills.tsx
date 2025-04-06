import React from "react";
import jsonData from "./softskills.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SoftSkills: React.FC = () => {
    return (
        <div className="w-full">
            <h3 className="text-2xl font-medium mb-6 text-center">
                On dit de moi que je suis ...
            </h3>

            <div className="block lg:hidden px-4 relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {jsonData.competences.map((category, index) => (
                        <SwiperSlide key={index}>
                            <div key={index} className="px-12 pt-4 pb-8 m-auto text-center sm:px-0 w-full md:w-3/5">
                                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-secondary-100 ring-2 ">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden lg:block px-4 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-wrap gap-5 justify-center items-center">
                    {jsonData.competences.map((category, index) => (
                        <div key={index} className="px-12 text-center sm:px-0 w-full sm:w-1/2 lg:w-1/4">
                            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-secondary-100 ring-2">
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
        </div>
    );
};
