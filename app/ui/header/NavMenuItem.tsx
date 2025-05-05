import Link from "next/link";
import React from "react";

interface NavMenuItemProps {
  label: string;
  href: string;
}

const NavMenuItem = ({ label, href }: NavMenuItemProps) => {
  return (
    <div className="
      inline-flex items-center 
      px-px py-2 
      nav-menu-item
      hover:text-collection-alizarincrimson
      transition-colors duration-300">
      <Link href={href}>{label}</Link>
    </div>
  );
}; 

export default NavMenuItem;