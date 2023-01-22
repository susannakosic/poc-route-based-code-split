import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/


export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      mode === 'analyze' && visualizer({ open: true, filename: "analysis/bundle-treemap.html", template: "treemap" })
    ]
    ,
    build: {
      outDir: './build',
    },
    preview: {
      port: 3000
    }
  }
})