import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Server start hone ke baad browser me khul jayega
  },
  build: {
    outDir: "dist", // Default build output directory
  },
  base: "/", // Agar subdirectory me deploy karna ho to isko update karo
});
