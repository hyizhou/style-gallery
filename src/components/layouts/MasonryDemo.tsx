import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '瀑布流演示',
    tag: 'masonry 墙面 · 顺序纵向切分',
    items: [
      { id: 1, title: '山谷晨雾', h: 120, text: '清晨的光穿过雾气，山脊线一层层淡下去。' },
      { id: 2, title: '城市折叠', h: 86, text: '高楼与旧巷在同一张底片上互相渗透。' },
      { id: 3, title: '手作陶器', h: 140, text: '拉坯的瞬间，泥土还记得手指的路径。' },
      { id: 4, title: '夜航', h: 96, text: '舷窗外的城市像一块通电的电路板。' },
      { id: 5, title: '旧书店', h: 150, text: '纸页的味道比标题更容易让人决定买下它。' },
      { id: 6, title: '海边大风', h: 78, text: '风把云吹成了长条，也把帽子吹进了海里。' },
      { id: 7, title: '窗台植物', h: 132, text: '绿萝第无数次越过花盆边界，试图出逃。' },
      { id: 8, title: '深夜食堂', h: 92, text: '一碗热汤面前的沉默，比任何寒暄都诚实。' },
    ],
  },
  en: {
    aria: 'Masonry demo',
    tag: 'masonry wall · order splits by column',
    items: [
      { id: 1, title: 'Valley fog', h: 120, text: 'Morning light threads the mist; ridgelines fade in layers.' },
      { id: 2, title: 'City fold', h: 86, text: 'Towers and old alleys seep into the same negative.' },
      { id: 3, title: 'Handmade pottery', h: 140, text: 'On the wheel, the clay still remembers your fingers.' },
      { id: 4, title: 'Night flight', h: 96, text: 'The city outside the window glows like a powered circuit board.' },
      { id: 5, title: 'Old bookshop', h: 150, text: 'The smell of paper sells a book faster than its title.' },
      { id: 6, title: 'Sea wind', h: 78, text: 'The wind stretched the clouds into strips — and took my hat to sea.' },
      { id: 7, title: 'Windowsill plant', h: 132, text: 'The pothos crosses the pot rim for the umpteenth escape attempt.' },
      { id: 8, title: 'Late-night diner', h: 92, text: 'Silence before a hot soup is more honest than any small talk.' },
    ],
  },
}

export default function MasonryDemo() {
  const t = L[useLocale()]
  return (
    <div className="msy" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="msy-cols">
        {t.items.map((it) => (
          <div className="msy-item" key={it.id} style={{ minHeight: it.h / 2 + 60 }}>
            <div className="msy-pic" style={{ height: it.h / 2 }} />
            <strong>{it.title}</strong>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
