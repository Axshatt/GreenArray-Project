import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can change this (e.g. Outlook, custom SMTP)
      auth: {
        user:"axonnnyt@gmail.com" , // your email
        pass: "sumr yvvm ehri oinq", // app password (not your normal password)
      },
    });

    // Email content
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "axonnnyt@gmail.com", // where you want to receive messages
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
