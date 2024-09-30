/// <reference types="vinxi/types/client" />
import { StartClient } from '@tanstack/start'
import { hydrateRoot } from 'react-dom/client'

import { createRouter } from '~/router'

void client()

export default function client() {
  const router = createRouter()

  // biome-ignore lint/style/noNonNullAssertion: is ok to assert here
  hydrateRoot(document.getElementById('root')!, <StartClient router={router} />)
}
