import { EmailTemplate } from '@/app/ui/contact/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, method, handle, reason, message } = body;

        // basic validation
        if (!name || !method || !handle || !reason) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'k8@k8port.io',
            subject: `New Contact Inquiry from ${name}`,
            react: (
                <EmailTemplate
                    name={name}
                    method={method}
                    handle={handle}
                    reason={reason}
                    message={message || 'No message provided'}
                />
            ),
        });

        if (error) {
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }
        return NextResponse.json(
            { message: 'Contact inquiry received.  Notification sent.' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to submit form inquiry.  Please try again.' },
            { status: 500 }
        );
    }
}
