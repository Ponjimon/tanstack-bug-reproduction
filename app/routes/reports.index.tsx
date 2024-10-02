import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reports/')({
  component: Reports,
})

function Reports() {
  return (
    <div>
      <h1>hiiiii</h1>
      <Outlet />
    </div>
  )
}
