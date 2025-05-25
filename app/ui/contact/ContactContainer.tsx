import React from "react";
import ContactForm from './ContactForm';

export default function ContactContainer() {
    return (
        <div className="flex flex-col w-full m-20">
            <div className="flex flex-col w-full items-center justify-center gap-12 mb-8">
                <div className="flex flex-col items-center gap-12">
                    <div className="caption-heavy text-xl text-blueblacks-bluecharcoal uppercase">CONTACT ME</ div>
                    <div className="bg-brand-secondary w-lg h-lg p-8">
                        <ContactForm />
                    </div>
                </div>
            </div>

        </div>
    );
}