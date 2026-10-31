import { Link } from '@tanstack/react-router'
import { nav, site } from '~/data/content'

export function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link to="/" className="brand" aria-label={`${site.name} 首页`}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 22 22" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4 18 7.7l-7 3.7-7-3.7Z" />
              <path d="M4 11.1l7 3.7 7-3.7" />
              <path d="M4 14.7l7 3.7 7-3.7" />
            </svg>
          </span>
          <span>{site.name}</span>
        </Link>
        <nav className="nav" aria-label="主导航">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ 'data-status': 'active' }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="header-cta"
          href={site.repo}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="在 GitHub 上查看 Claude-Mem 仓库（新窗口打开）"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="brand">
              <span className="brand-mark" aria-hidden="true">
                CM
              </span>
              <span>{site.name}</span>
            </div>
            <p>{site.tagline}。Apache-2.0 开源，为 Claude Code 提供跨会话的知识连续性。</p>
          </div>
          <nav className="footer-col" aria-labelledby="footer-product">
            <h2 id="footer-product" className="footer-heading">
              产品
            </h2>
            <Link to="/quickstart">快速开始</Link>
            <Link to="/features">核心特性</Link>
            <Link to="/architecture">工作原理</Link>
            <Link to="/mcp">MCP 搜索</Link>
          </nav>
          <nav className="footer-col" aria-labelledby="footer-resources">
            <h2 id="footer-resources" className="footer-heading">
              资源
            </h2>
            <a href={site.docs} target="_blank" rel="noreferrer noopener">
              完整文档
            </a>
            <Link to="/config">配置</Link>
            <Link to="/docs">文档索引</Link>
            <a href={`${site.repo}/issues`} target="_blank" rel="noreferrer noopener">
              GitHub Issues
            </a>
          </nav>
          <nav className="footer-col" aria-labelledby="footer-community">
            <h2 id="footer-community" className="footer-heading">
              社区
            </h2>
            <a href={site.repo} target="_blank" rel="noreferrer noopener">
              仓库
            </a>
            <a href="https://x.com/Claude_Memory" target="_blank" rel="noreferrer noopener">
              X / @Claude_Memory
            </a>
            <a href="https://discord.com/invite/J4wttp9vDu" target="_blank" rel="noreferrer noopener">
              Discord
            </a>
            <a href={site.author.url} target="_blank" rel="noreferrer noopener">
              作者 {site.author.handle}
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 {site.name} · {site.license} · 作者 {site.author.name}
          </span>
          <span className="mono">
            v{site.version} · Node {site.node}
          </span>
        </div>
      </div>
    </footer>
  )
}
