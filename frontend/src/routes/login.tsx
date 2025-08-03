import {
  HeadContent,
  createFileRoute,
  redirect,
  useRouter,
  useRouterState,
} from '@tanstack/react-router'

import * as React from 'react'
import { object, optional, string } from 'valibot'

import { useAuth } from '../auth'
import { sleep } from '../utils'
import { LoginForm } from '@/components/LoginForm'

const fallback = '/dashboard' as const


const searchSchema = object({
  redirect: optional(string())
})

export const Route = createFileRoute('/login')({
  validateSearch: searchSchema,
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || fallback })
    }
  },
  component: LoginComponent,
  head: () => ({
    meta: [{ title: 'Inicio de Sesión - Congregación' }],
  }),
})

function LoginComponent() {
  const auth = useAuth()
  const router = useRouter()
  const isLoading = useRouterState({ select: (s) => s.isLoading })
  const navigate = Route.useNavigate()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const search = Route.useSearch()

  const onFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    try {
      evt.preventDefault()
      const data = new FormData(evt.currentTarget)
      const fieldValue = data.get('email')

      if (!fieldValue) return
      const email = fieldValue.toString()
      await auth.login(email)

      await router.invalidate()

      // This is just a hack being used to wait for the auth state to update
      // in a real app, you'd want to use a more robust solution
      await sleep(1)

      await navigate({ to: search.redirect || fallback })
    } catch (error) {
      console.error('Error logging in: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isLoggingIn = isLoading || isSubmitting

  return (
    <>
      <HeadContent />
      <LoginForm onFormSubmit={onFormSubmit} isLoggingIn={isLoggingIn} />
    </>
  )
}
