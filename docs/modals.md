# 弹窗大类 · 设计记录

> 「弹窗」是与「视觉风格 / 布局模式」并列的第三个标本大类在应用中的接入设计。当前设计状态描述，不含变更历史。

## 定位

- 与「视觉风格」「布局模式」同级的顶层大类：风格回答「长什么样」，布局回答「内容在页面里怎么摆」，弹窗回答「任务在哪个容器里发生」。
- 收录对象：以浮层形式打断并聚焦页面的容器（遮罩、抽屉、气泡等），而非页面内部的空间排布——后者属于布局模式。
- 收录标准沿用布局编目：有公认名称与明确结构；可用可交互实例（打开 / 关闭路径完整）演示；标注热度。

## 数据模型（src/data/modals.ts）

- `ModalPattern` 字段与 `LayoutPattern` 同构（id / name / en / heat / tagline / desc / tags / aliases / prompt / status / notes），仅 `group` 固化为 `'弹窗'`，复用 `LayoutHeat`、`LayoutStatus`、`LayoutPatternNotes` 类型。
- 路由命名空间：`/modals/:id`；主页类别切换为「视觉风格 / 布局模式 / 弹窗」三标签。

## 详情页

- 复用布局模式的详情页组件 `src/pages/PatternDetail.tsx`（按 `kind` 区分集合与路由前缀）：画框、预览宽度三档、要点区、提示词卡片与搭配区结构一致。
- 上/下一个模式导航仅在同类集合有多于一个词条时出现。
- 演示组件位于 `src/components/modals/`；演示样式沿用 `src/styles/layouts.css` 的 `--lp-*` 体系。

## 词条

| 词条 | 英文 | 热度 | 说明 |
| --- | --- | --- | --- |
| 弹窗 | Modal Dialog | 热门 | 遮罩压暗底层页面，居中对话框承载必须立即处理的任务（确认 / 短表单 / 灯箱） |

可扩方向（同为打断式浮层容器）：抽屉 Drawer、气泡 Popover、轻提示 Toast、底部抽屉 Bottom Sheet。
