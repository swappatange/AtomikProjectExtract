import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

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

  app.post("/api/pilot-application", async (req, res) => {
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
      res.json({ success: true, message: "Application submitted successfully" });
    } catch (error: any) {
      console.error("Email error:", error.message || error);
      res.status(500).json({ error: "Failed to submit application: " + (error.message || "Unknown error") });
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
