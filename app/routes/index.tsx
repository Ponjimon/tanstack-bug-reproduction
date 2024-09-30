import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

import { getEnv } from '~/utils/get-env'

const incrementCount = createServerFn('POST', async () => {
  const { tanstack_start_workers } = getEnv()
  const response = await tanstack_start_workers.get('count')
  if (!response) {
    await tanstack_start_workers.put('count', JSON.stringify({ count: 1 }))
  } else {
    const previousCount = JSON.parse(response).count as number
    await tanstack_start_workers.put('count', JSON.stringify({ count: previousCount + 1 }))
  }
})

const getCount = createServerFn('GET', async () => {
  const { tanstack_start_workers } = getEnv()
  const response = await tanstack_start_workers.get('count')
  if (!response) {
    return { count: 0 }
  }
  return JSON.parse(response) as { count: number }
})

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <button
      type="button"
      onClick={() => {
        incrementCount().then(() => {
          router.invalidate()
        })
      }}
    >
      {state.count}
    </button>
  )
}
