import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    method: string;
    handle: string;
    message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    method,
    handle,
    message,
}) => {
    return (
        <div>
            <h1>New Contact Inquiry</h1>
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Preferred Contact Method:</strong> {method}
            </p>
            <p>
                <strong>Contact Info:</strong> {handle}
            </p>
            {message && (
                <p>
                    <strong>Message:</strong> {message}
                </p>
            )}
        </div>
    );
};
