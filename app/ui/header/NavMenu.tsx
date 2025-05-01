import React from "react";
import NavMenuItem from "./NavMenuItem";
import { }
interface Props {
  className: string;
}

const NavMenu = ({ className }: Props) => {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto items-center gap-2.5">
      <div className="flex min-h-[50.95px] items-center justify-end gap-2 md:gap-2 lg:gap-4 ws-full self-stretch py-2">

        {/* Navigation Links */}
        <NavMenuItem label="home" href="/" />
        <NavMenuItem label="projects" href="/projects" />
        <NavMenuItem label="contact" href="/contact" />
        <NavMenuItem label="proficiencies" href="/proficiencies" />
        <NavMenuItem label="resume" href="/resume" />
      </div>
    </div>
  );
};

export default NavMenu;
