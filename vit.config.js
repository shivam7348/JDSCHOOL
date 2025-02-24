import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Ensures Vite serves index.html for any route
  },
});
