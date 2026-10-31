import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import { CodeBlock } from '~/components/CodeBlock'
import { Glyph } from '~/components/Glyph'
import { installTargets, requirements, site, canonicalLinks } from '~/data/content'

export const Route = createFileRoute('/quickstart')({
  head: () => ({
    meta: [
      { title: `快速开始 — ${site.name}` },
      {
        name: 'description',
        content: '一条命令安装 Claude-Mem，支持 Claude Code、OpenCode、T3 Code、Grok Bot 等。',
      },
    ],
    links: canonicalLinks('/quickstart'),
  }),
  component: Quickstart,
})

function Quickstart() {
  const [active, setActive] = useState(installTargets[0]!.id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const current = installTargets.find((t) => t.id === active) ?? installTargets[0]!
  const activeIndex = installTargets.findIndex((t) => t.id === active)

  function move(delta: number) {
    const next = installTargets[(activeIndex + delta + installTargets.length) % installTargets.length]!
    setActive(next.id)
    tabRefs.current[next.id]?.focus()
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      move(1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      move(-1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActive(installTargets[0]!.id)
      tabRefs.current[installTargets[0]!.id]?.focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      const last = installTargets[installTargets.length - 1]!
      setActive(last.id)
      tabRefs.current[last.id]?.focus()
    }
  }

  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">快速开始</p>
          <h1>一条命令，装好就能用</h1>
          <p>
            安装程序会先完成所有基础设置，然后提示你在浏览器中登录 claude-mem（邮箱魔法链接，无需绑卡）。
          </p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="wrap">
          <div className="tabs" role="tablist" aria-label="选择安装目标">
            {installTargets.map((t) => (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[t.id] = el
                }}
                id={`tab-${t.id}`}
                role="tab"
                type="button"
                className="tab"
                aria-selected={t.id === active}
                aria-controls="install-panel"
                tabIndex={t.id === active ? 0 : -1}
                onClick={() => setActive(t.id)}
                onKeyDown={onKeyDown}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div id="install-panel" role="tabpanel" aria-labelledby={`tab-${current.id}`}>
            <CodeBlock code={current.command} />

            {current.note ? <p className="tab-panel-note">{current.note}</p> : null}
            {current.link ? (
              <p style={{ marginTop: 12 }}>
                <a
                  className="card-link"
                  href={current.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {current.link.label}
                  <Glyph name="external" size={12} className="link-glyph" />
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">登录与提供者</p>
          <h2 className="section-title">30 天免费试用，之后可自选提供者</h2>
          <div className="stack">
            <div className="callout">
              <span className="callout-icon">
                <Glyph name="key" size={18} />
              </span>
              <div>
                登录会为你的账户分配一个记忆密钥，并解锁带 <strong>30 天免费试用</strong> 的{' '}
                <strong>claude-mem 观察器</strong>：记忆运行于套餐之外，因此你最多可从套餐中获得 100%
                的额外用量。免费试用结束后，除非你订阅，否则记忆会自动回退到你的 Anthropic 套餐。
              </div>
            </div>
            <div className="callout">
              <span className="callout-icon">
                <Glyph name="skip" size={18} />
              </span>
              <div>
                想跳过登录？传入明确的 <code className="inline-code">--provider</code> 参数、设置{' '}
                <code className="inline-code">CLAUDE_MEM_ONLINE_OPTIN=false</code>，或在 CI /
                非交互式 shell 中运行——安装程序会在不产生任何账户交互的情况下完成安装。
              </div>
            </div>
            <div className="callout">
              <span className="callout-icon">
                <Glyph name="provider" size={18} />
              </span>
              <div>
                登录后，你可以选择记忆提供者——claude-mem 观察器、你自己的 OpenRouter 或 Gemini
                密钥，或者你的 Anthropic 套餐。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">系统要求</p>
          <h2 className="section-title">环境前置</h2>
          <div className="table-scroll" tabIndex={0} role="region" aria-label="系统要求表">
            <table className="table">
              <caption className="sr-only">Claude-Mem 的系统要求</caption>
              <thead>
                <tr>
                  <th scope="col">组件</th>
                  <th scope="col">要求</th>
                  <th scope="col">说明</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((r) => (
                  <tr key={r.name}>
                    <th scope="row">{r.name}</th>
                    <td>
                      <code>{r.value}</code>
                    </td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Windows</p>
          <h2 className="section-title">Windows 安装说明</h2>
          <p className="section-lede">
            如果你看到 <code className="inline-code">npm : The term 'npm' is not recognized</code>{' '}
            这类错误，请确保已安装 Node.js 和 npm，并已加入 PATH。
          </p>
          <div className="stack stack--lg">
            <div className="callout">
              <span className="callout-icon">
                <Glyph name="windows" size={18} />
              </span>
              <div>
                Claude Code 钩子不需要 Git Bash。每个钩子直接运行{' '}
                <code className="inline-code">claude-mem</code>，而{' '}
                <code className="inline-code">npx claude-mem install</code> 会将该启动器放到{' '}
                <code className="inline-code">%LOCALAPPDATA%\claude-mem\bin\claude-mem.exe</code>
                ，并把该文件夹加入你的用户 Path。完成后请重启终端或 IDE，以便 Claude Code
                读取新的 Path。
              </div>
            </div>
            <div>
              <p className="muted" style={{ marginBottom: 12 }}>
                如果钩子报错{' '}
                <code className="inline-code">Executable not found in $PATH: "claude-mem"</code>
                ，运行诊断命令：
              </p>
              <CodeBlock code="npx claude-mem doctor" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="callout">
            <span className="callout-icon">
              <Glyph name="alert" size={18} />
            </span>
            <div>
              <strong>注意：</strong>Claude-Mem 也发布在 npm 上，但{' '}
              <code className="inline-code">npm install -g claude-mem</code> 只安装{' '}
              <strong>SDK / 库</strong>——它不会注册插件钩子，也不会设置 worker 服务。请始终通过{' '}
              <code className="inline-code">npx claude-mem install</code> 或{' '}
              <code className="inline-code">/plugin</code> 命令来安装。
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
