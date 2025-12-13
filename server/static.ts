import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexPath = path.resolve(distPath, "index.html");
  const indexHtml = fs.readFileSync(indexPath, "utf-8");

  app.use(express.static(distPath, { maxAge: "1d" }));

  // fall through to index.html if the file doesn't exist (SPA routing)
  app.use("/{*splat}", (req, res, next) => {
    if (req.path.startsWith("/api") || req.path === "/_health") {
      return next();
    }
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(indexHtml);
  });
}
