import { getEvent } from 'vinxi/http'

export const getEnv = () => {
  const event = getEvent()
  return event.context.cloudflare.env
}
