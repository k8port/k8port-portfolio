import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/ui/collaborate/EmailTemplate';
import React from 'react';

const myVerifiedEmail = 'k8@k8port.io';

function getResend(): Resend | null {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return null;
    }

    return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
    try {
        const resend = getResend();
        if (!resend) {
            return NextResponse.json(
                { error: 'Email service is not configured (missing RESEND_API_KEY).' },
                { status: 500 }
            );
        }

        const body = await request.json();
        const { name, email, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <hello@vibes.k8port.io>',
            to: [myVerifiedEmail],
            subject: 'New Message from Portfolio site contact form',
            replyTo: email,
            react: EmailTemplate({ name, email, message }) as React.ReactElement,
        });

        if (error) {
            return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
        }

        return NextResponse.json(
            { message: 'Contact inquiry received and notification sent', data },
            { status: 200 }
        );
    } catch (_error) {
        return NextResponse.json(
            { error: 'Failed to submit form inquiry.  Please try again.' },
            { status: 500 }
        );
    }
}
