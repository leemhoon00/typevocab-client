import path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src"),
    },
  },
});
