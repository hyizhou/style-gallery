import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 绝对基础路径：匹配 GitHub Pages 的 /style-gallery/ 子路径，
  // 预渲染生成的嵌套页面（如 /styles/skeuo/）也依赖它正确解析资源地址
  base: '/style-gallery/',
  ssr: {
    // antd 及其依赖同时发布 ESM/CJS 两种产物，Node 直接按 main 字段加载会触发
    // CJS require ESM / 命名导出互转一类报错，索性全部打进 SSR 包由 Rollup 统一互转
    //（node 内置模块仍自动外部化；预渲染脚本因此不另行 import react-dom/server，避免双 React 实例）
    noExternal: true,
  },
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
