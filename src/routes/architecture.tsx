import { createFileRoute } from '@tanstack/react-router'
import { components, site, canonicalLinks } from '~/data/content'

export const Route = createFileRoute('/architecture')({
  head: () => ({
    meta: [
      { title: `工作原理 — ${site.name}` },
      { name: 'description', content: '生命周期钩子、Worker 服务、SQLite、mem-search 技能与 Chroma 向量数据库。' },
    ],
    links: canonicalLinks('/architecture'),
  }),
  component: Architecture,
})

const hooks = [
  'SessionStart',
  'UserPromptSubmit',
  'PreToolUse',
  'PostToolUse',
  'Stop',
  'SessionEnd',
]

const flow = [
  { label: '工具调用', desc: 'PreToolUse / PostToolUse 捕获' },
  { label: '观察记录', desc: '写入 SQLite' },
  { label: '语义摘要', desc: '生成可检索的观察' },
  { label: '索引', desc: 'FTS5 + Chroma 向量' },
  { label: '下一会话', desc: 'SessionStart 注入' },
]

function Architecture() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">工作原理</p>
          <h1>六个组件，一条记忆链路</h1>
          <p>
            钩子捕获 → worker 处理 → SQLite 落盘 → 向量索引 → 下一会话注入。全部在本地完成。
          </p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="wrap">
          <div className="pill-row" style={{ marginBottom: 28 }}>
            {flow.map((f, i) => (
              <span className="pill" key={f.label}>
                {i + 1}. {f.label}
              </span>
            ))}
          </div>
          <div className="steps">
            {components.map((c) => (
              <div className="step-row" key={c.step}>
                <span className="step-num">{c.step}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">生命周期钩子</p>
          <h2 className="section-title">六个时机，无 shell 执行</h2>
          <p className="section-lede">
            每个钩子都是一条无 shell 的命令{' '}
            <code className="inline-code">claude-mem hook claude-code &lt;event&gt;</code>
            ，由安装程序放到 PATH 上的一个小型启动器运行。
          </p>
          <div className="grid grid--3">
            {hooks.map((h) => (
              <div className="card" key={h}>
                <h3 className="mono" style={{ fontSize: 15, color: 'var(--accent)' }}>
                  {h}
                </h3>
              </div>
            ))}
          </div>
          <p className="faint" style={{ marginTop: 20, fontSize: 13.5 }}>
            钩子名称来自官方文档。逐条说明见{' '}
            <a
              href="https://docs.claude-mem.ai/architecture/hooks"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              钩子参考
            </a>
            。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">数据流</p>
          <h2 className="section-title">从一次工具调用到下一次会话</h2>
          <p className="section-lede" style={{ marginBottom: 28 }}>
            下图按官方组件说明整理，用于理解链路顺序。
          </p>
          <div className="stack">
            {flow.map((f, i) => (
              <div className="callout" key={f.label}>
                <span className="callout-icon mono">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{f.label}</strong> — {f.desc}
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <a
              className="card-link"
              href="https://docs.claude-mem.ai/architecture/overview"
              target="_blank"
              rel="noreferrer"
            >
              架构概览 ↗
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
