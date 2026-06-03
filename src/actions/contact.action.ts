"use server";

import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

// Escape user input so it can't break the email markup.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const sendContactEmail = async (payload: ContactPayload) => {
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    throw new Error("Please fill in your name, email and message.");
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  // Where the contact messages should land. Falls back to the sending mailbox.
  const to = process.env.CONTACT_TO || user;

  if (!host || !user || !pass) {
    console.error("Missing SMTP configuration in environment variables.");
    throw new Error("Email service is not configured. Please try again later.");
  }

  // TEMP DEBUG — remove once email works
  console.log("[SMTP debug]", {
    host,
    port,
    user,
    passLength: pass.length,
    passPreview: `${pass.slice(0, 2)}...${pass.slice(-1)}`,
  });

  const transporter = nodemailer.createTransport({
    host,
    port,
    // cPanel SMTP: port 465 = implicit SSL, 587 = STARTTLS
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      // Must be the authenticated mailbox, otherwise the server rejects /
      // spam-flags the message. The visitor's address goes in replyTo.
      from: `"${name} (Banksia Contact)" <${user}>`,
      to,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="margin:0;padding:24px;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
          <table role="presentation" align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg,#F16232,#E55527);padding:32px 40px;">
                <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;">New Contact Message</h1>
                <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Banksia London &middot; Website contact form</p>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:32px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom:16px;">
                      <p style="margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;">From</p>
                      <p style="margin:0;font-size:16px;font-weight:bold;color:#111827;">${escapeHtml(
                        name
                      )}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:24px;border-bottom:1px solid #f3f4f6;">
                      <p style="margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;">Email</p>
                      <a href="mailto:${escapeHtml(
                        email
                      )}" style="margin:0;font-size:16px;font-weight:bold;color:#F16232;text-decoration:none;">${escapeHtml(
        email
      )}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:24px;">
                      <p style="margin:0 0 10px;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;">Message</p>
                      <div style="background-color:#f9fafb;border-left:4px solid #F16232;border-radius:8px;padding:16px 20px;">
                        <p style="margin:0;font-size:15px;line-height:1.6;color:#374151;white-space:pre-wrap;">${escapeHtml(
                          message
                        )}</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:20px 40px;background-color:#f9fafb;border-top:1px solid #f3f4f6;">
                <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">This message was sent from the contact form on banksialondon.com. Reply directly to respond to ${escapeHtml(
                  name
                )}.</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return { success: true as const };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    throw new Error("Failed to send your message. Please try again later.");
  }
};