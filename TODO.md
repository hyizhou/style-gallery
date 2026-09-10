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

- [x] 圣杯布局 Holy Grail（页面骨架 · 热门）—— 本轮已交付
- [ ] 侧边栏仪表盘 Sidebar Dashboard（页面骨架 · 热门）
- [ ] 主从布局 Master-Detail（交互容器 · 热门）
- [ ] 分屏布局 Split Screen（页面骨架 · 热门）
- [ ] 单栏内容优先 Single Column（内容组织 · 热门）
- [ ] 瀑布流 Masonry（内容组织 · 热门）
- [ ] 卡片网格 Card Grid（内容组织 · 热门）
- [ ] 便当盒网格 Bento Grid（内容组织 · 热门）
- [ ] 顶部导航 + Hero（页面骨架 · 热门）
- [ ] 全屏沉浸 Full-bleed（视觉动线 · 热门）
- [ ] 杂志编辑布局 Magazine（内容组织 · 常见）
- [ ] 看板 Kanban（交互容器 · 常见）
- [ ] 特性交替行 Feature Alternating（内容组织 · 常见）
- [ ] 居中卡片 Centered Card（页面骨架 · 常见）
- [ ] Z 型动线 Z-Pattern（视觉动线 · 常见）
- [ ] 分步向导 Wizard（交互容器 · 常见）
- [ ] 三栏对称 Three-Column（页面骨架 · 冷门）
- [ ] 盒装布局 Boxed Layout（页面骨架 · 冷门）
- [ ] F 型动线 F-Pattern（视觉动线 · 冷门）
- [ ] 横向滚动 Horizontal Scroll（交互容器 · 冷门）

优先级说明：先做「热门」中的页面骨架与交互容器（圣杯已做，下一个建议：侧边栏仪表盘），再补内容组织，最后收尾冷门模式。

## 其他

- [ ] GitHub Pages：等待仓库 Settings → Pages 开启「GitHub Actions」源后，确认线上部署结果
