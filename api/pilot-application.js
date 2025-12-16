import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const form = new IncomingForm({
      maxFileSize: 10 * 1024 * 1024,
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const phone = Array.isArray(fields.phone) ? fields.phone[0] : fields.phone;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const location = Array.isArray(fields.location) ? fields.location[0] : fields.location;
    const licenseNumber = Array.isArray(fields.licenseNumber) ? fields.licenseNumber[0] : fields.licenseNumber;
    const droneDetails = Array.isArray(fields.droneDetails) ? fields.droneDetails[0] : fields.droneDetails;
    const experience = Array.isArray(fields.experience) ? fields.experience[0] : fields.experience;
    const certificate = files.certificate ? (Array.isArray(files.certificate) ? files.certificate[0] : files.certificate) : null;

    console.log("Pilot application received:", { name, email, location, hasFile: !!certificate });

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
        <hr />
        <p><strong>Remote Pilot Certificate:</strong> ${certificate ? "Attached" : "Not provided"}</p>
      `,
    };

    if (certificate) {
      const fileBuffer = fs.readFileSync(certificate.filepath);
      mailOptions.attachments = [{
        filename: certificate.originalFilename,
        content: fileBuffer,
        contentType: certificate.mimetype,
      }];
    }

    console.log("Sending pilot application email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    
    res.status(200).json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Email error:", error.message || error);
    res.status(500).json({ error: "Failed to submit application: " + (error.message || "Unknown error") });
  }
}
