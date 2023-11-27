import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

process.env = Object.assign(process.env, loadEnv('production', process.cwd(), ''));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  experimental: {
    renderBuiltUrl(filename) {
        return process.env.APP_URL + '/Sobel/' + filename;
    }
  }
})
