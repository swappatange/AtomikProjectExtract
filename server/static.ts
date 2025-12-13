import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "..", "dist");

let indexHtml: string | null = null;

function getIndexHtml(): string {
  if (!indexHtml) {
    const indexPath = path.resolve(distPath, "index.html");
    indexHtml = fs.readFileSync(indexPath, "utf-8");
  }
  return indexHtml;
}

export function serveStaticEarly(app: Express) {
  if (!fs.existsSync(distPath)) {
    console.error(`Build directory not found: ${distPath}`);
    return;
  }

  app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(getIndexHtml());
  });
}

export function serveStatic(app: Express) {
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath, { maxAge: "1d" }));

  // fall through to index.html if the file doesn't exist (SPA routing)
  app.use("/{*splat}", (req, res, next) => {
    if (req.path.startsWith("/api") || req.path === "/_health") {
      return next();
    }
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(getIndexHtml());
  });
}
