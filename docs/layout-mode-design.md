# 布局模式 · 设计记录

> 「布局模式」大类在应用中的接入设计。当前设计状态描述，不含变更历史。

## 定位

- 与「视觉风格」并列的第二个大类：风格 = 外观皮肤，布局 = 结构骨架。
- 新风格与新模式互不依赖：任意布局模式 × 任意视觉风格在概念上可叠加（当前应用不做叠加演示，只分别示范）。

## 路由与导航

- 主页类别切换项（视觉风格 / 布局模式 / 反馈），切换的是主页卡片网格的数据源。
- 布局模式详情路由：`/layouts/:id`，由 BrowserRouter 承载；已知路由在构建时预渲染为真实静态文件，未知路径由 `404.html` 兜底。
- 未实现（planned）的模式在列表中以「规划中」徽章出现，不可点击；详情页只对 `status === 'ready'` 的模式开放，非法 id 重定向回主页。
- 「反馈」是与本大类平级的顶层大类（同样复用 PatternDetail 详情页），见 [feedback.md](./feedback.md)。

## 数据模型（src/data/layouts.ts）

```ts
interface LayoutPattern {
  id: string
  name: string          // 中文名
  en: string            // 英文名
  group: '页面骨架' | '内容组织' | '交互容器' | '视觉动线'
  heat: '热门' | '常见' | '冷门'
  tagline: string       // 一句话
  desc: string          // 段落介绍
  tags: string[]
  status: 'ready' | 'planned'
  notes?: {             // ready 模式必填
    use: string[]       // 何时使用
    caveats: string[]   // 权衡与注意
    css: string         // 关键实现（一行代码）
  }
}
```

编目来源见 [layout-patterns.md](./layout-patterns.md)。

## 详情页结构（src/pages/PatternDetail.tsx，反馈大类共用）

1. 风格页同款页头：眉题（英文名 · 分组 · 热度）、标题、标语、描述、标签。
2. **预览宽度控制**：桌面 / 平板 / 手机三档，切换演示容器的最大宽度。
3. **演示画框**：浏览器窗口样式的画框（红绿灯 + 地址栏），内容区为 `container-type: inline-size` 容器——布局实例用 **容器查询** 按容器宽度自动重排，直观展示响应式断点行为。
4. 结构注记：布局的每个区域上覆盖名称徽章（header / nav / main…），点明「哪里是什么」。
5. 要点区：何时使用 / 权衡与注意 / 关键实现一行代码。
6. 底部上/下一个模式导航（只在 ready 集合内循环）。

## 实现约定

- 每个模式一个独立演示组件（`src/components/layouts/<Id>Demo.tsx`），PatternDetail 按 id 分发——布局是"结构本身"，无法像视觉风格那样共享一套标记换皮。
- 演示样式集中在 `src/styles/layouts.css`，使用 `--lp-*` 前缀变量；暗色主题通过 `:root[data-theme='dark']` 覆盖变量，自动跟随全局明暗开关。
- 优先使用现代 CSS：Grid `grid-template-areas`、`min()`/`clamp()`、容器查询。
- 新增模式的节奏：一轮一个，验收后再继续；计划清单见根目录 TODO.md。
