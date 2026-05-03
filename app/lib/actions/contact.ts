// app/actions/contact.ts
'use server';

import { getEmailAdapter } from '@/lib/email';
import type { Mail } from '@/lib/email';

interface State {
    success: boolean;
    error?: string | null;
}

export async function submitContact(_prevState: State, formData: FormData): Promise<State> {
    console.log('submitContact invoked', formData);
    const firstname = formData.get('firstname')?.toString().trim() ?? '';
    const lastname = formData.get('lastname')?.toString().trim() ?? '';
    const preference = (formData.get('preference') as string | null) ?? 'email';
    const phone = formData.get('phone')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const whatsapp = formData.get('whatsapp')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    /* -------- basic validation -------- */
    if (!firstname || !preference) {
        if (preference === 'email') {
            if (!email) return { success: false, error: 'Email address required.' };
        } else if (preference === 'text') {
            if (!phone) return { success: false, error: 'Phone number required.' };
        } else if (preference === 'whatsapp') {
            if (!whatsapp) return { success: false, error: 'WhatsApp handle required.' };
        }
        return { success: false, error: 'First name and communication preference are required.' };
    } else if (preference === 'email' && !email)
        return { success: false, error: 'Email address required.' };
    else if (preference === 'text' && !phone)
        return { success: false, error: 'Phone number required.' };
    else if (preference === 'whatsapp' && !whatsapp)
        return { success: false, error: 'WhatsApp handle required.' };

    /* -------- Notify site owner by default adapter -------- */
    const adminMail: Mail = {
        to: process.env.MAIL_TO!,
        subject: 'New inquiry from ${firstname}',
        html: `<p><strong>${firstname}</strong> wrote:</p><blockquote>${message || 'nothing'}</blockquote><p>Contact via: ${email} || ${phone} || ${whatsapp}</p>`,
        text: `${firstname} ${lastname} wrote: ${message || 'nothing'}\n\nContact Via: ${email} || ${phone} || ${whatsapp}`,
    };

    const adminAdapter = getEmailAdapter();
    const adminResult = await adminAdapter.send(adminMail);
    if (!adminResult.ok) {
        return { success: false, error: `Notification failed: ${adminResult.error}` };
    }

    return { success: true };
}
