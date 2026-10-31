import { createFileRoute } from '@tanstack/react-router'
import { CodeBlock } from '~/components/CodeBlock'
import { mcpExample, mcpSteps, site, canonicalLinks } from '~/data/content'

export const Route = createFileRoute('/mcp')({
  head: () => ({
    meta: [
      { title: `MCP 搜索工具 — ${site.name}` },
      { name: 'description', content: '4 个 MCP 工具，三层工作流模式，约 10 倍 token 节省。' },
    ],
    links: canonicalLinks('/mcp'),
  }),
  component: McpPage,
})

function McpPage() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">MCP 搜索工具</p>
          <h1>4 个工具，三层工作流</h1>
          <p>
            Claude-Mem 通过 4 个 MCP 工具提供智能记忆搜索，遵循省 token 的三层工作流模式。
          </p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="wrap">
          <div className="grid grid--3">
            {mcpSteps.map((s) => (
              <article className="card" key={s.tool}>
                <span className="card-icon mono" style={{ color: 'var(--accent)', fontSize: 13 }}>
                  第 {s.n} 步
                </span>
                <h3 className="mono" style={{ fontSize: 15, color: 'var(--accent)' }}>
                  {s.tool}
                </h3>
                <p style={{ marginBottom: 10 }}>{s.title}</p>
                <p style={{ fontSize: 13.5, color: 'var(--text-faint)' }}>{s.body}</p>
                <span className="pill" style={{ marginTop: 14, display: 'inline-block' }}>
                  {s.cost}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">工作方式</p>
          <h2 className="section-title">先筛选，再取详情</h2>
          <div className="grid grid--2" style={{ alignItems: 'start' }}>
            <div className="stack">
              <div className="callout">
                <span className="callout-icon" aria-hidden="true">1</span>
                <div>Claude 使用 MCP 工具搜索你的记忆。</div>
              </div>
              <div className="callout">
                <span className="callout-icon" aria-hidden="true">2</span>
                <div>先用 <code className="inline-code">search</code> 获取结果索引。</div>
              </div>
              <div className="callout">
                <span className="callout-icon" aria-hidden="true">3</span>
                <div>用 <code className="inline-code">timeline</code> 查看特定观察周边的情况。</div>
              </div>
              <div className="callout">
                <span className="callout-icon" aria-hidden="true">4</span>
                <div>
                  用 <code className="inline-code">get_observations</code> 为相关 ID 获取完整详情。
                </div>
              </div>
              <div className="callout">
                <span className="callout-icon" aria-hidden="true">✓</span>
                <div>
                  先筛选再获取详情，可节省 <strong>约 10 倍 token</strong>。
                </div>
              </div>
            </div>
            <CodeBlock code={mcpExample} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">工具清单</p>
          <h2 className="section-title">可用的 MCP 工具</h2>
          <div className="table-scroll" tabIndex={0} role="region" aria-label="MCP 工具清单">
            <table className="table">
              <caption className="sr-only">可用的 MCP 工具及其用途</caption>
              <thead>
                <tr>
                  <th scope="col">工具</th>
                  <th scope="col">用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <code>important_workflow</code>
                  </th>
                  <td>常驻的三层工作流说明，帮助 Claude 理解如何高效使用搜索工具；自动展示，无需调用</td>
                </tr>
                <tr>
                  <th scope="row">
                    <code>search</code>
                  </th>
                  <td>通过全文查询搜索记忆索引，可按类型 / 日期 / 项目过滤</td>
                </tr>
                <tr>
                  <th scope="row">
                    <code>timeline</code>
                  </th>
                  <td>获取特定观察或查询周边的时间线上下文</td>
                </tr>
                <tr>
                  <th scope="row">
                    <code>get_observations</code>
                  </th>
                  <td>按 ID 获取完整观察详情（始终批量传入多个 ID）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 24 }}>
            <a
              className="card-link"
              href="https://docs.claude-mem.ai/usage/search-tools"
              target="_blank"
              rel="noreferrer noopener"
            >
              搜索工具指南 ↗
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
