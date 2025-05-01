'use client';

import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import NavMenu  from "./NavMenu";
import MobileNavMenu from "./MobileNavMenu";

export default function Header() {

  return (
    <header className={`
        sticky top-0 z-50
        bg-brand-secondary
        transition-all duration-300
        header-shadow
  `}>
      <div className="flex items-center gap-11 relative px-8 sm:px-4 py-1 shadow-xl">
        <div className={`container max-w-full mx-auto px-4 sm:px-4 lg:px-4`}>
          <div className="flex items-center justify-between w-full">
            <Brand />
            <NavMenu className="flex-grow flex justify-end" />
          </div>
        </div>
      </div>
    </header>
  );
};
