function PixelHeart({ color = '#f4756b', px = 7 }: { color?: string; px?: number }) {
  const rows = ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...']
  return (
    <span className="px-art" style={{ width: 7 * px, height: rows.length * px }} aria-hidden="true">
      {rows.flatMap((row, r) =>
        [...row].map((c, col) =>
          c === 'X' ? (
            <i
              key={`${r}-${col}`}
              style={{ left: col * px, top: r * px, width: px, height: px, background: color }}
            />
          ) : null,
        ),
      )}
    </span>
  )
}

export default function Signature({ styleId }: { styleId: string }) {
  switch (styleId) {
    case 'minimal':
      return (
        <div className="sig-minimal">
          <p className="sig-big">留白，是设计的一部分。</p>
          <span className="sig-rule" />
          <p className="sig-note">WHEN IN DOUBT, REMOVE.</p>
        </div>
      )
    case 'glass':
      return (
        <div className="sig-glass-stage">
          <span className="sig-blob b1" />
          <span className="sig-blob b2" />
          <span className="sig-blob b3" />
          <div className="sig-glass-panel">
            <span className="sig-avatar">N</span>
            <span className="sig-id">
              <strong>Neon Cafe</strong>
              <span>艺术空间 · 线上展厅</span>
            </span>
            <span className="sig-actions">
              <span className="btn btn-primary">预约参观</span>
              <span className="btn">详情</span>
            </span>
          </div>
        </div>
      )
    case 'skeuo':
      return (
        <div className="sig-skeuo">
          <div className="skeuo-journal" aria-hidden="true">
            <span className="sk-spine" />
            <span className="sk-pages" />
            <span className="sk-emboss-title">FIELD NOTES</span>
            <span className="sk-emboss-sub">皮革手账 · EST. 1908</span>
            <span className="sk-ribbon" />
            <span className="sk-clasp" />
          </div>
          <div className="skeuo-sig-note">
            <strong>把屏幕做成一件实物</strong>
            <span>皮革、缝线、压印与黄铜扣——拟物风格用真实材质唤起操作的直觉。</span>
          </div>
        </div>
      )
    case 'neu':
      return (
        <div className="sig-neu">
          <span className="sig-neu-screen">ON AIR</span>
          <span className="sig-neu-pads">
            <span className="pad" />
            <span className="pad active" />
            <span className="pad" />
          </span>
        </div>
      )
    case 'clay':
      return (
        <div className="sig-clay-scene">
          <span className="clay-cloud">
            <span className="eye l" />
            <span className="eye r" />
            <span className="mouth" />
            <span className="cheek l" />
            <span className="cheek r" />
          </span>
          <span className="clay-sun" />
        </div>
      )
    case 'brutal':
      return (
        <div className="sig-brutal">
          <div className="brutal-poster">
            <h4>
              DESIGN
              <br />
              LOUDER
            </h4>
            <p>海报、传单、标语——粗野主义拒绝害羞。</p>
            <span className="sticker s1">NEW!</span>
            <span className="sticker s2">-50%</span>
            <span className="sticker s3">HOT</span>
          </div>
        </div>
      )
    case 'aurora':
      return (
        <div className="sig-aurora-stage">
          <span className="orb o1" />
          <span className="orb o2" />
          <p className="sig-aurora-text">AURORA</p>
          <div className="sig-aurora-card">
            <span className="sig-id">
              <strong>呼吸灯光</strong>
              <span>北纬 66° 的绿色极光</span>
            </span>
            <span className="btn btn-primary">开始观测</span>
          </div>
        </div>
      )
    case 'bento':
      return (
        <div className="sig-bento">
          <div className="btile t-stat">
            <span>本周访客</span>
            <strong>12,480</strong>
            <em>+18.2%</em>
          </div>
          <div className="btile t-chart">
            <span>活跃度</span>
            <div className="bars">
              <i style={{ height: '40%' }} />
              <i style={{ height: '70%' }} />
              <i style={{ height: '52%' }} />
              <i style={{ height: '86%' }} />
              <i style={{ height: '64%' }} />
              <i style={{ height: '95%' }} />
            </div>
          </div>
          <div className="btile t-user">
            <span className="avatar">样</span>
            <span>样本君</span>
            <em>在线</em>
          </div>
          <div className="btile t-toggle">
            <span>自动模式</span>
            <span className="bt-switch on">
              <i />
            </span>
          </div>
          <div className="btile t-weather">
            <span>杭州</span>
            <strong>23°</strong>
            <em>晴 · 微风</em>
          </div>
        </div>
      )
    case 'pixel':
      return (
        <div className="sig-pixel">
          <div className="px-panel">
            <div className="px-hearts">
              <PixelHeart />
              <PixelHeart />
              <PixelHeart color="#566c86" />
            </div>
            <div className="px-hp">
              <i style={{ width: '72%' }} />
            </div>
            <p className="px-dialog">
              你好，旅行者！这颗星球的设计全部由方形像素组成。
              <span className="px-cursor" />
            </p>
            <span className="btn btn-primary px-start">START</span>
          </div>
        </div>
      )
    case 'swiss':
      return (
        <div className="sig-swiss">
          <div className="swiss-specimen">
            <span className="swiss-aa">Aa</span>
            <div className="swiss-scale">
              <div className="swiss-row">
                <span>60</span>
                <strong>标题 Display 60</strong>
              </div>
              <div className="swiss-row">
                <span>36</span>
                <strong>标题 Headline 36</strong>
              </div>
              <div className="swiss-row">
                <span>20</span>
                <strong>正文 Body 20 —— 网格与秩序</strong>
              </div>
              <div className="swiss-row">
                <span>12</span>
                <strong>说明 Caption 12 · GRID SYSTEM</strong>
              </div>
            </div>
          </div>
          <p className="swiss-note">GRID · TYPE · ORDER —— 国际主义排版</p>
        </div>
      )
    case 'crt':
      return (
        <div className="sig-crt">
          <div className="crt-session">
            <div className="crt-session-bar">SESSION.LOG —— tty01</div>
            <pre className="crt-log">
              {`$ specimen --boot --mode=crt
[ OK ] phosphor matrix initialized
[ OK ] scanline driver 60Hz
[ OK ] font: terminal-12x18
user@specimen:~$ load gallery --all
loading components ▓▓▓▓▓▓▓▓░░░░ 62% ... done
user@specimen:~$ `}
              <span className="crt-cursor">▮</span>
            </pre>
          </div>
        </div>
      )
    case 'y2k':
      return (
        <div className="sig-y2k">
          <div className="y2k-window">
            <div className="y2k-titlebar">
              <span className="y2k-dots">
                <i />
                <i />
                <i />
              </span>
              y2k_forever.exe
            </div>
            <div className="y2k-body">
              <p className="y2k-hello">
                ✦ HELLO 2000 ✦
                <br />
                永远的千禧年
              </p>
              <div className="y2k-bubbles">
                <span className="y2k-bubble pink">SO COOL</span>
                <span className="y2k-bubble cyan">非常新</span>
                <span className="y2k-bubble lime">2000%</span>
              </div>
              <div className="y2k-rainbow" />
            </div>
          </div>
          <span className="y2k-sparkle s1">✦</span>
          <span className="y2k-sparkle s2">✦</span>
          <span className="y2k-sparkle s3">✿</span>
        </div>
      )
    default:
      return null
  }
}
