import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '杂志编辑布局演示',
    featureTag: '头条 头条',
    featureTitle: '版面即立场：头条如何定义一家媒体的品味',
    featureText: '头条不是最大的那条内容，而是编辑部的态度声明。占据整个视觉重心的它，决定了读者对这个刊物的第一判断。',
    sideTag: '侧栏 侧栏',
    sideItems: [
      { title: '短期记忆只有七格', text: '为什么列表都推荐七个以内。' },
      { title: '栅格的第三次复兴', text: '从瑞士平面到 CSS Grid。' },
      { title: '留白的重量', text: '负空间也是内容。' },
    ],
    colATag: '专栏 A',
    colAText: '多栏文字在宽屏上曾经是奢侈品，如今被 CSS columns 轻松带回。栏间的一条细线就能撑起整个版面的秩序感。',
    colBTag: '专栏 B',
    colBText: '杂志布局的精髓不在「多栏」，而在层级：头条、次条、简讯各安其位。破坏这个层级，再漂亮的栅格也只是网格纸。',
    stripTag: '简讯带 跨栏',
    stripText: '三条一句话简讯横贯底部：永远比头条轻，但一条都不能少。',
  },
  en: {
    aria: 'Magazine layout demo',
    featureTag: 'feature headline',
    featureTitle: 'The layout is the stance: how the headline defines a publication’s taste',
    featureText: 'The headline is not the biggest piece of content — it is the editorial statement. Occupying the full visual center, it decides the reader’s first judgment of the publication.',
    sideTag: 'sidebar',
    sideItems: [
      { title: 'Short-term memory holds seven', text: 'Why lists top out at seven items.' },
      { title: 'The grid’s third revival', text: 'From Swiss print to CSS Grid.' },
      { title: 'The weight of whitespace', text: 'Negative space is content too.' },
    ],
    colATag: 'column A',
    colAText: 'Multi-column text was once a luxury on wide screens; CSS columns brought it back effortlessly. A single hairline between columns holds up the order of the whole page.',
    colBTag: 'column B',
    colBText: 'The essence of the magazine layout is not “many columns” but hierarchy: headline, secondary, briefs — each in its place. Break that hierarchy and the prettiest grid is just graph paper.',
    stripTag: 'briefs strip · cross-column',
    stripText: 'Three one-line briefs span the bottom: always lighter than the headline, yet not one can be dropped.',
  },
}

export default function MagazineDemo() {
  const t = L[useLocale()]
  return (
    <div className="mgz" aria-label={t.aria}>
      <div className="mgz-feature mgz-block">
        <span className="region-tag">{t.featureTag}</span>
        <h4>{t.featureTitle}</h4>
        <p>{t.featureText}</p>
      </div>
      <div className="mgz-side mgz-block">
        <span className="region-tag">{t.sideTag}</span>
        {t.sideItems.map((item) => (
          <div className="mgz-side-item" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mgz-col mgz-block">
        <span className="region-tag">{t.colATag}</span>
        <p>{t.colAText}</p>
      </div>
      <div className="mgz-col mgz-block">
        <span className="region-tag">{t.colBTag}</span>
        <p>{t.colBText}</p>
      </div>
      <div className="mgz-strip mgz-block">
        <span className="region-tag">{t.stripTag}</span>
        <p>{t.stripText}</p>
      </div>
    </div>
  )
}
