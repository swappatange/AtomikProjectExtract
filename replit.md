# Atomik Landing Page - Replit Project

## Project Overview
This is a React + TypeScript + Vite application for Atomik, featuring a modern UI built with shadcn-ui components and Tailwind CSS. It includes a Node.js Express backend for handling spray bookings and contact form submissions via email.

## Recent Changes
- **January 2026**: Integrated Express backend for email notifications.
- **January 2026**: Configured SMTP for Gmail (requires `SMTP_USER` and `SMTP_PASS` secrets).
- **January 2026**: Updated deployment to Autoscale to support backend functionality.

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, shadcn-ui, Framer Motion.
- **Backend**: Node.js Express server.
- **Email Service**: Nodemailer (SMTP).

## Project Structure
```
/
├── src/               # Frontend React components
├── server/            # Backend Express server and routes
├── public/            # Static files
└── vite.config.ts     # Vite configuration
```

## Development
- **Dev Server**: Runs on port 5000 (bound to 0.0.0.0).
- **Workflow**: "Start application" runs `npm run dev`.

## Deployment
- **Type**: Autoscale (Required for backend functionality).
- **Build Command**: `npm run build`.
- **Run Command**: `npm start`.

## Environment Notes
- **SMTP Secrets**: `SMTP_USER` and `SMTP_PASS` must be configured in secrets.
- Use Gmail App Passwords with 2FA enabled for `SMTP_PASS`.
