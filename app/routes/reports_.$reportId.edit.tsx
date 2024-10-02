import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reports/$reportId/edit')({
  component: ReportEdit,
})

function ReportEdit() {
  return <div>Hello /reports/$reportId/edit!</div>
}
