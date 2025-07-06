import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  base: "/embeddo/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
// This configuration sets up Vite for a React project with an alias for the src directory.
// The base path is set to "/embeddo/" which is useful for deploying the app in a subdirectory.