import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email, location, licenseNumber, droneDetails, experience } = req.body;

    console.log("Pilot application received:", { name, email, location });

    if (!name || !phone || !email || !location || !licenseNumber || !droneDetails) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials not configured");
      return res.status(500).json({ error: "Email service not configured" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Atomik Pilot Application" <${process.env.SMTP_USER}>`,
      to: "swapnil@atomik.in",
      replyTo: email,
      subject: `[Atomik] New Drone Pilot Application - ${name}`,
      html: `
        <h2>New Drone Pilot Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>DGCA License Number:</strong> ${licenseNumber}</p>
        <hr />
        <p><strong>Drone Details:</strong></p>
        <p>${droneDetails.replace(/\n/g, "<br>")}</p>
        <hr />
        <p><strong>Experience:</strong></p>
        <p>${experience ? experience.replace(/\n/g, "<br>") : "Not provided"}</p>
      `,
    };

    console.log("Sending pilot application email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    
    res.status(200).json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Email error:", error.message || error);
    res.status(500).json({ error: "Failed to submit application: " + (error.message || "Unknown error") });
  }
}
