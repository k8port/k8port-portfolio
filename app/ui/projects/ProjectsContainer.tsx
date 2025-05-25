import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Stitch Companion",
        description: "Web app for creating and sharing cross-stitch and embroidery patterns from images",
        link: "https://github.com/k8port/stitch_companion",
        tags: ["Python", "React", "Flask", "Docker"],
    },
    {
        title: "Pattern Generator",
        description: "Algorithmically-generated patterns with color theme customization built with plain JS",
        link: "https://github.com/k8port/pattern_generator",
        tags: ["Plain JS", "Procedural Art"],
    },
    {
        title: "Family Device Agent",
        description: "SaaS platform built to manage family devices, including smart home and personal, with a focus on security and privacy. (prototype in TypeScript)",
        link: "https://github.com/k8port/family_device_agent",
        tags: ["Java", "Spring", "AWS", "Docker", "Terraform"],
    },
    {
        title: "Color Meanings API", 
        description: "Data pipeline and GraphQL API for Jacob Oleson's Color Meanings web site with additional research and analysis",
        link: "https://github.com/k8port/color_meanings_api",
        tags: ["Python", "Flask", "GraphQL"] 
    },
];

export default function ProjectsContainer() {
    return (
        <div className="flex flex-col md:items-center gap-16 p-20 bg-brand-secondary border-t border-solid border-greenwhites-featherwhite overflow-x-scroll">
            <div className={`
                flex flex-col 
                items-start gap-12 
                min-w-[800px]
                w-full max-w-[1280px]
            `}>
                <div className="flex flex-col items-start md:items-center gap-2 w-full">
                    <div className="caption-heavy text-lg text-blueblacks-bluecharcoal text-center uppercase">Portfolio Software Projects</div>
                </div>
            </div>
            <div className="flex items-start gap-0 w-1/2 md:w-full">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        project={project}
                        className="flex-0 md:flex-1 bg-brand-secondary border border-solid border-greenwhites-featherwhite"
                    />
                ))}
            </div>
        </div>
    );
}