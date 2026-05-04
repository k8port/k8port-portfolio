import React from 'react';
import ContentBox from './ContentBox/ContentBox';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        image?: string;
        github: string;
        liveUrl?: string;
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
                github={project.github}
                liveUrl={project.liveUrl}
                image={project.image}
                has_button={true}
            />
        </div>
    );
}
