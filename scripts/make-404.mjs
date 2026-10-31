// 构建后处理：把预渲染的 index.html 复制为 404.html。
// GitHub Pages 对未知 URL 会以 404 状态返回 404.html，
// 应用水合后 TanStack Router 匹配不到路由，即渲染 __root.tsx 里的 NotFound 组件。
// 资源引用为绝对路径（/assets/...），站点部署在自定义域名根目录，直接可用。
import { copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const src = join(root, 'dist', 'client', 'index.html')
const dest = join(root, 'dist', 'client', '404.html')

copyFileSync(src, dest)

// 404 页面不应被搜索引擎索引
const html = readFileSync(dest, 'utf8')
writeFileSync(dest, html.replace('<head>', '<head>\n    <meta name="robots" content="noindex" />'))

console.log('generated dist/client/404.html (from prerendered index.html, noindex injected)')
