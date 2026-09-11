# 布局模式调研

> 「布局模式」大类的研究记录：页面骨架与内容组织方式的编目。与「视觉风格」正交——风格回答"长什么样"，布局回答"东西怎么摆"。
> 本文只描述当前设计状态，过程记录见根目录 TODO.md。

## 收录标准

- 有明确名称与公认骨架的结构（而非某种视觉装饰）
- 可以用一个可交互的实例（含响应式行为）在页面中演示
- 热门与冷门一并收录，标注热度：热门 / 常见 / 冷门

## 分组与编目

### 一、页面骨架（整页的宏观结构）

| 模式 | 英文 | 热度 | 说明 |
| --- | --- | --- | --- |
| 圣杯布局 | Holy Grail | 热门 | 页头 + 左导航 + 主内容 + 右辅助栏 + 页脚；最经典的教科书骨架 |
| 侧边栏仪表盘 | Sidebar / Dashboard | 热门 | 固定侧边导航 + 顶栏 + 内容区，后台管理系统的统治性形态 |
| 顶部导航 + Hero | Top Nav + Hero | 热门 | 横向导航条下接大面积首屏宣传区，官网落地页标配 |
| 分屏布局 | Split Screen | 热门 | 左右两栏对分（常 50/50），一侧视觉一侧信息，二选一引导 |
| 全屏沉浸 | Full-bleed Hero | 热门 | 首屏整屏图文/视频铺满，滚动揭示后续内容 |
| 盒装布局 | Boxed Layout | 冷门 | 内容约束在固定最大宽度内，两侧留白，纸质报刊感 |
| 居中卡片 | Centered Card | 常见 | 单张卡片居中（登录、注册、空状态、404） |
| 三栏对称 | Three-Column | 冷门 | 等宽三栏并列，栏目型门户与特性罗列 |

### 二、内容组织（内容区内部如何排布）

| 模式 | 英文 | 热度 | 说明 |
| --- | --- | --- | --- |
| 单栏内容优先 | Single Column | 热门 | 一条阅读纵轴到底，博客与长文的最优解 |
| 卡片网格 | Card Grid | 热门 | 等尺寸卡片铺排，信息等权陈列 |
| 瀑布流 | Masonry | 热门 | 列宽固定、项高不一、依次填补，图片内容站标配 |
| 便当盒网格 | Bento Grid | 热门 | 大小不一的圆角格子拼装，Apple 带火的全能版式 |
| 杂志编辑布局 | Magazine / Editorial | 常见 | 多栏混排、大小标题错落、图文穿插的出版物式排版 |
| 特性交替行 | Feature Alternating | 常见 | 图文两列左右交替下行（Z 字动线），产品介绍页标配 |
| F 型动线 | F-Pattern | 冷门 | 按用户眼动 F 规律把关键信息压在左缘与首行 |
| Z 型动线 | Z-Pattern | 常见 | 少内容页面的对角扫描动线编排， landing 页常用 |

### 三、交互容器（承载任务流的结构）

| 模式 | 英文 | 热度 | 说明 |
| --- | --- | --- | --- |
| 主从布局 | Master-Detail | 热门 | 左列表右详情联动，邮件/笔记/文件管理器的骨架 |
| 看板 | Kanban | 常见 | 纵向列按阶段横排，卡片在列间流转（Todo/Doing/Done） |
| 分步向导 | Wizard / Stepper | 常见 | 步骤条驱动的分页表单流 |
| 弹窗 | Modal Dialog | 热门 | 遮罩压暗底层页面，居中对话框承载必须立即处理的任务 |
| 横向滚动 | Horizontal Scroll | 冷门 | 内容沿横轴滑动成卷，叙事型页面与移动端常见 |

## 与既有「视觉风格」的边界

- 便当盒网格在风格大类中以「皮肤」呈现过（Bento Grid 风格页）；在布局大类中它是一种**内容组织方式**，演示将专注于格子跨度与信息层级，而非外观。
- 瑞士排版风格强调网格秩序，同理——布局大类关注结构本身。

## 参考来源

- [HashBuilds · Layout Patterns](https://www.hashbuilds.com/categories/layouts)
- [AI Designer · Website Layout Examples: 15 Patterns](https://www.aidesigner.ai/blog/website-layout)
- [Thrive Themes · Website Layout Ideas: The 16 That Work](https://thrivethemes.com/best-website-layout-ideas/)
- [OpenReplay · Understanding the Holy Grail Layout Pattern](https://blog.openreplay.com/understanding-the-holy-grail-layout-pattern-in-css/)
- [UX Patterns · Kanban Board](https://uxpatterns.dev/patterns/data-display/kanban-board)
- [Medium · Master/Detail Pattern Revisited](https://medium.com/@lucasurbas/case-study-master-detail-pattern-revisited-86c0ed7fc3e)
- [SaaSFrame · Understanding The Bento Layout Trend](https://www.saasframe.io/blog/the-bento-layout-trend)
- [Piccalilli · A Simple Masonry-Like Composable Layout](https://piccalil.li/blog/a-simple-masonry-like-composable-layout/)
