import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images, PDF, and Word documents are allowed.'));
    }
  }
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  console.log("Registering API routes...");
  
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/_health", (req, res) => {
    res.status(200).send("OK");
  });

  app.post("/api/pilot-application", upload.single('certificate'), async (req, res) => {
    try {
      const { name, phone, email, location, licenseNumber, droneDetails, experience } = req.body;
      const file = req.file;

      console.log("Pilot application received:", { name, email, location, hasFile: !!file });

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

      const mailOptions: any = {
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
          <p><strong>Remote Pilot Certificate:</strong> ${file ? "Attached" : "Not provided"}</p>
        `,
      };

      if (file) {
        mailOptions.attachments = [{
          filename: file.originalname,
          content: file.buffer,
          contentType: file.mimetype,
        }];
      }

      console.log("Sending pilot application email...");
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      res.json({ success: true, message: "Application submitted successfully" });
    } catch (error: any) {
      console.error("Email error:", error.message || error);
      res.status(500).json({ error: "Failed to submit application: " + (error.message || "Unknown error") });
    }
  });

  app.post("/api/book", async (req, res) => {
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
      res.json({ success: true, message: "Booking request submitted successfully" });
    } catch (error: any) {
      console.error("Email error:", error.message || error);
      res.status(500).json({ error: "Failed to submit booking: " + (error.message || "Unknown error") });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;

      console.log("Contact form submission received:", { name, email, subject });

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error("SMTP credentials not configured");
        return res.status(500).json({ error: "Email service not configured" });
      }

      console.log("Using SMTP_USER:", process.env.SMTP_USER);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Atomik Contact Form" <${process.env.SMTP_USER}>`,
        to: "swapnil@atomik.in",
        replyTo: email,
        subject: `[Atomik Contact] ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      };

      console.log("Sending email to swapnil@atomik.in...");
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error: any) {
      console.error("Email error:", error.message || error);
      res.status(500).json({ error: "Failed to send email: " + (error.message || "Unknown error") });
    }
  });

  return httpServer;
}
