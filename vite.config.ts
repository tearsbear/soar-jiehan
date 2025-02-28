import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        icon: true,
        typescript: true,
        replaceAttrValues: { "#000": "currentColor" },
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
