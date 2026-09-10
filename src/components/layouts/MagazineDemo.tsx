export default function MagazineDemo() {
  return (
    <div className="mgz" aria-label="杂志编辑布局演示">
      <div className="mgz-feature mgz-block">
        <span className="region-tag">头条 头条</span>
        <h4>版面即立场：头条如何定义一家媒体的品味</h4>
        <p>
          头条不是最大的那条内容，而是编辑部的态度声明。占据整个视觉重心的它，
          决定了读者对这个刊物的第一判断。
        </p>
      </div>
      <div className="mgz-side mgz-block">
        <span className="region-tag">侧栏 侧栏</span>
        <div className="mgz-side-item">
          <strong>短期记忆只有七格</strong>
          <p>为什么列表都推荐七个以内。</p>
        </div>
        <div className="mgz-side-item">
          <strong>栅格的第三次复兴</strong>
          <p>从瑞士平面到 CSS Grid。</p>
        </div>
        <div className="mgz-side-item">
          <strong>留白的重量</strong>
          <p>负空间也是内容。</p>
        </div>
      </div>
      <div className="mgz-col mgz-block">
        <span className="region-tag">专栏 A</span>
        <p>
          多栏文字在宽屏上曾经是奢侈品，如今被 CSS columns 轻松带回。
          栏间的一条细线就能撑起整个版面的秩序感。
        </p>
      </div>
      <div className="mgz-col mgz-block">
        <span className="region-tag">专栏 B</span>
        <p>
          杂志布局的精髓不在「多栏」，而在层级：头条、次条、简讯各安其位。
          破坏这个层级，再漂亮的栅格也只是网格纸。
        </p>
      </div>
      <div className="mgz-strip mgz-block">
        <span className="region-tag">简讯带 跨栏</span>
        <p>三条一句话简讯横贯底部：永远比头条轻，但一条都不能少。</p>
      </div>
    </div>
  )
}
