import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { saveMessage, logActivity } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, service, message } = data;

    // Log the contact inquiry (simulating email reception)
    console.log("==========================================");
    console.log("NEW CONTACT INQUIRY RECEIVED:");
    console.log(`From: ${name} (${email})`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Subject: ${subject || "General Inquiry"}`);
    console.log(`Service: ${service || "General"}`);
    console.log("Message:");
    console.log(message);
    console.log("==========================================");

    // Save to Database
    await saveMessage({
      name,
      email,
      phone: phone || "",
      subject: subject || "General Inquiry",
      service: service || "other",
      message,
    });
    
    // Log Activity
    await logActivity(
      "message",
      "New Contact Inquiry",
      `Received new message from ${name} (${email}) regarding ${service || "General Inquiry"}.`
    );

    // Setup Nodemailer transport
    // Note: These should be defined in .env
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Only attempt to send if credentials are provided
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: "cmakeycompanylimited@gmail.com",
        replyTo: email,
        subject: `[Website Inquiry] ${subject || "New Message"}`,
        text: `
          New contact inquiry from Cmakey Website:
          
          Name: ${name}
          Email: ${email}
          Phone: ${phone || "N/A"}
          Service: ${service || "General Inquiry"}
          Subject: ${subject || "N/A"}
          
          Message:
          ${message}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #001f3f;">New Website Inquiry</h2>
            <hr style="border: 0; border-top: 1px solid #eee;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Service:</strong> ${service || "General Inquiry"}</p>
            <p><strong>Subject:</strong> ${subject || "N/A"}</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        `,
      });
      console.log("Email sent successfully.");
    } else {
      console.warn("Email credentials not provided. Message logged to console only.");
    }

    return NextResponse.json({ success: true, message: "Inquiry received successfully." });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Failed to process inquiry." }, { status: 500 });
  }
}
