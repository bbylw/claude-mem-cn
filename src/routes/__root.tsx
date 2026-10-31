import type { ReactNode } from 'react'
import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { Footer, Header } from '~/components/Chrome'
import { site } from '~/data/content'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${site.name} — ${site.tagline}` },
      { name: 'description', content: site.description },
      { name: 'theme-color', content: '#08090c' },
      { name: 'color-scheme', content: 'dark' },
      { property: 'og:title', content: `${site.name} — ${site.tagline}` },
      { property: 'og:description', content: site.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'zh_CN' },
      { property: 'og:site_name', content: site.name },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Claude_Memory' },
      { name: 'robots', content: 'index, follow' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'icon',
        href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="%23d97757"/><text x="16" y="22" font-family="monospace" font-size="14" font-weight="700" fill="white" text-anchor="middle">CM</text></svg>',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: site.name,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Windows, macOS, Linux',
          softwareVersion: site.version,
          license: 'https://www.apache.org/licenses/LICENSE-2.0',
          description: site.description,
          url: site.repo,
          author: { '@type': 'Person', name: site.author.name, url: site.author.url },
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <RootDocument>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="wrap" style={{ padding: '120px 24px', textAlign: 'center' }}>
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>这个页面不存在</h1>
      <p className="muted" style={{ marginBottom: 28 }}>
        记忆里没有这一条。返回首页重新开始。
      </p>
      <a href="/" className="btn btn--primary">
        回到首页
      </a>
    </div>
  )
}
