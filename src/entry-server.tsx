import { Writable } from 'node:stream'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { pages, SITE_URL } from './data/seo'

export { pages, SITE_URL }

// 预渲染：把指定路由渲染为完整 HTML 字符串。
// 用 onAllReady 等待全部 Suspense 边界（含 m3/antd 的 lazy 组件）解析后再输出，
// 静态 HTML 中即为完整内容而非加载占位。
export function renderPage(path: string, timeoutMs = 30000): Promise<string> {
  return new Promise((resolve, reject) => {
    let settled = false
    let html = ''
    const settle = (fn: (v: never) => void, arg: unknown) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      fn(arg as never)
    }
    const timer = setTimeout(() => settle(reject, new Error('prerender timeout')), timeoutMs)
    const stream = renderToPipeableStream(
      <StaticRouter location={path}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          stream.pipe(
            new Writable({
              write(chunk, _enc, cb) {
                html += chunk
                cb()
              },
              final(cb) {
                settle(resolve, html)
                cb()
              },
            }),
          )
        },
        onError(err) {
          settle(reject, err instanceof Error ? err : new Error(String(err)))
        },
      },
    )
  })
}
