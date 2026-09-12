import { useEffect, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '骨架屏演示',
    tag: 'skeleton 占位轮廓 · 数据到了原位填充',
    skAria: '内容加载中',
    title: '釉里青 · 明代瓷片标本',
    body: '骨架占位与真实内容一一对应：头像圈对头像、标题条对标题，替换在原位发生，布局不跳动。',
    meta: '收录 #A-118 · 1280×960',
    replay: '重看一次',
    hint: '占位形状 = 内容形状，这是骨架屏比转圈高级的地方',
  },
  en: {
    aria: 'Skeleton demo',
    tag: 'skeleton · gray shapes first, content fills in place',
    skAria: 'Loading content',
    title: 'Celadon Glaze · Ming shard specimen',
    body: 'Each placeholder maps to real content — avatar circle to avatar, title bar to title. The swap happens in place, so the layout never jumps.',
    meta: 'Accession #A-118 · 1280×960',
    replay: 'Replay',
    hint: 'Placeholder shape = content shape; that is what beats a spinner',
  },
}

const LOADING_MS = 2200
const CONTENT_MS = 2800

export default function SkeletonDemo() {
  const t = L[useLocale()]
  const [loading, setLoading] = useState(true)
  const [nonce, setNonce] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => setLoading((v) => !v),
      loading ? LOADING_MS : CONTENT_MS,
    )
    return () => clearTimeout(timer)
  }, [loading, nonce])

  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>

      <div className="fb-skel-card" aria-busy={loading}>
        {loading ? (
          <div className="fb-skel" aria-label={t.skAria}>
            <i className="fb-skel-avatar" />
            <div className="fb-skel-rows">
              <i className="fb-skel-line fb-skel-line-title" />
              <i className="fb-skel-line" />
              <i className="fb-skel-line fb-skel-line-short" />
            </div>
            <i className="fb-skel-media" />
          </div>
        ) : (
          <div className="fb-skel-real">
            <i className="fb-avatar fb-avatar-lg" aria-hidden="true">
              青
            </i>
            <div>
              <p className="fb-row-title">{t.title}</p>
              <span className="fb-row-meta">{t.meta}</span>
              <p className="fb-skel-body">{t.body}</p>
            </div>
          </div>
        )}
      </div>

      <div className="fb-actions-row">
        <button type="button" className="fb-ghost-btn" onClick={() => { setLoading(true); setNonce((n) => n + 1) }}>
          {t.replay}
        </button>
        <span className="fb-note">{t.hint}</span>
      </div>
    </div>
  )
}
