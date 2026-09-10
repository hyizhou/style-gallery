const items = [
  { id: 1, title: '山谷晨雾', h: 120, text: '清晨的光穿过雾气，山脊线一层层淡下去。' },
  { id: 2, title: '城市折叠', h: 86, text: '高楼与旧巷在同一张底片上互相渗透。' },
  { id: 3, title: '手作陶器', h: 140, text: '拉坯的瞬间，泥土还记得手指的路径。' },
  { id: 4, title: '夜航', h: 96, text: '舷窗外的城市像一块通电的电路板。' },
  { id: 5, title: '旧书店', h: 150, text: '纸页的味道比标题更容易让人决定买下它。' },
  { id: 6, title: '海边大风', h: 78, text: '风把云吹成了长条，也把帽子吹进了海里。' },
  { id: 7, title: '窗台植物', h: 132, text: '绿萝第无数次越过花盆边界，试图出逃。' },
  { id: 8, title: '深夜食堂', h: 92, text: '一碗热汤面前的沉默，比任何寒暄都诚实。' },
]

export default function MasonryDemo() {
  return (
    <div className="msy" aria-label="瀑布流演示">
      <span className="region-tag">masonry 墙面 · 顺序纵向切分</span>
      <div className="msy-cols">
        {items.map((it) => (
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
