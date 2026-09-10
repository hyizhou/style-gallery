export default function BoxedDemo() {
  return (
    <div className="bx" aria-label="盒装布局演示">
      <span className="region-tag">boxed 盒外背景 · 固定 960px 盒宽</span>
      <div className="bx-page">
        <div className="bx-nav">
          <strong>ACME CO.</strong>
          <span>首页 · 产品 · 联系</span>
        </div>
        <div className="bx-hero">盒内的世界</div>
        <div className="bx-cols">
          <p>盒装布局把整页装进一个固定宽度的容器，像一个展示柜。</p>
          <p>盒外的背景是「装裱」，盒内的内容才是展品。</p>
        </div>
      </div>
    </div>
  )
}
