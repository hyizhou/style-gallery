export default function SplitScreenDemo() {
  return (
    <div className="sp" aria-label="分屏布局演示">
      <div className="sp-visual">
        <span className="region-tag">visual 视觉侧</span>
        <span className="sp-visual-glyph">✦</span>
      </div>
      <div className="sp-info">
        <span className="region-tag">info 信息侧</span>
        <h4>一半视觉，一半主张</h4>
        <p>
          分屏的两半天然形成对照：左半负责「记住我」，右半负责「选我」。
          两侧重量要均衡，主行动按钮只保留一个。
        </p>
        <div className="sp-actions">
          <span className="sp-btn sp-btn-primary">立即开始</span>
          <span className="sp-btn">了解更多</span>
        </div>
      </div>
    </div>
  )
}
