import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "mail.nssresearchjournal.com" ,//"smtp.yourserver.com",
    port: 587,
    secure: false,
    auth: {
      user: "no-reply@nssresearchjournal.com",
      pass: "Alinetech@123#",
    },
    tls: { //for self sign sertificates
    rejectUnauthorized: false,
  },
  });

  try {
    // 1) Send to support team
    await transporter.sendMail({
      from: `"Website Contact" <mail@mindsmiratus.com>`,
      to: "mail@mindsmiratus.com",
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p><p>${message}</p>
      `,
    });

    // 2) Auto reply to visitor
    await transporter.sendMail({
      from: `"Mindsmiratus Technologies" <mail@mindsmiratus.com>`,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. Our team has received your message and will respond shortly.</p>
        <p>Regards,<br><strong>Mindsmiratus Technologies Pvt. Ltd.</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Mail API Error:", error); // <--- Visible in VS Code Terminal
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}