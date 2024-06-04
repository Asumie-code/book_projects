import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://asumie-code.github.io/book_projects/",
  build: {
    outDir: './build'
  }
})
