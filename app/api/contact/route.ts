import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/ui/collaborate/EmailTemplate';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const myVerifiedEmail = 'k8@k8port.io';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;
        console.log('body', body);
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <hello@vibes.k8port.io>',
            to: [myVerifiedEmail],
            subject: 'New Message from Portfolio site contact form',
            replyTo: email,
            react: EmailTemplate({ name, email, message }) as React.ReactElement,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
        }

        return NextResponse.json(
            { message: 'Contact inquiry received and notification sent', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact route error:', error);
        return NextResponse.json(
            { error: 'Failed to submit form inquiry.  Please try again.' },
            { status: 500 }
        );
    }
}