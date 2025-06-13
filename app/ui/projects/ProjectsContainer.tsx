'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const projectMap = projects.map((project) => ({
    ...project,
    tags: project.tags.map((tag) => tag.toLowerCase()),
}));

export default function ProjectsContainer() {
    return (
        <section className="p-8 bg-brand-secondaryvar border border-greenwhites-featherwhite">
            <div className="max-w-screen-xl mx-auto mb-8 text-center">
                <h2 className="caption-heavy text-lg uppercase text-blueblacks-bluecharcoal">
                    Portfolio Software Projects
                </h2>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { 
                        slidesPerView: 1, 
                        slidesPerGroup: 1,
                        centeredSlides: true,
                        // centeredSlidesBounds: true,
                    }, // mobile
                    768: { 
                        slidesPerView: 2, 
                        slidesPerGroup: 2,
                        centeredSlides: true,
                        // centeredSlidesBounds: true,
                    }, // tablet
                    1024: { 
                        slidesPerView: 3, 
                        slidesPerGroup: 3,
                        centeredSlides: true,
                        // centeredSlidesBounds: true,
                    }, // laptop
                    1280: { 
                        slidesPerView: 4, 
                        slidesPerGroup: 4,
                        centeredSlides: true,
                        // centeredSlidesBounds: true,
                    }, // desktop +
                }}
                className="swiper-fullwidth"
            >
                {projectMap.map((proj, i) => (
                    <SwiperSlide key={i} className="w-full">
                        <ProjectCard
                            project={proj}
                            className="bg-brand-secondary border border-greenwhites-featherwhite h-full flex-row justify-center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}