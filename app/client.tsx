import { StartClient } from '@tanstack/start'
/// <reference types="vinxi/types/client" />
import { hydrateRoot } from 'react-dom/client'
import { createRouter } from './router'

const router = createRouter()

// biome-ignore lint/style/noNonNullAssertion: is ok to assert here
hydrateRoot(document.getElementById('root')!, <StartClient router={router} />)
