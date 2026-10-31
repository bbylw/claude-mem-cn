import { createFileRoute } from '@tanstack/react-router'
import { CodeBlock } from '~/components/CodeBlock'
import { docGroups, site, canonicalLinks } from '~/data/content'

export const Route = createFileRoute('/docs')({
  head: () => ({
    meta: [
      { title: `文档索引 — ${site.name}` },
      { name: 'description', content: '安装、使用、架构、配置与故障排查的完整文档索引。' },
    ],
    links: canonicalLinks('/docs'),
  }),
  component: Docs,
})

function Docs() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">文档</p>
          <h1>完整文档索引</h1>
          <p>
            📚{' '}
            <a href={site.docs} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
              查看完整文档
            </a>{' '}
            — 在官网浏览
          </p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="wrap">
          {docGroups.map((g) => (
            <div className="docgroup" key={g.title}>
              <h3>{g.title}</h3>
              <div className="doclist">
                {g.items.map((item) => (
                  <a
                    className="docitem"
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="l">{item.label}</span>
                    <span className="d">{item.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">故障排查</p>
          <h2 className="section-title">遇到问题</h2>
          <p className="section-lede">
            如果遇到问题，向 Claude 描述该问题，troubleshoot 技能会自动诊断并给出修复方案。
          </p>
          <div className="grid grid--2" style={{ alignItems: 'start' }}>
            <div className="stack">
              <div className="callout">
                <span className="callout-icon" aria-hidden="true">🩺</span>
                <div>
                  常见问题与解决方案，请参阅{' '}
                  <a
                    href="https://docs.claude-mem.ai/troubleshooting"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--accent)' }}
                  >
                    故障排查指南
                  </a>
                  。
                </div>
              </div>
              <div className="callout">
                <span className="callout-icon" aria-hidden="true">🐛</span>
                <div>使用自动化生成器创建详尽的 bug 报告。</div>
              </div>
            </div>
            <CodeBlock code={'cd ~/.claude/plugins/marketplaces/thedotmack\nnpm run bug-report'} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">贡献</p>
          <h2 className="section-title">欢迎贡献</h2>
          <div className="steps">
            {[
              'Fork 本仓库',
              '创建功能分支',
              '在修改的同时编写测试',
              '更新文档',
              '针对 main 提交 Pull Request',
            ].map((s, i) => (
              <div className="step-row" key={s}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s}</h3>
                </div>
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 20 }}>
            发布均从 <code className="inline-code">main</code> 切出，并发布到 npm。贡献流程请参阅{' '}
            <a
              href="https://docs.claude-mem.ai/development"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              开发指南
            </a>
            。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">许可证</p>
          <h2 className="section-title">Apache License 2.0</h2>
          <p className="section-lede">
            Claude-Mem 采用 Apache License 2.0 授权。我们选择 Apache-2.0，是因为持久的智能体记忆应当能够轻松嵌入开发者工具、本地智能体、MCP
            服务器、企业系统、机器人技术栈以及生产级智能体 harness。
          </p>
          <div className="stack">
            <div className="callout">
              <span className="callout-icon" aria-hidden="true">📄</span>
              <div>
                完整细节请参阅{' '}
                <a href={`${site.repo}/blob/main/LICENSE`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
                  LICENSE
                </a>{' '}
                文件。授权范围与开源 / 商业边界，请参阅{' '}
                <a href={`${site.repo}/blob/main/docs/license.md`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
                  docs/license.md
                </a>{' '}
                与{' '}
                <a href={`${site.repo}/blob/main/docs/ip-boundary.md`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
                  docs/ip-boundary.md
                </a>
                。
              </div>
            </div>
            <div className="callout">
              <span className="callout-icon" aria-hidden="true">🎵</span>
              <div>
                <strong>关于 Ragtime 的说明</strong>：
                <code className="inline-code">ragtime/</code> 目录采用{' '}
                <strong>Apache License 2.0</strong> 授权。详情请参阅{' '}
                <a
                  href={`${site.repo}/blob/main/ragtime/LICENSE`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  ragtime/LICENSE
                </a>
                。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">支持</p>
          <h2 className="section-title">找到我们</h2>
          <div className="grid grid--3">
            <a className="card" href={`${site.repo}/tree/main/docs`} target="_blank" rel="noreferrer">
              <h3>文档</h3>
              <p className="mono" style={{ fontSize: 13 }}>docs/</p>
            </a>
            <a className="card" href={`${site.repo}/issues`} target="_blank" rel="noreferrer">
              <h3>问题反馈</h3>
              <p className="mono" style={{ fontSize: 13 }}>GitHub Issues</p>
            </a>
            <a className="card" href={site.repo} target="_blank" rel="noreferrer">
              <h3>仓库</h3>
              <p className="mono" style={{ fontSize: 13 }}>github.com/thedotmack/claude-mem</p>
            </a>
            <a className="card" href="https://x.com/Claude_Memory" target="_blank" rel="noreferrer">
              <h3>官方 X 账号</h3>
              <p className="mono" style={{ fontSize: 13 }}>@Claude_Memory</p>
            </a>
            <a className="card" href="https://discord.com/invite/J4wttp9vDu" target="_blank" rel="noreferrer">
              <h3>官方 Discord</h3>
              <p className="mono" style={{ fontSize: 13 }}>加入 Discord</p>
            </a>
            <a className="card" href={site.author.url} target="_blank" rel="noreferrer">
              <h3>作者</h3>
              <p className="mono" style={{ fontSize: 13 }}>Alex Newman (@thedotmack)</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="callout">
            <span className="callout-icon" aria-hidden="true">🪙</span>
            <div>
              <strong>关于 CMEM 代币？</strong> CMEM 是一个由第三方创建的代币，但已被 Claude-Mem 的创造者（Alex Newman，@thedotmack）官方接纳。该代币充当社区增长的催化剂，也是将 CMEM 带给最需要的开发者与知识工作者的载体。
              <br />
              <span className="mono" style={{ fontSize: 12.5, color: 'var(--text-faint)' }}>
                官方 BASE CA: 0x76b1967eec0ccaeb001bbbb2b40dc4badba31ba3
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
