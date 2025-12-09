import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailContent = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Message from ${firstname} ${lastname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Contact Details:</h3>
            <p><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #007cba;">
            <h3 style="margin-top: 0; color: #555;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${firstname}.</p>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Try SendGrid first (for production)
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== 'your_sendgrid_api_key_here') {
      try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        await sgMail.send(emailContent);
        
        return NextResponse.json({ 
          success: true, 
          message: 'Email sent successfully via SendGrid' 
        });
      } catch (sendGridError) {
        console.error('SendGrid error:', sendGridError);
        // Fall back to SMTP
      }
    }

    // Use Gmail SMTP
    if (process.env.SMTP_PASS && process.env.SMTP_PASS !== 'your_gmail_app_password_here') {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Verify connection
      await transporter.verify();
      
      await transporter.sendMail(emailContent);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully via Gmail SMTP' 
      });
    }

    // No email service configured
    return NextResponse.json(
      { error: 'No email service configured' },
      { status: 500 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}