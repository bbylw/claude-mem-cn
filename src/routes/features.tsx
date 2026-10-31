import { createFileRoute } from '@tanstack/react-router'
import { features, site, canonicalLinks } from '~/data/content'

export const Route = createFileRoute('/features')({
  head: () => ({
    meta: [
      { title: `核心特性 — ${site.name}` },
      { name: 'description', content: '持久化记忆、渐进式披露、智能搜索、TeamBrain、隐私控制等 11 项特性。' },
    ],
    links: canonicalLinks('/features'),
  }),
  component: Features,
})

function Features() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">核心特性</p>
          <h1>11 项能力，围绕一件事：记住</h1>
          <p>
            从自动捕获到渐进式召回，从隐私控制到团队共享。每一项都为减少重复解释而生。
          </p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="wrap">
          <div className="grid grid--3">
            {features.map((f) => (
              <article className="card" key={f.title}>
                <span className="card-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                {f.link ? (
                  <a className="card-link" href={f.link.href} target="_blank" rel="noreferrer">
                    {f.link.label} ↗
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">渐进式披露</p>
          <h2 className="section-title">为什么 token 能省下来</h2>
          <p className="section-lede">
            不把全部历史塞进上下文。先拿索引，再看时间线，最后只为筛出来的 ID 取详情——先筛选再获取详情，可节省约 10 倍 token。
          </p>
          <div className="grid grid--3">
            <div className="card">
              <h3>① 索引</h3>
              <p>search 返回带 ID 的紧凑索引，约 50-100 tokens/结果。先知道有什么。</p>
            </div>
            <div className="card">
              <h3>② 上下文</h3>
              <p>timeline 给出特定观察周边的时间线，判断哪几条真的相关。</p>
            </div>
            <div className="card">
              <h3>③ 详情</h3>
              <p>get_observations 只为筛选出的 ID 拉完整内容，约 500-1,000 tokens/结果。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">隐私</p>
          <h2 className="section-title">默认本地，敏感内容可排除</h2>
          <div className="stack">
            <div className="callout">
              <span className="callout-icon" aria-hidden="true">🔒</span>
              <div>
                使用 <code className="inline-code">&lt;private&gt;</code> 标签将敏感内容排除在存储之外。
              </div>
            </div>
            <div className="callout">
              <span className="callout-icon" aria-hidden="true">🖼️</span>
              <div>
                截图功能<strong>可选，默认关闭</strong>。开启后，工具截图转换后的副本保存在{' '}
                <code className="inline-code">~/.claude-mem/media-v1/</code> 下，仅在开启云同步时上传至
                cmem.ai，并且仅在单独启用图像推理时才发送给观察器模型。
              </div>
            </div>
            <div className="callout">
              <span className="callout-icon" aria-hidden="true">👥</span>
              <div>
                TeamBrain 中每个人自行选择分享哪些内容；个人请求与审查笔记保持独立。
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
