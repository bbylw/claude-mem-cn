import type { GlyphName } from '~/components/Glyph'

export const site = {
  name: 'Claude-Mem',
  tagline: '为 Claude Code 打造的持久化记忆压缩系统',
  version: '15.7.0',
  license: 'Apache-2.0',
  node: '>=20.0.0',
  repo: 'https://github.com/thedotmack/claude-mem',
  docs: 'https://docs.claude-mem.ai/',
  // 部署后设置真实域名（例如 https://claude-mem.example.com），canonical 与 og:url 才会输出。
  url: '',
  author: { name: 'Alex Newman', handle: '@thedotmack', url: 'https://github.com/thedotmack' },
  description:
    'Claude-Mem 通过自动捕获工具使用过程中的观察记录、生成语义化摘要，并将其提供给未来的会话，从而在不同会话之间无缝保留上下文。这样，即使会话结束或重新连接，Claude 也能持续保持对项目的知识连续性。',
}

/** 页面级 SEO 链接：只有配置了站点域名才输出 canonical，避免指向错误地址。 */
export function canonicalLinks(path: string) {
  if (!site.url) return []
  const href = `${site.url.replace(/\/$/, '')}${path}`
  return [
    { rel: 'canonical', href },
    { property: 'og:url', content: href },
  ]
}

export type Feature = {
  icon: GlyphName
  title: string
  body: string
  link?: { label: string; href: string }
}

export const features: Feature[] = [
  {
    icon: 'memory',
    title: '持久化记忆',
    body: '上下文在不同会话间得以保留。会话结束或重新连接，知识连续性不中断。',
  },
  {
    icon: 'disclosure',
    title: '渐进式披露',
    body: '分层记忆检索，并可视化 token 成本。先看索引，再取详情。',
  },
  {
    icon: 'search',
    title: '智能搜索（默认）',
    body: '通过三步 mem-search 技能查询你的项目历史，按类型、日期、项目过滤。',
  },
  {
    icon: 'work',
    title: '本地 My Work',
    body: '启动时会打印 worker URL，其中包含实时请求、进度、人工交接以及已保存的审查队列。记忆、会话与设置保留在 /viewer。',
    link: { label: '查看指南', href: 'https://docs.claude-mem.ai/usage/my-work' },
  },
  {
    icon: 'team',
    title: 'TeamBrain',
    body: 'My Work 旁边一个可选的共享工作区，带有真实的团队工作列表、成员归属与关联发现。每个人自行选择分享哪些内容；个人请求与审查笔记保持独立。',
    link: { label: '创建团队', href: 'https://cmem.ai/teambrain/start' },
  },
  {
    icon: 'desktop',
    title: 'Claude Desktop 技能',
    body: '从 Claude Desktop 对话中搜索记忆。',
  },
  {
    icon: 'lock',
    title: '隐私控制',
    body: '使用 <private> 标签将敏感内容排除在存储之外。',
  },
  {
    icon: 'image',
    title: '截图（可选，默认关闭）',
    body: '将工具截图转换后的副本保存在 ~/.claude-mem/media-v1/ 下，仅在开启云同步时上传至 cmem.ai，并且仅在单独启用图像推理时才发送给观察器模型。',
    link: { label: '详情', href: 'https://docs.claude-mem.ai/configuration#screenshots-and-images-opt-in' },
  },
  {
    icon: 'settings',
    title: '上下文配置',
    body: '精细控制注入哪些上下文。',
  },
  {
    icon: 'automation',
    title: '自动运行',
    body: '无需人工干预。钩子自动捕获、自动摘要、自动注入。',
  },
  {
    icon: 'reference',
    title: '引用',
    body: '通过 worker API 用 ID 引用过往观察，或在 Web 查看器中查看全部。',
  },
]

export type InstallTarget = {
  id: string
  name: string
  command: string
  note?: string
  link?: { label: string; href: string }
}

export const installTargets: InstallTarget[] = [
  {
    id: 'default',
    name: '通用安装',
    command: 'npx claude-mem install',
    note: '安装程序会先完成所有基础设置，然后提示你在浏览器中登录 claude-mem（邮箱魔法链接，无需绑卡）。登录会为你的账户分配一个记忆密钥，并解锁带 30 天免费试用的 claude-mem 观察器：记忆运行于套餐之外，因此你最多可从套餐中获得 100% 的额外用量。免费试用结束后，除非你订阅，否则记忆会自动回退到你的 Anthropic 套餐。',
  },
  {
    id: 'claude-code',
    name: 'Claude Code 插件市场',
    command: '/plugin marketplace add thedotmack/claude-mem\n\n/plugin install claude-mem',
    note: '重启 Claude Code。以往会话的上下文将自动出现在新会话中。',
  },
  {
    id: 'grok-bot',
    name: 'Grok Bot',
    command: 'npx claude-mem install --ide grok-bot',
    note: 'Grok Bot 没有宿主钩子，因此我们通过监听聊天日志文件来工作。默认使用 CMEM Pro（托管记忆）。本地观察器为可选开启：--provider host。安装此插件不会安装 Cursor。',
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    command: 'npx claude-mem install --ide opencode',
    note: '适用于 OpenCode 1.3.4 及以上版本（含 OpenCode 2）。安装后请重启 OpenCode。',
  },
  {
    id: 't3code',
    name: 'T3 Code',
    command: 'npx claude-mem install --ide t3code',
    note: '安装程序会探测 T3 Code 已启用的提供者，在其配置的 home 目录中注册原生 Claude-Mem 插件，并支持 T3 托管的 Codex。请重启 T3 Code，在提示时信任该提供者的钩子，并开启一个新会话。',
    link: { label: 'T3 Code 集成指南', href: 'https://docs.claude-mem.ai/t3code-integration' },
  },
  {
    id: 'antigravity',
    name: 'Antigravity CLI',
    command: 'npx claude-mem install --ide antigravity',
    link: { label: '设置指南', href: 'https://docs.claude-mem.ai/antigravity-cli/setup' },
  },
  {
    id: 'omp',
    name: 'OMP（Oh My Pi）',
    command: 'npx claude-mem install --ide omp',
  },
  {
    id: 'pi',
    name: 'Pi 扩展',
    command: 'npx claude-mem install --ide pi',
    note: 'Pi 与 DeepSeek Harness 使用 worker 运行时。',
    link: { label: '原生 harness 设置', href: 'https://github.com/thedotmack/claude-mem/blob/main/docs/native-harness-integrations.md' },
  },
  {
    id: 'dsh',
    name: 'DeepSeek Harness',
    command: 'npx claude-mem install --ide dsh --dsh-profile tui',
    note: 'Pi 与 DeepSeek Harness 使用 worker 运行时。',
    link: { label: '原生 harness 设置', href: 'https://github.com/thedotmack/claude-mem/blob/main/docs/native-harness-integrations.md' },
  },
  {
    id: 'openclaw',
    name: 'OpenClaw 网关',
    command: 'curl -fsSL https://install.cmem.ai/openclaw.sh | bash',
    note: '安装程序会处理依赖、插件设置、AI 提供者配置、worker 启动，以及可选的实时观察推送（至 Telegram、Discord、Slack 等）。',
    link: { label: 'OpenClaw 集成指南', href: 'https://docs.claude-mem.ai/openclaw-integration' },
  },
]

export type Component = {
  step: string
  title: string
  body: string
}

export const components: Component[] = [
  {
    step: '01',
    title: '生命周期钩子',
    body: 'SessionStart、UserPromptSubmit、PreToolUse、PostToolUse、Stop、SessionEnd。每个钩子都是一条无 shell 的命令 claude-mem hook claude-code <event>，由安装程序放到 PATH 上的一个小型启动器运行。',
  },
  {
    step: '02',
    title: '智能安装',
    body: '带缓存的依赖检查器（claude --init / --maintenance 上的 Setup 钩子，外加 npx claude-mem install / repair）。',
  },
  {
    step: '03',
    title: 'Worker 服务',
    body: '由 Bun 管理的本地 HTTP API，带 Web 查看器 UI 与搜索端点。',
  },
  {
    step: '04',
    title: 'SQLite 数据库',
    body: '存储会话、观察与摘要。',
  },
  {
    step: '05',
    title: 'mem-search 技能',
    body: '带渐进式披露的自然语言查询。',
  },
  {
    step: '06',
    title: 'Chroma 向量数据库',
    body: '用于智能上下文检索的混合语义 + 关键词搜索。',
  },
]

export type McpStep = {
  n: string
  tool: string
  title: string
  body: string
  cost: string
}

export const mcpSteps: McpStep[] = [
  {
    n: '1',
    tool: 'search',
    title: '获取带 ID 的紧凑索引',
    body: '通过全文查询搜索记忆索引，可按类型 / 日期 / 项目过滤。',
    cost: '约 50-100 tokens/结果',
  },
  {
    n: '2',
    tool: 'timeline',
    title: '获取时间线上下文',
    body: '获取特定观察或查询周边的时间线上下文。',
    cost: '按需',
  },
  {
    n: '3',
    tool: 'get_observations',
    title: '仅为筛选出的 ID 获取完整详情',
    body: '按 ID 获取完整观察详情（始终批量传入多个 ID）。',
    cost: '约 500-1,000 tokens/结果',
  },
]

export const mcpExample = `// 第 1 步：搜索索引
search(query="authentication bug", type="bugfix", limit=10)

// 第 2 步：查看索引，确定相关 ID（如 #123、#456）

// 第 3 步：获取完整详情
get_observations(ids=[123, 456])`

export type Requirement = { name: string; value: string; note: string }

export const requirements: Requirement[] = [
  { name: 'Node.js', value: '20.0.0 或更高', note: '运行时' },
  { name: 'Claude Code', value: '支持插件的最新版本', note: '宿主' },
  { name: 'Bun', value: '自动安装', note: 'JavaScript 运行时与进程管理器' },
  { name: 'uv', value: '自动安装', note: '用于向量搜索的 Python 包管理器' },
  { name: 'SQLite 3', value: '已内置', note: '用于持久化存储' },
]

export type Mode = { id: string; label: string; desc: string }

export const modes: Mode[] = [
  { id: 'code', label: 'code', desc: '默认英文模式' },
  { id: 'code--zh', label: 'code--zh', desc: '简体中文模式' },
  { id: 'code--ja', label: 'code--ja', desc: '日文模式' },
]

export const settingsJson = `{
  "CLAUDE_MEM_MODE": "code--zh"
}`

export type DocGroup = {
  title: string
  items: { label: string; desc: string; href: string }[]
}

export const docGroups: DocGroup[] = [
  {
    title: '入门',
    items: [
      { label: '安装指南', desc: '快速开始与高级安装', href: 'https://docs.claude-mem.ai/installation' },
      { label: '使用指南', desc: 'Claude-Mem 如何自动工作', href: 'https://docs.claude-mem.ai/usage/getting-started' },
      { label: '搜索工具', desc: '用自然语言查询你的项目历史', href: 'https://docs.claude-mem.ai/usage/search-tools' },
      { label: '云同步', desc: '将记忆备份到 cmem.ai——无需守护进程，worker 在写入时同步', href: 'https://docs.claude-mem.ai/cloud-sync' },
    ],
  },
  {
    title: '最佳实践',
    items: [
      { label: '上下文工程', desc: 'AI 智能体上下文优化原则', href: 'https://docs.claude-mem.ai/context-engineering' },
      { label: '渐进式披露', desc: 'Claude-Mem 上下文预载策略背后的理念', href: 'https://docs.claude-mem.ai/progressive-disclosure' },
    ],
  },
  {
    title: '架构',
    items: [
      { label: '概览', desc: '系统组件与数据流', href: 'https://docs.claude-mem.ai/architecture/overview' },
      { label: '架构演进', desc: '从 v3 到 v5 的历程', href: 'https://docs.claude-mem.ai/architecture-evolution' },
      { label: '钩子架构', desc: 'Claude-Mem 如何使用生命周期钩子', href: 'https://docs.claude-mem.ai/hooks-architecture' },
      { label: '钩子参考', desc: '逐一讲解每个钩子条目', href: 'https://docs.claude-mem.ai/architecture/hooks' },
      { label: 'Worker 服务', desc: 'HTTP API 与 Bun 管理', href: 'https://docs.claude-mem.ai/architecture/worker-service' },
      { label: '数据库', desc: 'SQLite schema 与 FTS5 搜索', href: 'https://docs.claude-mem.ai/architecture/database' },
      { label: '搜索架构', desc: '基于 Chroma 向量数据库的混合搜索', href: 'https://docs.claude-mem.ai/architecture/search-architecture' },
    ],
  },
  {
    title: '配置与开发',
    items: [
      { label: '配置', desc: '环境变量与设置', href: 'https://docs.claude-mem.ai/configuration' },
      { label: '开发', desc: '构建、测试、贡献', href: 'https://docs.claude-mem.ai/development' },
      { label: '故障排查', desc: '常见问题与解决方案', href: 'https://docs.claude-mem.ai/troubleshooting' },
    ],
  },
]

export const nav = [
  { label: '快速开始', to: '/quickstart' },
  { label: '核心特性', to: '/features' },
  { label: '工作原理', to: '/architecture' },
  { label: 'MCP 搜索', to: '/mcp' },
  { label: '配置', to: '/config' },
  { label: '文档', to: '/docs' },
] as const
