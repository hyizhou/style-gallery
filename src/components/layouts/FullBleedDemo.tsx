export default function FullBleedDemo() {
  return (
    <div className="fb" aria-label="全屏沉浸演示">
      <div className="fb-art" aria-hidden="true">
        <span className="fb-orb" />
        <span className="fb-orb fb-orb-2" />
      </div>
      <div className="fb-content">
        <span className="fb-kicker">CHAPTER 01</span>
        <h4>向下滚动，故事才刚刚开始</h4>
        <p>整屏只做一件事：定下基调。</p>
      </div>
      <span className="fb-arrow" aria-hidden="true">
        ↓
      </span>
      <div className="fb-strip">
        <p>滚动之后揭示的第一段内容……</p>
      </div>
    </div>
  )
}
