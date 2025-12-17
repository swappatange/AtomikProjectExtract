import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, location, cropType, acreage, preferredDate, preferredTime, notes } = req.body;

    console.log("Booking request received:", { name, phone, location });

    if (!name || !phone || !location || !cropType || !acreage || !preferredDate || !preferredTime) {
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
      from: `"Atomik Spray Booking" <${process.env.SMTP_USER}>`,
      to: "swapnil@atomik.in",
      subject: `[Atomik] New Spray Booking Request - ${name}`,
      html: `
        <h2>New Drone Spray Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Farm Location:</strong> ${location}</p>
        <hr />
        <p><strong>Crop Type:</strong> ${cropType}</p>
        <p><strong>Acreage:</strong> ${acreage} acres</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <hr />
        <p><strong>Additional Notes:</strong></p>
        <p>${notes ? notes.replace(/\n/g, "<br>") : "None"}</p>
      `,
    };

    console.log("Sending booking email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    
    res.status(200).json({ success: true, message: "Booking request submitted successfully" });
  } catch (error) {
    console.error("Email error:", error.message || error);
    res.status(500).json({ error: "Failed to submit booking: " + (error.message || "Unknown error") });
  }
}
