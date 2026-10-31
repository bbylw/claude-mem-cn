import { createFileRoute, Link } from '@tanstack/react-router'
import { CopyButton } from '~/components/CodeBlock'
import { Glyph } from '~/components/Glyph'
import { components, features, installTargets, site, canonicalLinks } from '~/data/content'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ title: `${site.name} — ${site.tagline}` }],
    links: canonicalLinks('/'),
  }),
  component: Home,
})

const heroFacts = ['Apache-2.0 开源', 'Node 20+', '本地优先']

const catalog = [
  { k: '捕获', v: '六类生命周期钩子自动记录' },
  { k: '检索', v: '四个 MCP 工具按需取回' },
  { k: '成本', v: '约十分之一的 token 成本' },
  { k: '位置', v: 'SQLite 与 Chroma 都在本地' },
]

function ArchiveStack() {
  return (
    <div className="lp-stack" aria-hidden="true">
      <div className="lp-sheet lp-sheet--back">
        <div className="lp-sheet-meta">
          <span>Session 01</span>
          <span>已归档</span>
        </div>
        <div className="lp-sheet-lines">
          <span style={{ width: '72%' }} />
          <span style={{ width: '54%' }} />
          <span style={{ width: '64%' }} />
          <span style={{ width: '38%' }} />
        </div>
        <div className="lp-sheet-foot">观察记录 · SQLite</div>
      </div>

      <div className="lp-sheet lp-sheet--mid">
        <div className="lp-sheet-meta">
          <span>语义摘要</span>
          <span>已压缩</span>
        </div>
        <div className="lp-sheet-lines">
          <span style={{ width: '66%' }} />
          <span style={{ width: '78%' }} />
          <span style={{ width: '46%' }} />
        </div>
        <div className="lp-sheet-foot">FTS5 + Chroma</div>
      </div>

      <div className="lp-sheet lp-sheet--front">
        <div className="lp-sheet-meta">
          <span>SessionStart</span>
          <span>上下文已注入</span>
        </div>
        <ul className="lp-checklist">
          <li>决策与观察自动带回</li>
          <li>先索引，再取详情</li>
          <li>不用重新解释昨天</li>
        </ul>
        <div className="lp-budget">
          <div className="lp-budget-head">
            <span>实际注入</span>
            <span>全部历史</span>
          </div>
          <div className="lp-budget-track">
            <span className="lp-budget-fill" />
          </div>
          <p>先筛选再取详情，约十分之一 token。</p>
        </div>
        <div className="lp-stamp">已恢复</div>
      </div>

      <div className="lp-stack-caption">跨会话保留 · 本地优先</div>
    </div>
  )
}

function Home() {
  return (
    <div className="lp">
      <section className="lp-hero">
        <div className="wrap lp-hero-grid">
          <div className="lp-hero-copy">
            <p className="lp-kicker">
              <span className="lp-kicker-dot" aria-hidden="true" />
              跨会话的持久记忆
            </p>
            <h1>
              让 Claude 记住
              <br />
              整个项目的历史
            </h1>
            <p className="lp-lede">{site.description}</p>
            <div className="lp-actions">
              <Link to="/quickstart" className="btn btn--primary">
                开始安装
              </Link>
              <a href={site.docs} target="_blank" rel="noreferrer noopener" className="btn btn--ghost">
                阅读文档
              </a>
            </div>
            <ul className="lp-hero-facts">
              {heroFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>

          <ArchiveStack />
        </div>

        <div className="wrap lp-catalog">
          {catalog.map((item) => (
            <div className="lp-catalog-item" key={item.k}>
              <span className="lp-catalog-k">{item.k}</span>
              <p>{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-section">
        <div className="wrap">
          <div className="lp-section-head">
            <div>
              <p className="lp-label">能力</p>
              <h2>它替你做的事</h2>
            </div>
            <p className="lp-section-lede">
              从捕获、压缩到召回，全部自动完成。你不需要再向 Claude 解释昨天发生了什么。
            </p>
          </div>

          <div className="lp-features">
            {features.slice(0, 6).map((feature) => (
              <article className="lp-feature" key={feature.title}>
                <span className="lp-glyph">
                  <Glyph name={feature.icon} size={22} />
                </span>
                <div className="lp-feature-body">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  {feature.link ? (
                    <a
                      className="lp-text-link"
                      href={feature.link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {feature.link.label}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="lp-feature-more">
            <Link to="/features" className="lp-text-link">
              查看全部 11 项特性
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-section lp-chain-section">
        <div className="wrap">
          <div className="lp-section-head">
            <div>
              <p className="lp-label">链路</p>
              <h2>记忆是怎么串起来的</h2>
            </div>
            <p className="lp-section-lede">
              从一次工具调用到下一次会话，六个组件串起一条本地链路。
            </p>
          </div>

          <div className="lp-chain">
            {components.map((component) => (
              <div className="lp-chain-row" key={component.step}>
                <span className="lp-chain-step">{component.step}</span>
                <h3>{component.title}</h3>
                <p>{component.body}</p>
              </div>
            ))}
          </div>

          <p className="lp-chain-foot">
            钩子捕获、落盘、索引、注入——每一环都在本地完成。
          </p>
        </div>
      </section>

      <section className="lp-section lp-install-section">
        <div className="wrap">
          <div className="lp-section-head">
            <div>
              <p className="lp-label">安装</p>
              <h2>装好就能用</h2>
            </div>
            <p className="lp-section-lede">
              支持 Claude Code、OpenCode、T3 Code、Grok Bot、OpenClaw 等 10 个入口。
            </p>
          </div>

          <div className="lp-install-card">
            <div className="lp-install-card-head">
              <span className="lp-install-label">安装卡 · v{site.version}</span>
              <span className="lp-install-stamp">一条命令</span>
            </div>

            <div className="lp-install-grid">
              <div className="lp-install-main">
                <p className="lp-install-claim">
                  一条命令，
                  <br />
                  完成所有基础设置。
                </p>
                <p className="lp-install-copy">
                  安装程序会先完成基础设置，然后提示你在浏览器中登录 claude-mem（邮箱魔法链接，无需绑卡）。登录后可选择 claude-mem 观察器、OpenRouter、Gemini 密钥或 Anthropic 套餐。
                </p>
                <div className="lp-command">
                  <span className="lp-command-prompt" aria-hidden="true">
                    $
                  </span>
                  <code>npx claude-mem install</code>
                  <CopyButton text="npx claude-mem install" label="复制" />
                </div>
                <Link to="/quickstart" className="lp-install-link">
                  查看全部安装目标
                </Link>
              </div>

              <div className="lp-install-side">
                <div className="lp-install-side-head">
                  <span>支持的宿主</span>
                  <span>{installTargets.length}</span>
                </div>
                <ul className="lp-targets">
                  {installTargets.map((target) => (
                    <li key={target.id}>{target.name}</li>
                  ))}
                </ul>
                <p className="lp-install-note">
                  Windows 安装后请重启终端或 IDE，以便读取新的 Path。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-final">
        <div className="wrap lp-final-inner">
          <p className="lp-label">下一步</p>
          <h2>
            会话会结束，
            <br />
            知识不该断。
          </h2>
          <p className="lp-final-lede">
            重启 Claude Code，以往会话的上下文会自动出现在新会话中。
          </p>
          <div className="lp-actions">
            <Link to="/quickstart" className="btn btn--primary">
              快速开始
            </Link>
            <a href={site.repo} target="_blank" rel="noreferrer noopener" className="btn btn--ghost">
              GitHub 仓库
            </a>
          </div>
          <div className="lp-final-foot">
            <span>v{site.version}</span>
            <span>{site.license}</span>
            <span>为 Claude Code 打造</span>
          </div>
        </div>
      </section>
    </div>
  )
}
