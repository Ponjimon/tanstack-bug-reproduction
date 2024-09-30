import { defineConfig } from '@tanstack/start/config'
import type { App } from 'vinxi'
import tsConfigPaths from 'vite-tsconfig-paths'

const tanstackApp = defineConfig({
  vite: {
    plugins: () => [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
  server: {
    routeRules: {
      '/**': {},
    },
    preset: 'cloudflare-pages',

    output: {
      dir: '{{ rootDir }}/dist',
      publicDir: '{{ output.dir }}/public',
      serverDir: '{{ output.dir }}/worker',
    },

    rollupConfig: {
      external: ['node:async_hooks'],
    },

    hooks: {
      compiled() {},
    },
  },
})

const routers = tanstackApp.config.routers.map((r) => {
  return {
    ...r,
    middleware: r.target === 'server' ? 'middlewares/cloudflare.tsx' : undefined,
  }
})

const app: App = {
  ...tanstackApp,
  config: {
    ...tanstackApp.config,
    routers: routers,
  },
}

export default app
