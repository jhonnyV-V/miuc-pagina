import { Link, createFileRoute } from '@tanstack/react-router'

import { useAuth } from '../auth'

export const Route = createFileRoute('/_auth/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const auth = useAuth()

  return (
    <section className="grid gap-2 p-2">
      <p>Hi {auth.user}!</p>
      <p>You are currently on the dashboard route.</p>
      <ol className="list-disc list-inside px-2">
        <li>
          <Link
            to="/demo/tanstack-query"
            className="text-blue-500 hover:opacity-75"
          >
            Demo tanstack-query
          </Link>
        </li>
        <li>
          <Link to="/demo/table" className="text-blue-500 hover:opacity-75">
            Demo tabla
          </Link>
        </li>
      </ol>
    </section>
  )
}
