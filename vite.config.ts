import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDir, "index.html"),
        about: resolve(rootDir, "pages/about.html"),
        skills: resolve(rootDir, "pages/skills.html"),
        projects: resolve(rootDir, "pages/projects.html"),
        experience: resolve(rootDir, "pages/experience.html")
      }
    }
  }
});