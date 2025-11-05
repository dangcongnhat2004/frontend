import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",   // ✅ BẮT BUỘC để load đúng asset khi deploy
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});
