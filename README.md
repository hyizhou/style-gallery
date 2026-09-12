# 风格标本馆 · Style Gallery

一个面向「使用 AI 做设计的人」的风格词典与提示词工具：看到想要的效果，拿到它的名字和提示词。主页支持用口语别名搜索（毛玻璃、黑客屏、辣妹风……），每个风格、布局与弹窗词条配一整套可交互组件标本和可一键复制的 AI 提示词；另有风格词典（`/glossary`）与场景推荐（`/scenarios`）两个入口。设计见 [docs/prompt-tool-design.md](docs/prompt-tool-design.md)。

其中 Material Design 3 页面由官方 [@material/web](https://github.com/material-components/material-web) 组件库渲染（动态色：3 种种子色 × 明暗模式）；Ant Design 页面由官方 [antd](https://ant.design) 组件库渲染（设计令牌：3 种品牌色 × 暗色算法）。

## 收录风格

极简主义 / 玻璃拟态 / 拟物风格 / 新拟物 / 粘土拟物 / 新粗野主义 / 极光暗夜 / 便当盒 / 复古像素 / Material Design 3 / Ant Design / 瑞士排版 / 终端 CRT / Y2K 千禧

其中 Material Design 3 页面由官方 [@material/web](https://github.com/material-components/material-web) 组件库渲染（动态色：3 种种子色 × 明暗模式）；Ant Design 页面由官方 [antd](https://ant.design) 组件库渲染（设计令牌：3 种品牌色 × 暗色算法）。

## 布局模式大类

主页可在「视觉风格 / 布局模式 / 弹窗」之间切换。布局模式与视觉风格正交：风格回答"长什么样"，布局回答"东西怎么摆"。每个布局模式配有可切换预览宽度（桌面/平板/手机）的活体演示，使用容器查询按容器宽度自动重排。调研编目见 [docs/layout-patterns.md](docs/layout-patterns.md)，接入设计见 [docs/layout-mode-design.md](docs/layout-mode-design.md)，推进计划见 [TODO.md](TODO.md)。当前已实现全部 20 个布局模式。

## 弹窗大类

与视觉风格、布局模式并列的第三个大类：布局回答「内容在页面里怎么摆」，弹窗回答「任务在哪个容器里发生」——遮罩、抽屉等打断式浮层容器。当前收录弹窗（Modal Dialog），路由 `/modals/:id`，详情页与布局模式共用同一结构。设计见 [docs/modals.md](docs/modals.md)。

## 多语言

站点支持中英双语：中文为默认语言（路径无前缀），英文挂在 `/en` 前缀下，顶栏可随时切换且保持当前页面。两语言全量预渲染，页面间以 hreflang 互指。设计见 [docs/i18n.md](docs/i18n.md)。

## 技术栈

- Vite 5 + React 18 + TypeScript
- react-router-dom（BrowserRouter）：多页路由（主页 `/`、风格页 `/styles/:id`、布局页 `/layouts/:id`、弹窗页 `/modals/:id`、词典 `/glossary`、场景 `/scenarios`；英文版统一挂在 `/en` 前缀下）
- 轻量 i18n：语言由路由路径判定（`src/i18n.ts`），UI 词典 + 数据条目 `i18n.en` 字段 + 演示组件内嵌文案表，无第三方依赖
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
