import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reports/$reportId')({
  component: Report,
})

function Report() {
  const { reportId } = Route.useParams()
  return (
    <div>
      Hello /reports/$reportId!
      <div>
        Report Id: {reportId}
        <Link
          from="/reports/$reportId"
          to="/reports/$reportId/edit"
          params={{
            reportId,
          }}
        >
          Edit
        </Link>
      </div>
    </div>
  )
}
