import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Static Vite app. `npm run build` writes the site to dist/ for Netlify,
// Vercel, Cloudflare Pages, or any host that serves static files.
export default defineConfig({
  appType: "spa",
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 8080,
  },
  preview: {
    port: 4173,
  },
});
