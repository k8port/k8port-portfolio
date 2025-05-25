import React from "react";
import TitleCategory from "../TitleCategory";
import UserCard from "./User/UserCard";

interface ContentProps {
    title: string;
    category: string;
    text: string;
    name: string;
    role: string;
}

export default function Content({ title, category, text, name, role }: ContentProps) {
    return (
        <div className="self-stretch flex flex-col items-start gap-4 pt-6 pb-4 px-4">
            <TitleCategory title={title} category={category} />
            
            <p className="relative paragraph-small text-redblacks-blackplum">
                {text}
            </p>

            <UserCard 
                className="flex pt-4 pb-0 px-0 w-full"
                layout="horizontal"
                name={name} 
                role={role} 
                size="l"
            />
        </div>
    );
}