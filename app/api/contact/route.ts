import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, message, website, company, employees, plan, price } = payload;

  // Honeypot / bot trap.
  if (website) return NextResponse.json({ success: true });

  const cleanName = String(name ?? "").trim().slice(0, 160);
  const cleanEmail = String(email ?? "").trim().slice(0, 254);
  const cleanPhone = String(phone ?? "").trim().slice(0, 60);
  const cleanMessage = String(message ?? "").trim().slice(0, 10000);
  const cleanCompany = String(company ?? "").trim().slice(0, 200);
  const cleanEmployees = String(employees ?? "").trim().slice(0, 80);
  const cleanPlan = String(plan ?? "").trim().slice(0, 80);
  const cleanPrice = String(price ?? "").trim().slice(0, 100);

  if (!cleanName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return NextResponse.json({ success: false, error: "Name and a valid email are required." }, { status: 400 });
  }
  if (cleanPlan && !cleanPhone) {
    return NextResponse.json({ success: false, error: "Phone number is required for a trial request." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    console.error("Contact mail is not configured: SMTP environment variables are missing.");
    return NextResponse.json({ success: false, error: "Email service is not configured." }, { status: 503 });
  }

  const recipient = process.env.CONTACT_TO || "mail@mindsmiratus.com";
  const sender = process.env.SMTP_FROM || SMTP_USER;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const isTrialRequest = Boolean(cleanPlan);
  const rows = [
    isTrialRequest && ["Plan", cleanPlan],
    isTrialRequest && ["Price", cleanPrice],
    isTrialRequest && ["Company", cleanCompany],
    isTrialRequest && ["Number of employees", cleanEmployees],
    ["Phone", cleanPhone || "Not provided"],
    ["Name", cleanName],
    ["Email", cleanEmail],
    ["Message", cleanMessage || "Not provided"],
  ].filter(Boolean) as string[][];
  const emailRows = rows
    .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`)
    .join("");

  try {
    await transporter.sendMail({
      from: sender,
      replyTo: cleanEmail,
      to: recipient,
      subject: isTrialRequest
        ? `14-Day Trial Request: ${cleanPlan} - ${cleanName}`
        : `New Website Inquiry from ${cleanName}`,
      html: `<h2>${isTrialRequest ? "14-Day Trial Request" : "New Contact Inquiry"}</h2>${emailRows}`,
    });
  } catch (error) {
    console.error("Contact inquiry email failed:", error);
    const errorCode = (error as { code?: string })?.code;
    const message = errorCode === "EAUTH"
      ? "Email server login failed. Please update the SMTP username and password."
      : "Unable to send your request right now. Please try again later.";
    return NextResponse.json({ success: false, error: message }, { status: 502 });
  }

  // A visitor auto-reply is helpful, but should not turn a successfully delivered
  // inquiry into a failed submission if the visitor's mailbox rejects the reply.
  try {
    await transporter.sendMail({
      from: sender,
      to: cleanEmail,
      subject: "Thank you for contacting Mindsmiratus Technologies",
      html: `<p>Hi ${escapeHtml(cleanName)},</p><p>Thank you for reaching out. Our team has received your request and will respond shortly.</p><p>For urgent matters, please call us at +91-9625306474/9990033746.</p><p>Regards,<br><strong>Mindsmiratus Technologies Pvt. Ltd.</strong></p>`,
    });
  } catch (error) {
    console.error("Contact auto-reply email failed:", error);
  }

  return NextResponse.json({ success: true });
}
