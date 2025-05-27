import React from 'react';

interface UserDetailsProps {
    name: string;
    role: string;
}

export default function UserDetails({ name, role }: UserDetailsProps) {
    return (
        <div className="flex flex-col items-start relative">
            <div className="mt-[-1.00px] subtitle-m text-redblacks-blackplum">{name}</div>
            <div className="text-redblacks-blackplum">{role}</div>
        </div>
    );
}
