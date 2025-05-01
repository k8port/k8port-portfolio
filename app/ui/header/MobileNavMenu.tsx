'use client';

import React, { useState } from 'react';
import NavMenu from './NavMenu';

export default function MobileNavMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <button className="sm:hidden p-2 rounded-lg bg-brand-tertiary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Hamburger Menu Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {isMenuOpen && (
                <div className="sm:hidden">
                    <NavMenu className="flex flex-col space-y-2 p-4" />
                </div>
            )}
        </>
    );
}