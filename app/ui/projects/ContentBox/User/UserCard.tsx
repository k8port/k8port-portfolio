import React from 'react';
import UserThumb from './UserThumb';
import UserDetails from './UserDetails';

interface UserCardProps {
    className?: string;
    layout?: 'horizontal' | 'vertical';
    name: string;
    role: string;
    size?: 'm' | 'l';
}

export default function UserCard({ className, layout, name, role, size }: UserCardProps) {
    return (
        <div
            className={`
            flex items-center relative 
            ${layout === 'horizontal' ? 'w-sm' : ''}  
            ${layout === 'vertical' ? 'flex-col' : ''}
            ${size === 'm' ? 'gap-2' : 'gap-4'}
            ${className}
        `}
        >
            <UserThumb size="m" />
            <UserDetails name={name} role={role} />
        </div>
    );
}
