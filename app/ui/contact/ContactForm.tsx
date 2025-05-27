'use client';

import React from 'react';
import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        method: '',
        handle: '',
        reason: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // basic validation
        if (!form.name || !form.method || !form.handle || !form.reason) {
            alert('Please fill in all fields');
            return;
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            setSubmitted(true);
        } else {
            const error = await response.json();
            alert(`Failed to submit form. ${error.error} || Submission failed.`);
        }
    };

    if (submitted) {
        return (
            <div className="text-greenblacks-pthalogreen font-greatvibes font-semibold">
                Thanks for your inquiry! I&apos;ll be in touch!
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md mx-auto p-4 border rounded shadow"
        >
            <div>
                <label htmlFor="name" className="block font-medium">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="method" className="block font-medium">
                    Preferred Contact Method
                </label>
                <input
                    type="text"
                    id="method"
                    name="method"
                    value={form.method}
                    onChange={handleChange}
                    placeholder="email, phone call, text message, direct message, et.al."
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="handle" className="block font-medium">
                    Contact Handle (e.g. email address, mobile number, linkedin, github, etc.)
                </label>
                <input
                    type="text"
                    id="handle"
                    name="handle"
                    value={form.handle}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="reason" className="block font-medium">
                    Reason for Inquiry
                </label>
                <input
                    type="text"
                    id="reason"
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    placeholder="e.g. job opportunity, project collaboration, et.al."
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="message" className="block font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <button
                type="submit"
                className="bg-accent-accentblue text-brand-secondary font-bold px-4 py-2 rounded hover:bg-accent-accentbluevar mx-[40%]"
            >
                Submit
            </button>
        </form>
    );
}
