import React from 'react';
import { LandingContainer } from './ui/landing/LandingContainer';
import ProjectsContainer from './ui/projects/ProjectsContainer';
import ContactContainer from './ui/contact/ContactContainer';

export default function HomePage() {
    return (
        <div className="w-full overflow-x-hidden">
            <div id="landing" className="relative">
                <LandingContainer />
            </div>

            <div id="projects" className="relative">
                <ProjectsContainer />
            </div>

            <div id="contact" className="relative">
                <ContactContainer />
            </div>
        </div>
    );
}
