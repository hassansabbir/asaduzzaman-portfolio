import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // HTML Template for YOU
    const ownerEmailHTML = `
      <div style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <h2 style="color:#ff6b6b; text-align:center;">📩 New Portfolio Message</h2>
          <p style="color:#374151; font-size:16px;">
            <strong>Name:</strong> ${name}<br/>
            <strong>Email:</strong> ${email}
          </p>
          <div style="margin-top:20px; padding:15px; background:#f3f4f6; border-left:4px solid #ff6b6b; border-radius:8px;">
            <p style="color:#111827; font-size:15px; line-height:1.6;">${message}</p>
          </div>
          <p style="margin-top:30px; text-align:center; color:#6b7280; font-size:12px;">
            Sent from your portfolio website 🚀
          </p>
        </div>
      </div>
    `;

    // HTML Template for SENDER
    const autoReplyHTML = `
      <div style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <h2 style="color:#ff8d5e; text-align:center;">🙌 Thanks for reaching out!</h2>
          <p style="color:#374151; font-size:16px;">Hi <strong>${name}</strong>,</p>
          <p style="color:#374151; font-size:15px; line-height:1.6;">
            Thanks for getting in touch through my portfolio. I’ve received your message and will respond as soon as possible.
          </p>
          <div style="margin:20px 0; padding:15px; background:#f3f4f6; border-left:4px solid #ff8d5e; border-radius:8px;">
            <p style="margin:0; color:#111827; font-size:14px; line-height:1.6;">Your Message:<br/>"${message}"</p>
          </div>
          <p style="color:#374151; font-size:15px;">
            Meanwhile, feel free to check out my latest work on my website 🚀
          </p>
          <a href="https://asaduzzaman-portfolio.vercel.app/" 
             style="display:inline-block; margin-top:15px; padding:12px 20px; background:#ff6b6b; color:white; text-decoration:none; border-radius:8px; font-weight:bold;">
            Visit My Portfolio
          </a>
          <p style="margin-top:30px; text-align:center; color:#6b7280; font-size:12px;">
            This is an automated response. I’ll get back to you personally soon. ✨
          </p>
        </div>
      </div>
    `;

    // Send email to YOU
    await transporter.sendMail({
      from: `"Asadujjaman Mahfuz Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      html: ownerEmailHTML,
    });

    // Send styled auto-reply to sender
    await transporter.sendMail({
      from: `"Asadujjaman Mahfuz" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: autoReplyHTML,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
