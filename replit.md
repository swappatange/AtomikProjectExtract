# Atomik Landing Page - Replit Project

## Project Overview
This is a React + TypeScript + Vite landing page application for Atomik, featuring a modern UI built with shadcn-ui components and Tailwind CSS. The project was imported from a Lovable.dev project.

## Recent Changes
- **December 7, 2024**: Initial project import and Replit environment setup
  - Moved project files from subdirectory to root
  - Updated Vite configuration for Replit compatibility (port 5000, host 0.0.0.0)
  - Configured workflow for development server
  - Set up static deployment configuration

## Tech Stack
- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Language**: TypeScript 5.8.3
- **UI Library**: shadcn-ui (Radix UI components)
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 6.30.1
- **Animations**: Framer Motion 12.23.25
- **State Management**: TanStack Query 5.83.0
- **Form Handling**: React Hook Form 7.61.1 with Zod validation

## Project Structure
```
/
├── src/
│   ├── components/       # React components
│   │   ├── home/        # Home page sections
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   └── ui/          # shadcn-ui components
│   ├── pages/           # Page components (routing)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── assets/          # Images and static assets
├── public/              # Static files
└── vite.config.ts       # Vite configuration
```

## Development
- **Dev Server**: Runs on port 5000 (bound to 0.0.0.0)
- **Hot Module Replacement**: Enabled via Vite
- **Workflow**: "Start application" runs `npm run dev`

## Deployment
- **Type**: Static site
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Deployment configured**: Ready to publish via Replit

## Pages
- Home (Index)
- About
- Solutions
- Technology
- Pilots
- Partnerships
- Investors
- Download
- Contact
- Privacy Policy
- Cookie Policy

## Environment Notes
- The project is configured to work with Replit's proxy system
- Frontend binds to 0.0.0.0:5000 for proper preview functionality
- No backend or database required (static frontend only)
