import { useEffect, useState } from 'react'
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  ConfigProvider,
  Divider,
  Input,
  Progress,
  Segmented,
  Slider,
  Space,
  Spin,
  Statistic,
  Switch,
  Tag,
  theme as antdTheme,
  Timeline,
  Typography,
} from 'antd'
import { HeartOutlined, SearchOutlined } from '@ant-design/icons'
import { useLocale } from '../i18n'

const L = {
  zh: {
    primaries: { '#1677ff': '拂晓蓝', '#00b96b': '极客绿', '#fa8c16': '日落橙' } as Record<string, string>,
    tokensTitle: '设计令牌 / DESIGN TOKENS',
    darkAlgo: '暗色算法',
    tokenNote: (name: string, dark: boolean) =>
      `antd 的设计令牌系统：切换品牌色或暗色算法，下方全部组件即时重映射（当前：${name} · ${dark ? '暗色算法' : '默认算法'}）。`,
    buttonsTitle: '按钮 / BUTTONS',
    primary: '主要按钮',
    secondary: '次要按钮',
    dashed: '虚线按钮',
    textBtn: '文字按钮',
    link: '链接按钮',
    disabled: '禁用',
    like: '喜欢',
    typeTitle: '文字层级 / TYPE',
    display: '设计的温度',
    h2: '小标题：层级与节奏',
    body: '{t.body}',
    captionNote: '辅助说明文字',
    formsTitle: '表单控件 / FORMS',
    searchPh: '搜索组件',
    darkFollow: '深色模式跟随系统',
    remember: '记住我的选择',
    volume: '音量',
    cardTitle: '标本 No.10',
    cardText: '{t.cardText}',
    view: '查看详情',
    fav: '收藏',
    tagsTitle: '徽章与标签 / TAGS',
    tagDefault: '默认标签',
    tagProcessing: '进行中',
    tagCheckable: '可选中标签',
    tagClosable: '可移除标签',
    feedbackTitle: '进度与反馈 / FEEDBACK',
    loadingKit: '正在加载组件…',
    banner: '操作已成功保存，所有更改即时生效。',
    sigTitle: '风格签名 / SIGNATURE · 企业级数据片段',
    visitors: '本周访客',
    tl1: 'v5.0 —— 设计令牌上线',
    tl2: '动态主题算法',
    tl3: 'CSS Variables 支持',
  },
  en: {
    primaries: { '#1677ff': 'Daybreak blue', '#00b96b': 'Geek green', '#fa8c16': 'Sunset orange' } as Record<string, string>,
    tokensTitle: 'DESIGN TOKENS',
    darkAlgo: 'Dark algorithm',
    tokenNote: (name: string, dark: boolean) =>
      `The antd token system: switch the brand color or dark algorithm and every component below remaps instantly (now: ${name} · ${dark ? 'dark algorithm' : 'default algorithm'}).`,
    buttonsTitle: 'BUTTONS',
    primary: 'Primary',
    secondary: 'Secondary',
    dashed: 'Dashed',
    textBtn: 'Text',
    link: 'Link',
    disabled: 'Disabled',
    like: 'Like',
    typeTitle: 'TYPE',
    display: 'The warmth of design',
    h2: 'Subtitle: hierarchy and rhythm',
    body: 'A good interface balances content and decoration: information first, texture in service of readability, and style for temperament.',
    captionNote: 'secondary notes',
    formsTitle: 'FORMS',
    searchPh: 'Search components',
    darkFollow: 'Dark mode follows system',
    remember: 'Remember my choice',
    volume: 'Volume',
    cardTitle: 'Specimen No.10',
    cardText: 'The card is the most common container: cover, title, description and a set of actions forming a complete information unit.',
    view: 'View details',
    fav: 'Save',
    tagsTitle: 'TAGS',
    tagDefault: 'Default tag',
    tagProcessing: 'Processing',
    tagCheckable: 'Checkable tag',
    tagClosable: 'Closable tag',
    feedbackTitle: 'FEEDBACK',
    loadingKit: 'Loading components…',
    banner: 'Saved successfully — every change takes effect immediately.',
    sigTitle: 'SIGNATURE · enterprise data snippet',
    visitors: 'Visitors this week',
    tl1: 'v5.0 — design tokens shipped',
    tl2: 'Dynamic theme algorithm',
    tl3: 'CSS variables support',
  },
}

const primaries = [
  { label: '拂晓蓝', value: '#1677ff' },
  { label: '极客绿', value: '#00b96b' },
  { label: '日落橙', value: '#fa8c16' },
]


export default function AntDemoKit() {
  const t = L[useLocale()]
  const [primary, setPrimary] = useState('#1677ff')
  const [dark, setDark] = useState(() =>
    typeof document === 'undefined' ? false : document.documentElement.dataset.theme === 'dark',
  )
  const [checkable, setCheckable] = useState(true)

  // 跟随头部按钮的全局明暗状态
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.dataset.theme === 'dark')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  // 暗色算法只作用于 antd 组件，页面底色与强调色变量在这里同步
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.detail')
    if (!root) return
    if (dark) root.classList.add('antd-dark')
    root.style.setProperty('--ant-color-primary', primary)
    return () => {
      root.classList.remove('antd-dark')
      root.style.removeProperty('--ant-color-primary')
    }
  }, [dark, primary])

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: primary, borderRadius: 6 },
        algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      <div className="demo-kit">
        <section className="demo-block demo-block-wide">
          <h3 className="demo-title">设计令牌 / DESIGN TOKENS</h3>
          <div className="antd-controls">
            <Segmented
              value={primary}
              onChange={(v) => setPrimary(v as string)}
              options={primaries.map((p) => ({ label: t.primaries[p.value], value: p.value }))}
            />
            <span className="antd-gap" />
            <span className="ctl-label">{t.darkAlgo}</span>
            <Switch checked={dark} onChange={setDark} />
          </div>
          <Typography.Text type="secondary">
            {t.tokenNote(t.primaries[primary], dark)}
          </Typography.Text>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">{t.buttonsTitle}</h3>
          <Space wrap size="small">
            <Button type="primary">{t.primary}</Button>
            <Button>{t.secondary}</Button>
            <Button type="dashed">{t.dashed}</Button>
            <Button type="text">{t.textBtn}</Button>
            <Button type="link">{t.link}</Button>
            <Button disabled>{t.disabled}</Button>
            <Button shape="circle" icon={<HeartOutlined />} aria-label={t.like} />
          </Space>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">{t.typeTitle}</h3>
          <div className="demo-col">
            <Typography.Title level={3} style={{ margin: 0 }}>
              {t.display}
            </Typography.Title>
            <Divider style={{ margin: 0 }} />
            <Typography.Title level={5} style={{ margin: 0 }}>
              {t.h2}
            </Typography.Title>
            <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
              {t.body}
            </Typography.Paragraph>
            <Typography.Text type="secondary">
              <Typography.Text keyboard>CAPTION</Typography.Text> · {t.captionNote}
            </Typography.Text>
          </div>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">{t.formsTitle}</h3>
          <div className="demo-col">
            <div className="antd-fields">
              <Input placeholder={t.searchPh} prefix={<SearchOutlined />} allowClear />
              <Input placeholder="you@example.com" />
            </div>
            <div className="demo-row between">
              <span className="ctl-label">{t.darkFollow}</span>
              <Switch defaultChecked />
            </div>
            <div className="demo-row">
              <Checkbox defaultChecked />
              <span className="ctl-label">{t.remember}</span>
            </div>
            <Slider defaultValue={62} aria-label={t.volume} />
          </div>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">卡片 / CARD</h3>
          <Card hoverable style={{ maxWidth: 420 }} cover={<div className="antd-card-cover" />}>
            <div className="card-titlerow">
              <Typography.Title level={5} style={{ margin: 0 }}>
                {t.cardTitle}
              </Typography.Title>
              <Tag color="error">NEW</Tag>
            </div>
            <Typography.Paragraph type="secondary" style={{ marginBottom: '.6rem' }}>
              {t.cardText}
            </Typography.Paragraph>
            <Space size="small">
              <Button type="primary" size="small">
                {t.view}
              </Button>
              <Button size="small">{t.fav}</Button>
            </Space>
          </Card>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">{t.tagsTitle}</h3>
          <Space wrap size="small">
            <Tag>{t.tagDefault}</Tag>
            <Tag color="processing">{t.tagProcessing}</Tag>
            <Tag.CheckableTag checked={checkable} onChange={(v) => setCheckable(v)}>
              {t.tagCheckable}
            </Tag.CheckableTag>
            <Tag closable>{t.tagClosable}</Tag>
            <Badge count={99} size="small">
              <Avatar shape="square" size={24} />
            </Badge>
          </Space>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">{t.feedbackTitle}</h3>
          <div className="demo-col">
            <Progress percent={62} />
            <div className="demo-row">
              <Spin />
              <Typography.Text type="secondary">{t.loadingKit}</Typography.Text>
            </div>
            <Alert message={t.banner} type="success" showIcon />
          </div>
        </section>

        <section className="demo-block demo-block-wide">
          <h3 className="demo-title">{t.sigTitle}</h3>
          <div className="antd-sig">
            <Card size="small">
              <Statistic title={t.visitors} value={12480} />
            </Card>
            <Card size="small">
              <Progress type="dashboard" percent={62} />
            </Card>
            <Card size="small">
              <Timeline
                style={{ margin: 0, fontSize: '.85rem' }}
                items={[
                  { children: t.tl1 },
                  { children: t.tl2 },
                  { children: t.tl3 },
                ]}
              />
            </Card>
          </div>
        </section>
      </div>
    </ConfigProvider>
  )
}
