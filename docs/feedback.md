# 反馈大类 · 设计记录

> 「反馈」是与「视觉风格 / 布局模式」并列的第三个标本大类在应用中的接入设计。当前设计状态描述，不含变更历史。

## 定位

- 与「视觉风格」「布局模式」同级的顶层大类：风格回答「长什么样」，布局回答「内容在页面里怎么摆」，反馈回答「状态怎么告诉用户、任务在哪个容器里发生」。
- 收录对象：向用户传达状态、结果与等待的一切界面模式，以及承载聚焦任务的浮层容器——从最重的阻断弹窗到最轻的一行 Tooltip，覆盖完整的打断强度光谱。
- 收录标准沿用布局编目：有公认名称与明确结构；可用可交互实例演示（打开 / 关闭、触发 / 消失路径完整）；标注热度。

## 分类结构

反馈词条按打断强度与形态分五组（`FeedbackGroup`）：

| 分组 | 英文 | 词条 |
| --- | --- | --- |
| 消息提醒 | Messages | 警告提示 Alert · 轻提示 Toast · 通知 Notification |
| 浮层容器 | Overlays | 弹窗 Modal · 抽屉 Drawer · 底部抽屉 Bottom Sheet |
| 气泡浮层 | Bubbles | 气泡确认框 Popconfirm · 气泡卡片 Popover · 文字提示 Tooltip |
| 加载进度 | Loading | 进度条 Progress · 骨架屏 Skeleton · 旋转加载 Spinner |
| 结果状态 | Results | 结果页 Result · 空状态 Empty State |

组内词条按「提醒 → 容器 → 气泡 → 过程 → 结果」排列；三组气泡类（Popconfirm / Popover / Tooltip）的区别在触发方式与内容重量：悬停一行字（Tooltip）< 点击富内容（Popover）< 一句话决策（Popconfirm）。

## 数据模型（src/data/feedback.ts）

- `FeedbackPattern` 字段与 `LayoutPattern` 同构（id / name / en / heat / tagline / desc / tags / aliases / prompt / status / notes），`group` 为五组枚举，复用 `LayoutHeat`、`LayoutStatus`、`LayoutPatternNotes` 类型。
- 组名英文显示走 `src/i18n.ts` 的 `groupEn` 映射。
- 路由命名空间：`/feedback/:id`；主页类别切换为「视觉风格 / 布局模式 / 反馈」三标签。

## 详情页

- 复用布局模式的详情页组件 `src/pages/PatternDetail.tsx`（按 `kind` 区分集合与路由前缀）：画框、预览宽度三档、要点区、提示词卡片与搭配区结构一致。
- 上 / 下一个模式导航仅在同类集合有多于一个词条时出现。
- 演示组件位于 `src/components/feedback/`；演示样式在 `src/styles/feedback.css`，沿用 `layouts.css` 的 `--lp-*` 变量体系，状态色（警告 / 错误 / 成功）另设 `--fb-*` 变量并含暗色变体。
- 演示全部可交互：横幅可关闭 / 重试，toast 自动消失（进度条倒计时），通知面板可模拟新消息与全部已读，抽屉 / 底部抽屉 / 气泡均带完整关闭路径，进度条模拟上传，骨架屏自动循环加载 → 内容，空状态可在「空 ↔ 有数据」间切换。

## 词条

| 词条 | 英文 | 热度 | 一句话 |
| --- | --- | --- | --- |
| 警告提示 | Alert | 热门 | 页面顶部常驻横条，黄条提醒、红条报错，不处理就一直在 |
| 轻提示 | Toast | 热门 | 右下角冒泡「保存成功」，几秒自动消失，不打断操作 |
| 通知 | Notification | 常见 | 铃铛里的收件箱攒着系统消息，未读红点提示，有空再看 |
| 弹窗 | Modal Dialog | 热门 | 遮罩压暗页面，居中对话框承载必须立即处理的任务 |
| 抽屉 | Drawer | 热门 | 从屏幕边缘滑出的面板，背后内容仍可见 |
| 底部抽屉 | Bottom Sheet | 常见 | 从屏幕底部升起的面板，把操作放进拇指热区 |
| 气泡确认框 | Popconfirm | 常见 | 按钮旁冒出的小气泡「确认删除？取消 / 确定」 |
| 气泡卡片 | Popover | 常见 | 点击触发的浮出详情卡片，可承载富内容 |
| 文字提示 | Tooltip | 热门 | 悬停出现的一行小字说明，移开即消失 |
| 进度条 | Progress | 常见 | 0%→100% 的可视化等待，给用户心理预期 |
| 骨架屏 | Skeleton | 热门 | 灰色占位轮廓先剧透布局，数据到达原位填充 |
| 旋转加载 | Spinner | 热门 | 转圈 +「正在保存」，只承诺没死、不承诺时间 |
| 结果页 | Result | 常见 | 大事完成后的整页结果反馈 + 下一步按钮 |
| 空状态 | Empty State | 常见 | 无数据时的占位反馈：插图 + 说明 + 引导按钮 |
