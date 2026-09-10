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

const primaries = [
  { label: '拂晓蓝', value: '#1677ff' },
  { label: '极客绿', value: '#00b96b' },
  { label: '日落橙', value: '#fa8c16' },
]

const primaryName = (value: string) => primaries.find((p) => p.value === value)?.label ?? ''

export default function AntDemoKit() {
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
              options={primaries.map((p) => ({ label: p.label, value: p.value }))}
            />
            <span className="antd-gap" />
            <span className="ctl-label">暗色算法</span>
            <Switch checked={dark} onChange={setDark} />
          </div>
          <Typography.Text type="secondary">
            antd 的设计令牌系统：切换品牌色或暗色算法，下方全部组件即时重映射（当前：{primaryName(primary)} ·{' '}
            {dark ? '暗色算法' : '默认算法'}）。
          </Typography.Text>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">按钮 / BUTTONS</h3>
          <Space wrap size="small">
            <Button type="primary">主要按钮</Button>
            <Button>次要按钮</Button>
            <Button type="dashed">虚线按钮</Button>
            <Button type="text">文字按钮</Button>
            <Button type="link">链接按钮</Button>
            <Button disabled>禁用</Button>
            <Button shape="circle" icon={<HeartOutlined />} aria-label="喜欢" />
          </Space>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">文字层级 / TYPE</h3>
          <div className="demo-col">
            <Typography.Title level={3} style={{ margin: 0 }}>
              设计的温度
            </Typography.Title>
            <Divider style={{ margin: 0 }} />
            <Typography.Title level={5} style={{ margin: 0 }}>
              小标题：层级与节奏
            </Typography.Title>
            <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
              好的界面在内容与装饰之间取得平衡：信息优先，质感服务于可读性，风格则负责气质。
            </Typography.Paragraph>
            <Typography.Text type="secondary">
              <Typography.Text keyboard>CAPTION</Typography.Text> · 辅助说明文字
            </Typography.Text>
          </div>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">表单控件 / FORMS</h3>
          <div className="demo-col">
            <div className="antd-fields">
              <Input placeholder="搜索组件" prefix={<SearchOutlined />} allowClear />
              <Input placeholder="you@example.com" />
            </div>
            <div className="demo-row between">
              <span className="ctl-label">深色模式跟随系统</span>
              <Switch defaultChecked />
            </div>
            <div className="demo-row">
              <Checkbox defaultChecked />
              <span className="ctl-label">记住我的选择</span>
            </div>
            <Slider defaultValue={62} aria-label="音量" />
          </div>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">卡片 / CARD</h3>
          <Card hoverable style={{ maxWidth: 420 }} cover={<div className="antd-card-cover" />}>
            <div className="card-titlerow">
              <Typography.Title level={5} style={{ margin: 0 }}>
                标本 No.10
              </Typography.Title>
              <Tag color="error">NEW</Tag>
            </div>
            <Typography.Paragraph type="secondary" style={{ marginBottom: '.6rem' }}>
              卡片是最常见的容器组件：封面、标题、描述与一组动作，构成完整的信息单元。
            </Typography.Paragraph>
            <Space size="small">
              <Button type="primary" size="small">
                查看详情
              </Button>
              <Button size="small">收藏</Button>
            </Space>
          </Card>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">徽章与标签 / TAGS</h3>
          <Space wrap size="small">
            <Tag>默认标签</Tag>
            <Tag color="processing">进行中</Tag>
            <Tag.CheckableTag checked={checkable} onChange={(v) => setCheckable(v)}>
              可选中标签
            </Tag.CheckableTag>
            <Tag closable>可移除标签</Tag>
            <Badge count={99} size="small">
              <Avatar shape="square" size={24} />
            </Badge>
          </Space>
        </section>

        <section className="demo-block">
          <h3 className="demo-title">进度与反馈 / FEEDBACK</h3>
          <div className="demo-col">
            <Progress percent={62} />
            <div className="demo-row">
              <Spin />
              <Typography.Text type="secondary">正在加载组件…</Typography.Text>
            </div>
            <Alert message="操作已成功保存，所有更改即时生效。" type="success" showIcon />
          </div>
        </section>

        <section className="demo-block demo-block-wide">
          <h3 className="demo-title">风格签名 / SIGNATURE · 企业级数据片段</h3>
          <div className="antd-sig">
            <Card size="small">
              <Statistic title="本周访客" value={12480} />
            </Card>
            <Card size="small">
              <Progress type="dashboard" percent={62} />
            </Card>
            <Card size="small">
              <Timeline
                style={{ margin: 0, fontSize: '.85rem' }}
                items={[
                  { children: 'v5.0 —— 设计令牌上线' },
                  { children: '动态主题算法' },
                  { children: 'CSS Variables 支持' },
                ]}
              />
            </Card>
          </div>
        </section>
      </div>
    </ConfigProvider>
  )
}
