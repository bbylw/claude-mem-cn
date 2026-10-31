import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    tanstackStart({
      // 全站内容静态：构建时预渲染所有路由，产物可直接作为静态站点部署。
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }), // MUST come before react()
    viteReact(),
  ],
})
