import React, { ReactNode } from 'react';

const Tooltip = ({ message, children }: { message: string; children: ReactNode }) => {
    return (
        <div className="relative flex flex-col items-center group">
            {children}
            <div className="absolute top-[40%] left-[100%] flex flex-col items-center hidden mt-2 group-hover:flex">
                <span
                    className={`
                    relative z-99 
                    p-3 text-xs
                    font-martianmono 
                    text-center text-pretty
                    leading-normal 
                    text-brand-secondaryvar 
                    whitespace-normal 
                    bg-blueblacks-blackcoral 
                    shadow-lg rounded-xl
                    opacity-75
                    ${message.length > 20 ? 'w-64' : 'w-48'}
                `}
                >
                    {message}
                </span>
                <div className="-mt-2 rotate-45 bg-redblacks-blackplum"></div>
            </div>
        </div>
    );
};

export default Tooltip;
