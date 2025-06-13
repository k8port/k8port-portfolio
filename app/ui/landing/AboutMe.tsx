import React from 'react';
import { Greeting } from './Greeting';
import { FaHeart } from 'react-icons/fa';
import { downloadAndViewResume } from '../../lib/utils/downloadAndViewResume';

interface AboutMeProps {
    className?: string;
}

export default function AboutMe({ className }: AboutMeProps) {
    return (
        <div id="aboutme" className={`${className}`}>
            <Greeting
                className={`
                    greeting
                    text-5xl md:text-7xl lg:text-8xl
                    relative
                    sm:mt-6 lg:mt-50
                    lg:text-left
                    text-brand-septenary
                    font-outline
                `}
                greetingText="Hello!"
            />

            <div
                className={`
                    w-72 h-72
                    sm:w-80 sm:h-72
                    md:w-96 md:h-84
                    lg:w-md lg:h-md
                    relative
                    bg-brand-secondary/60
                    rounded-2xl
                `}
            >
                <div className="absolute inset-4">
                    <div className="flex items-start gap-4 lg:gap-8 p-2 lg:p-4">
                        <span className="text-redblacks-blackplum text-2xl md:text-2xl lg:text-3xl font-greatvibes">
                            Favorites
                        </span>
                        <FaHeart color="#FF0000" size={25} />
                    </div>
                    <div className="flex items-start gap-4">
                        <p
                            className="pt-t text-redblacks-blackplum paragraph-small md:text-base
                                lg:text-lg leading-5 md:leading-6 lg:leading-7 text-pretty">
                                system design, programming paradigms,
                                discovery, puzzles, complexity,
                                user-centric design, embroidery string craft, color theory, maps,
                                philosophy, dance, scenic drives, one day writing a book,
                                thinking about the people who lived before,
                                watching cartoons and science shows, unusual datasets,
                                gardening and more...
                        </p>
                                
                    </div>
                </div>
            </div>
        </div>
    );
}
