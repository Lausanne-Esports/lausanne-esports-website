import type { ReactNode } from 'react'

interface LoginShellProps {
  title: string
  children: ReactNode
}

export function LoginShell(props: LoginShellProps) {
  const { title, children } = props

  return (
    <div className="text-gray-900">
      <h1>{title}</h1>
      {children}
    </div>
  )
}
