'use client';

import React, { useState } from "react";
import NavMenuItem from "./NavMenuItem";


interface NavMenuProps {
  className?: string;
}

export default function NavMenu({ className }: NavMenuProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const navMenuItems = [
    { label: "home", href: "#hero" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <div className={`
      ${className}
      flex flex-col 
      w-full max-w-screen-2xl 
      gap-2.5 relative
    `}>
      {/* Hamburger Menu Icon for mobile displays */}
      <div className="flex my-2 md:hidden ml-auto">
        <button 
          onClick={toggleMenu}
          className="focus:outline-none"
          title="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation menu  (vertical, only when menu open) */}
      {isMenuOpen && (
        <nav className={`
          block md:hidden 
          w-24 bg-brand-secondary 
          shadow-lg rounded-md 
          absolute top-12 right-0 
          z-50
        `}>
          <div className="flex flex-col space-y-2 p-4">
            {navMenuItems.map((item) => (
              <NavMenuItem key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
        </nav>
      )}

      {/* Desktop Navigation menu (horizontal, always visible) */}
      <nav className="hidden md:flex md:space-x-6 ml-auto mr-8">
        {navMenuItems.map((item) => (
          <NavMenuItem key={item.label} label={item.label} href={item.href} />
        ))}
      </nav>
    </div>
  );
};