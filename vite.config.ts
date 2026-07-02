import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: ["trademark-aroma.onrender.com"],
    port: 4173,
    host: "0.0.0.0",
  },
  server: {
    allowedHosts: ["trademark-aroma.onrender.com"],
  },
});