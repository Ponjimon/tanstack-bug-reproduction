import { defineMiddleware } from 'vinxi/http'

// Injects the Wrangler PlatformProxy into the event context locally
const cloudflareMiddleware = defineMiddleware({
  onRequest: async (event) => {
    if (!import.meta.env.DEV) {
      return
    }
    const cf = await import('wrangler')
    const proxy = await cf.getPlatformProxy<Env>({ persist: true })
    event.context.cloudflare = proxy
  },
})

export default cloudflareMiddleware
