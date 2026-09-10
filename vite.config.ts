import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 相对基础路径：同时兼容本地开发与 GitHub Pages 的 /style-gallery/ 子路径
  // （路由为 HashRouter，页面路径始终停留在根目录，相对资源路径不会失效）
  base: './',
  server: {
    host: true,
    port: 7402,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 7403,
    strictPort: true,
  },
})
