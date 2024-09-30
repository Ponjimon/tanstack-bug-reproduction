import type { H3EventContext } from 'vinxi/http'
import type { PlatformProxy } from 'wrangler'
import { Env as EnvVars } from '../worker-configuration'

declare module 'vinxi/http' {
  interface H3EventContext {
    cf: CfProperties
    cloudflare: Omit<PlatformProxy<Env>, 'dispose'>
  }
}

declare global {
  interface Request {
    context: H3EventContext
  }
}
