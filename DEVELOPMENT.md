# Claude-Mem 中文网站 · 工程说明

本文件只记录网站工程的构建与结构。

网站使用 TanStack Start + React 19 + Bun。

## 技术栈（均为当前最新发行版）

| 包 | 版本 |
| --- | --- |
| @tanstack/react-start | 1.169.4 |
| @tanstack/react-router | 1.170.46 |
| react / react-dom | 19.3.1 |
| vite | 8.3.5 |
| @vitejs/plugin-react | 6.1.2 |
| typescript | 7.0.2 |
| Bun | 1.4.4 |

## 命令

```bash
bun install
bun run dev        # http://localhost:3000
bun run build      # 构建并预渲染全部路由，静态产物在 dist/client/
bun run start      # 本地预览静态产物（vite preview）
bun run typecheck  # tsc --noEmit
```

## 页面

| 路由 | 内容 |
| --- | --- |
| `/` | 首页：记忆档案主视觉、能力清单、记忆链路、纸质安装卡 |
| `/quickstart` | 快速开始：10 个安装目标的命令切换、登录与提供者、系统要求、Windows 说明 |
| `/features` | 核心特性：11 项特性、渐进式披露原理、隐私控制 |
| `/architecture` | 工作原理：6 个核心组件、生命周期钩子、数据流 |
| `/mcp` | MCP 搜索：三层工作流、4 个工具、代码示例 |
| `/config` | 配置：settings.json、CLAUDE_MEM_MODE 模式与语言、上下文注入、Grok Bot 感知推送 |
| `/docs` | 文档索引：官方文档分组链接、故障排查、贡献、许可证、支持渠道 |

## 结构

```
src/
  data/content.ts        # 全部文案与数据，逐条对应 README
  components/Chrome.tsx  # 页头 / 页脚
  components/CodeBlock.tsx
  styles/app.css         # 设计系统（深色，单一 CSS 文件）
  routes/                # 文件式路由
  router.tsx
  routeTree.gen.ts       # 由插件生成
```

内容全部来自本目录的 `README.md`。README 未提供的细节（例如各钩子的具体职责）不编造，改为链接到官方文档。

## 可访问性与 SEO

- 全站 `:focus-visible` 焦点环，鼠标点击不显示，键盘导航必显示
- 顶部 skip link（「跳到主要内容」），首屏第一个 Tab 停靠点
- `prefers-reduced-motion` 下关闭所有过渡与平滑滚动
- 安装目标标签页：完整 ARIA tablist 语义、左右方向键 / Home / End 切换、`aria-controls` 关联面板
- 表格：`<caption>`、`scope` 表头、窄屏横向滚动容器（可聚焦、有名字）
- 装饰性 SVG 图标统一 `aria-hidden`，不参与读屏
- 结构化数据 `SoftwareApplication` JSON-LD、`og:locale`、`twitter:card`
- `og:image` / `twitter:image` 指向 `public/og-image.png`（1200×630，分享卡片配图）
- `public/robots.txt` 与 `public/sitemap.xml`（7 个路由，部署后随构建产物一并发布）
- canonical 仅在 `site.url` 配置后输出，避免指向错误域名

## 部署

`bun run build` 会把全部路由预渲染为静态 HTML，产物在 `dist/client/`；随后 `scripts/make-404.mjs` 把预渲染的 `index.html` 复制为 `dist/client/404.html`（注入 `noindex`）。GitHub Pages 对未知 URL 返回该文件，应用水合后由 TanStack Router 渲染 NotFound 组件。

站点通过 `.github/workflows/deploy.yml` 发布到 GitHub Pages：

https://claude-mem.ndjp.net
