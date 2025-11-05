import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // để bạn truy cập IPv4
    port: 5173,
  },
});
