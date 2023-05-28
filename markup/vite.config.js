import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Hirose-Koichi.github.io/",
  plugins: [react()],
  root: "src",
});
