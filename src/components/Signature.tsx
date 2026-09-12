import { useLocale } from '../i18n'

const L = {
  zh: {
    minimalBig: '留白，是设计的一部分。',
    glassSub: '艺术空间 · 线上展厅',
    glassBook: '预约参观',
    glassDetail: '详情',
    skeuoSub: '皮革手账 · EST. 1908',
    skeuoTitle: '把屏幕做成一件实物',
    skeuoNote: '皮革、缝线、压印与黄铜扣——拟物风格用真实材质唤起操作的直觉。',
    brutalP: '海报、传单、标语——粗野主义拒绝害羞。',
    auroraTitle: '呼吸灯光',
    auroraSub: '北纬 66° 的绿色极光',
    auroraBtn: '开始观测',
    bentoVisitors: '本周访客',
    bentoActivity: '活跃度',
    bentoAvatar: '样',
    bentoUser: '样本君',
    bentoOnline: '在线',
    bentoAuto: '自动模式',
    bentoCity: '杭州',
    bentoWeather: '晴 · 微风',
    pixelDialog: '你好，旅行者！这颗星球的设计全部由方形像素组成。',
    swissDisplay: '标题 Display 60',
    swissHeadline: '标题 Headline 36',
    swissBody: '正文 Body 20 —— 网格与秩序',
    swissCaption: '说明 Caption 12 · GRID SYSTEM',
    swissNote: 'GRID · TYPE · ORDER —— 国际主义排版',
    y2kSub: '永远的千禧年',
    y2kBubble: '非常新',
  },
  en: {
    minimalBig: 'Whitespace is part of the design.',
    glassSub: 'Art space · online exhibit',
    glassBook: 'Book a visit',
    glassDetail: 'Details',
    skeuoSub: 'Leather journal · EST. 1908',
    skeuoTitle: 'Turn the screen into an object',
    skeuoNote: 'Leather, stitching, embossing and a brass clasp — skeuomorphism summons operating intuition from real materials.',
    brutalP: 'Posters, flyers, slogans — brutalism refuses to be shy.',
    auroraTitle: 'Breathing light',
    auroraSub: 'Green aurora at 66° N',
    auroraBtn: 'Start observing',
    bentoVisitors: 'Visitors this week',
    bentoActivity: 'Activity',
    bentoAvatar: 'S',
    bentoUser: 'Specimen',
    bentoOnline: 'online',
    bentoAuto: 'Auto mode',
    bentoCity: 'Hangzhou',
    bentoWeather: 'Sunny · breeze',
    pixelDialog: 'Hello, traveler! Every pixel on this planet is square.',
    swissDisplay: 'Display 60',
    swissHeadline: 'Headline 36',
    swissBody: 'Body 20 — grid & order',
    swissCaption: 'Caption 12 · GRID SYSTEM',
    swissNote: 'GRID · TYPE · ORDER — International Typographic Style',
    y2kSub: 'Millennium forever',
    y2kBubble: 'So new',
  },
}

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
  const t = L[useLocale()]
  switch (styleId) {
    case 'minimal':
      return (
        <div className="sig-minimal">
          <p className="sig-big">{t.minimalBig}</p>
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
              <span>{t.glassSub}</span>
            </span>
            <span className="sig-actions">
              <span className="btn btn-primary">{t.glassBook}</span>
              <span className="btn">{t.glassDetail}</span>
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
            <span className="sk-emboss-sub">{t.skeuoSub}</span>
            <span className="sk-ribbon" />
            <span className="sk-clasp" />
          </div>
          <div className="skeuo-sig-note">
            <strong>{t.skeuoTitle}</strong>
            <span>{t.skeuoNote}</span>
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
            <p>{t.brutalP}</p>
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
              <strong>{t.auroraTitle}</strong>
              <span>{t.auroraSub}</span>
            </span>
            <span className="btn btn-primary">{t.auroraBtn}</span>
          </div>
        </div>
      )
    case 'bento':
      return (
        <div className="sig-bento">
          <div className="btile t-stat">
            <span>{t.bentoVisitors}</span>
            <strong>12,480</strong>
            <em>+18.2%</em>
          </div>
          <div className="btile t-chart">
            <span>{t.bentoActivity}</span>
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
            <span className="avatar">{t.bentoAvatar}</span>
            <span>{t.bentoUser}</span>
            <em>{t.bentoOnline}</em>
          </div>
          <div className="btile t-toggle">
            <span>{t.bentoAuto}</span>
            <span className="bt-switch on">
              <i />
            </span>
          </div>
          <div className="btile t-weather">
            <span>{t.bentoCity}</span>
            <strong>23°</strong>
            <em>{t.bentoWeather}</em>
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
              {t.pixelDialog}
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
                <strong>{t.swissDisplay}</strong>
              </div>
              <div className="swiss-row">
                <span>36</span>
                <strong>{t.swissHeadline}</strong>
              </div>
              <div className="swiss-row">
                <span>20</span>
                <strong>{t.swissBody}</strong>
              </div>
              <div className="swiss-row">
                <span>12</span>
                <strong>{t.swissCaption}</strong>
              </div>
            </div>
          </div>
          <p className="swiss-note">{t.swissNote}</p>
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
                {t.y2kSub}
              </p>
              <div className="y2k-bubbles">
                <span className="y2k-bubble pink">SO COOL</span>
                <span className="y2k-bubble cyan">{t.y2kBubble}</span>
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
