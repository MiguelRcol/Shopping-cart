import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Set VITE_BASE_PATH at build time when deploying to a sub-path, e.g. a
// GitHub Pages project site ("/repo-name/"). Netlify, Vercel and Cloudflare
// Pages all serve from the domain root, so the default "/" is correct there.
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
