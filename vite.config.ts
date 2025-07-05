import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
// This configuration sets up Vite for a React project, allowing for the use of absolute imports with the "@" alias pointing to the "src" directory. It also includes the React plugin for Vite to handle JSX and other React-specific features.