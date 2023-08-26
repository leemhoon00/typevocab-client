import path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
});
