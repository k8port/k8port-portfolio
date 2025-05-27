import React from 'react';
import { Greeting } from './Greeting';
import { FaHeart } from 'react-icons/fa';

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
        `}
                greetingText="Hello!"
            />

            <div
                className={`
        w-72 h-64
        sm:w-80 sm:h-64
        md:w-96 md:h-96
        lg:w-md lg:h-md
        relative 
        bg-brand-secondary/60 
        rounded-2xl 
      `}
            >
                <div className="absolute inset-4">
                    <div className="flex items-start gap-4 lg:gap-8 p-2 lg:p-4">
                        <span className="text-redblacks-blackplum text-xl md:text-2xl lg:text-3xl font-greatvibes">
                            I
                        </span>
                        <FaHeart color="#FF0000" size={25} />
                    </div>
                    <div className="flex items-start gap-4">
                        <p
                            className="pt-2 text-redblacks-blackplum paragraph-small md:text-base
              lg:text-lg md:leading-6 lg:leading-7 text-pretty"
                        >
                            systems, logic, data, colors, sounds, wisdom, nature, knowledge, truth,
                            puzzles and patterns. I am programmed to have inate empathy,
                            unconditional kindness, enduring curiosity, unbounded creativity, and a
                            big-picture perspective. I thrive on the intersection of technology and
                            humanity, where chaos and order vie for supremacy, complexity and
                            simplicity collide and converge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
