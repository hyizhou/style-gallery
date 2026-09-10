# 风格标本馆 · Style Gallery

一个用于展示主流 UI 设计风格的多页 Web 应用：主页是站点介绍与风格导航，每个风格卡片以该风格的组件作为预览；点击进入对应风格页，可查看按钮、表单、卡片、徽章、进度反馈等一整套可交互组件，以及一件「风格签名」特色组件。

其中 Material Design 3 页面由官方 [@material/web](https://github.com/material-components/material-web) 组件库渲染（动态色：3 种种子色 × 明暗模式）；Ant Design 页面由官方 [antd](https://ant.design) 组件库渲染（设计令牌：3 种品牌色 × 暗色算法）。

## 收录风格

极简主义 / 玻璃拟态 / 拟物风格 / 新拟物 / 粘土拟物 / 新粗野主义 / 极光暗夜 / 便当盒 / 复古像素 / Material Design 3 / Ant Design / 瑞士排版 / 终端 CRT / Y2K 千禧

其中 Material Design 3 页面由官方 [@material/web](https://github.com/material-components/material-web) 组件库渲染（动态色：3 种种子色 × 明暗模式）；Ant Design 页面由官方 [antd](https://ant.design) 组件库渲染（设计令牌：3 种品牌色 × 暗色算法）。

## 布局模式大类

主页可在「视觉风格 / 布局模式」之间切换。布局模式与视觉风格正交：风格回答"长什么样"，布局回答"东西怎么摆"。每个布局模式配有可切换预览宽度（桌面/平板/手机）的活体演示，使用容器查询按容器宽度自动重排。调研编目见 [docs/layout-patterns.md](docs/layout-patterns.md)，接入设计见 [docs/layout-mode-design.md](docs/layout-mode-design.md)，推进计划见 [TODO.md](TODO.md)。当前已实现全部 20 个布局模式。

## 技术栈

- Vite 5 + React 18 + TypeScript
- react-router-dom（BrowserRouter）：多页路由（主页 `/`、风格页 `/styles/:id`、布局页 `/layouts/:id`）
- @material/web：Material Design 3 官方 Web 组件（m3 风格页）
- antd + @ant-design/icons：Ant Design 官方组件库（antd 风格页）
- 样式为手写 CSS：`styles/base.css` 提供共享骨架，`styles/themes/*.css` 以 `.theme-<id>` 作用域实现各风格皮肤
- 所有动效均为纯 CSS（hover/active 过渡与关键帧），不依赖 JS 动画时钟，页面任何时刻都保持完整可见
- SEO：构建时预渲染全部路由为静态 HTML（`src/entry-server.tsx` + `scripts/prerender.mjs`），每页独立 title / description / canonical / Open Graph 与 JSON-LD 结构化数据，并生成 `sitemap.xml`、`robots.txt` 与 `404.html`；已知路由是真实静态文件（对爬虫返回 200），未知路径由 `404.html` 兜底交给客户端路由接管

## 部署（GitHub Pages）

站点部署在 `https://<user>.github.io/style-gallery/`，与此相关的约定集中在两处：`vite.config.ts` 的 `base`（资源前缀，也是路由 basename 的来源）和 `src/data/seo.ts` 的 `SITE_URL`（canonical / og:url / sitemap 的绝对地址来源）。若更换托管路径或绑定自定义域名，改这两处即可。收录提交：在 [Google Search Console](https://search.google.com/search-console) 以「网址前缀」属性验证站点后提交 `sitemap.xml`。

## 开发

```bash
npm install
npm run dev      # 开发服务器（端口见 vite.config.ts，站点路径为 /style-gallery/）
npm run build    # 类型检查 + 生产构建 + 预渲染全部路由
npm run preview  # 预览构建产物（路径同上）
```
