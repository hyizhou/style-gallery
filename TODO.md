# TODO — 风格标本馆

> 过程与进度记录。设计状态见 README 与 docs/。

## 布局模式大类

### 基础设施（本轮）

- [x] 调研布局模式，热门/冷门一并编目 → `docs/layout-patterns.md`
- [x] 设计记录：路由 / 数据模型 / 演示画框（容器查询响应式）→ `docs/layout-mode-design.md`
- [x] 主页新增「风格标本 / 布局模式」类别切换项
- [x] 布局卡片列表（未实现模式显示「规划中」徽章）+ 详情路由 `/layouts/:id`
- [x] 演示画框：预览宽度三档（桌面/平板/手机）+ 容器查询自动重排 + 区域名称徽章

### 模式实现清单（一轮一个，验收后继续）

- [x] 圣杯布局 Holy Grail（页面骨架 · 热门）
- [x] 侧边栏仪表盘 Sidebar Dashboard（页面骨架 · 热门）—— 含窄屏图标化 / 底部标签栏收纳
- [x] 主从布局 Master-Detail（交互容器 · 热门）—— 列表详情联动
- [x] 分屏布局 Split Screen（页面骨架 · 热门）
- [x] 单栏内容优先 Single Column（内容组织 · 热门）—— 68ch 阅读纵轴演示
- [x] 瀑布流 Masonry（内容组织 · 热门）—— CSS 多栏方案，3/2/1 列响应
- [x] 卡片网格 Card Grid（内容组织 · 热门）—— auto-fill 响应式网格
- [x] 便当盒网格 Bento Grid（内容组织 · 热门）—— 跨度层级 + 容器查询降列
- [x] 顶部导航 + Hero（页面骨架 · 热门）—— 落地页首屏骨架
- [x] 全屏沉浸 Full-bleed（视觉动线 · 热门）—— 整屏定调 + 滚动揭示
- [x] 杂志编辑布局 Magazine（内容组织 · 常见）—— 头条/次栏/简讯带版面层级
- [x] 看板 Kanban（交互容器 · 常见）—— 阶段列 + 卡片流转，窄屏横向滚动
- [x] 特性交替行 Feature Alternating（内容组织 · 常见）—— Z 字图文交替
- [x] 居中卡片 Centered Card（页面骨架 · 常见）—— place-items 单焦点页
- [x] Z 型动线 Z-Pattern（视觉动线 · 常见）—— 编号视线流
- [x] 分步向导 Wizard（交互容器 · 常见）—— 步骤条 + 可交互推进
- [x] 三栏对称 Three-Column（页面骨架 · 冷门）—— 等宽三栏古典排法
- [x] 盒装布局 Boxed Layout（页面骨架 · 冷门）—— 固定盒宽 + 装裱背景
- [x] F 型动线 F-Pattern（视觉动线 · 冷门）—— 眼动热区引导层
- [x] 横向滚动 Horizontal Scroll（交互容器 · 冷门）—— scroll-snap 长卷
- [x] 弹窗 Modal（弹窗大类 · 热门）—— 遮罩聚焦 + 确认流，×/取消/Esc/点遮罩四种关闭路径

全部 20 个模式已完成。

### 分类调整

- [x] 弹窗移出布局「交互容器」，升为与视觉风格/布局模式同级的顶层大类：路由 `/modals/:id`、主页第三标签、详情页与布局共用 PatternDetail，旧地址 `/layouts/modal` 重定向；设计记录 docs/modals.md

### 多语言

- [x] 中英双语全量接入：`/en` 前缀路由 + `useLocale` 路径判定（src/i18n.ts UI 词典）、数据条目 `i18n.en` 全量翻译（14 风格 / 20 布局 / 1 弹窗 / 7 场景 / 5 搭配）、21 个演示组件与 DemoKit/Signature/M3/Ant 双语、顶栏语言切换器、SEO 双语言元数据 + hreflang + sitemap 交替链接；设计记录 docs/i18n.md

## 反馈大类（弹窗大类重构）

- [x] 按反馈组件分类重编：五组（消息提醒 / 浮层容器 / 气泡浮层 / 加载进度 / 结果状态）14 词条——12 个基准术语（Alert / Toast / Notification / Modal / Drawer / Popconfirm / Popover / Tooltip / Progress / Skeleton / Result / Spinner）+ 补充底部抽屉 Bottom Sheet、空状态 Empty State
- [x] 数据迁移 modals.ts → feedback.ts（`/feedback/:id` 命名空间，旧 `/modals/:id` 与 `/layouts/modal` 重定向），词条全量中英内容 + 提示词 + 要点
- [x] 14 个可交互演示组件（feedback.css：`--fb-*` 状态色变量 + `fb-*` 演示样式 + 14 张主页缩略图）；原「规划中」占位缩略图类改名 `lp-thumb-planned`，让位给骨架屏词条
- [x] 全站接线：主页三标签与计数、词典反馈区、场景导购 kind=feedback、SEO 元数据与 sitemap（102 URL）、README 与 docs（modals.md → feedback.md）

## 其他

- [ ] GitHub Pages：等待仓库 Settings → Pages 开启「GitHub Actions」源后，确认线上部署结果
