import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only instantiate Resend if the API key is provided
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!resend) {
            // Mock success if no API key is configured (local dev)
            console.log("Mock email sent:", { name, email, message });
            return NextResponse.json({ success: true, mock: true });
        }

        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'duyenhoforwork@gmail.com',
            subject: `Portfolio Contact from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API Route Error:", error);
        return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
}
