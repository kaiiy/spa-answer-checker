import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { obfuscator } from 'rollup-obfuscator'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/spa-answer-checker",
  plugins: [react(), obfuscator()],
})
