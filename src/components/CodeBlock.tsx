import { useState } from 'react'

export function CopyButton({ text, label = '复制' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={`${label}代码`}>
      {copied ? '已复制' : label}
    </button>
  )
}

export function CodeBlock({ code, copyable = true }: { code: string; copyable?: boolean }) {
  return (
    <div className="codeblock">
      {copyable ? <CopyButton text={code} /> : null}
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}
