import { createFileRoute } from '@tanstack/react-router'
import { CodeBlock } from '~/components/CodeBlock'
import { Glyph } from '~/components/Glyph'
import { modes, settingsJson, site, canonicalLinks } from '~/data/content'

export const Route = createFileRoute('/config')({
  head: () => ({
    meta: [
      { title: `配置 — ${site.name}` },
      { name: 'description', content: 'settings.json、CLAUDE_MEM_MODE 模式与语言配置、上下文注入设置。' },
    ],
    links: canonicalLinks('/config'),
  }),
  component: Config,
})

function Config() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">配置</p>
          <h1>settings.json 与模式</h1>
          <p>
            设置保存在 <code className="inline-code">~/.claude-mem/settings.json</code>
            （首次运行时自动创建并填入默认值）。可在此配置 AI 模型、worker 端口、数据目录、日志级别与上下文注入设置。
          </p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="wrap">
          <p className="eyebrow">模式与语言</p>
          <h2 className="section-title">CLAUDE_MEM_MODE</h2>
          <p className="section-lede">
            Claude-Mem 通过 <code className="inline-code">CLAUDE_MEM_MODE</code>{' '}
            设置支持多种工作流模式与语言。该选项同时控制：工作流行为（如 code、chill、investigation），以及生成观察所使用的语言。
          </p>
          <div className="grid grid--2" style={{ alignItems: 'start' }}>
            <div>
              <p className="muted" style={{ marginBottom: 12 }}>
                编辑你的设置文件：
              </p>
              <CodeBlock code={settingsJson} />
            </div>
            <div>
              <div className="table-scroll" tabIndex={0} role="region" aria-label="模式对照表">
                <table className="table">
                  <caption className="sr-only">CLAUDE_MEM_MODE 可用模式</caption>
                  <thead>
                    <tr>
                      <th scope="col">模式</th>
                      <th scope="col">说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modes.map((m) => (
                      <tr key={m.id}>
                        <th scope="row">
                          <code>{m.label}</code>
                        </th>
                        <td>{m.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="callout" style={{ marginTop: 28 }}>
            <span className="callout-icon">
              <Glyph name="globe" size={18} />
            </span>
            <div>
              特定语言的模式遵循 <code className="inline-code">code--[lang]</code> 形式，其中{' '}
              <code className="inline-code">[lang]</code> 是 ISO 639-1 语言代码（例如{' '}
              <code className="inline-code">zh</code> 代表中文、
              <code className="inline-code">ja</code> 代表日文、
              <code className="inline-code">es</code> 代表西班牙文）。
            </div>
          </div>
          <div className="callout" style={{ marginTop: 14 }}>
            <span className="callout-icon">
              <Glyph name="check" size={18} />
            </span>
            <div>
              <code className="inline-code">code--zh</code>（简体中文）已内置——无需额外安装或更新插件。
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">查看可用模式</p>
          <h2 className="section-title">模式定义在 plugin/modes/</h2>
          <CodeBlock code="ls ~/.claude/plugins/marketplaces/thedotmack/plugin/modes/" />
          <div className="callout" style={{ marginTop: 24 }}>
            <span className="callout-icon">
              <Glyph name="refresh" size={18} />
            </span>
            <div>
              <strong>更改模式后</strong>，请重启 Claude Code 以应用新的模式配置。
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">上下文注入</p>
          <h2 className="section-title">跨 harness 的来源</h2>
          <p className="section-lede">
            要在 Claude Code 与 Codex 的 SessionStart 上下文中包含来自每个 harness 的观察，请在该文件中设置{' '}
            <code className="inline-code">"CLAUDE_MEM_SESSION_START_INCLUDE_ALL_SOURCES": "true"</code>
            ，或在查看器设置中启用「会话开始时包含全部来源」。默认值为{' '}
            <code className="inline-code">"false"</code>，即仅将启动上下文限制在当前 harness。所选来源仍需遵守观察数量上限。
          </p>
          <CodeBlock
            code={`{
  "CLAUDE_MEM_SESSION_START_INCLUDE_ALL_SOURCES": "true"
}`}
          />
          <p style={{ marginTop: 24 }}>
            <a className="card-link" href="https://docs.claude-mem.ai/configuration" target="_blank" rel="noreferrer">
              完整配置指南
              <Glyph name="external" size={12} className="link-glyph" />
            </a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Grok Bot</p>
          <h2 className="section-title">感知推送试点（LFG + Orifice）</h2>
          <div className="stack">
            <div className="callout">
              <span className="callout-icon">
                <Glyph name="broadcast" size={18} />
              </span>
              <div>
                关键观察（<code className="inline-code">decision</code>、
                <code className="inline-code">bugfix</code>、
                <code className="inline-code">security_alert</code>、
                <code className="inline-code">sensitive</code>）会以带日期的{' '}
                <code className="inline-code">- YYYY-MM-DD [awareness] …</code> 行追加到该 bot 的{' '}
                <code className="inline-code">memory/log/YYYY-MM.md</code> 中。
              </div>
            </div>
            <div className="callout">
              <span className="callout-icon">
                <Glyph name="mute" size={18} />
              </span>
              <div>
                此功能不会写入 <code className="inline-code">profile.md</code>、用户记忆或项目记忆。可通过{' '}
                <code className="inline-code">CLAUDE_MEM_GROK_BOT_AWARENESS_ENABLED=false</code> 关闭。
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
