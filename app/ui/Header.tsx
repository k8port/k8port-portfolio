// app/ui/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsGearWideConnected } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { lobster } from "../fonts";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about-me" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume/CV", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`w-full bg-midnight/90 flex items-center justify-between border-b border-b-electricgrey shadow-lg 
      font-ibmPlexSans text-offwhite text-xl drop-shadow-section px-0 py-3 ${className}`}
    >
      <div className="flex grow w-full items-center justify-between px-4">
        <span
          className={`${lobster.className} font-lobster text-base sm:text-lg md:text-2xl`}
        >
          Kate Portalatin - Software Engineer
        </span>

        <div className="flex space-x-6 my-2 md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        <nav
          className={`absolute md:relative md:flex md:space-x-6 right-6 top-12 md:top-0 w-[50%] md:w-auto
          bg-white md:bg-transparent text-black md:text-white border md:border-0 rounded-md
          shadow-md md:shadow-none p-0 md:p-0 space-y-4 md:space-y-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row divide-y-[0.5px] md:divide-y-0 md:items-center">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.href}>
                <li className="hover:bg-mintgreen active:bg-midnight md:hover:bg-transparent md:active:bg-transparent md:w-full">
                  <Link
                    href={item.href}
                    className="block px-4 py-2 rounded-md md:px-1 text-sm md:text-sm hover:text-black
                      md:hover:text-white hover:font-semibold md:hover:font-normal active:text-seashell"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
                {idx < navItems.length - 1 && (
                  <li aria-hidden="true" className="hidden md:inline mx-2">
                    <BsGearWideConnected className="text-xs" />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
