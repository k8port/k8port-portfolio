import React from 'react';
import ContentBox from './ContentBox/ContentBox';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        image?: string;
        link: string;
        tags?: string[];
        year?: number;
    };
    className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <div className={`flex flex-col items-start gap-4 p-4 ${className}`}>
            <ContentBox
                title={project.title}
                text={project.description}
                category={`${project.tags?.join(', ')}`}
                link={project.link}
                image={project.image}
                has_button={true}
            />
        </div>
    );
}
