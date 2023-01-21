import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/


export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'analyze' && visualizer({ open: true, filename: "dist2/analysis/bundle-raw-data.html", template: 'raw-data' })
  ]
  ,
  build: {
    outDir: './build'
  },
  preview: {
    port: 3000
  }
}))