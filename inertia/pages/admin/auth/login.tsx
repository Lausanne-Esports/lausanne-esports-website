import { useForm } from '@inertiajs/react'
import { tuyau } from '~/core/tuyau'
import { LoginShell } from '~/components/admin/layout/login_shell'
import type { FormEvent } from 'react'

export default function LoginPage() {
  const { errors, post, processing, data, setData } = useForm({ email: '', password: '' })

  function submit(event: FormEvent) {
    event.preventDefault()

    if (processing) {
      return
    }

    post(tuyau.$url('admin.auth.login'), {
      onFinish() {
        setData('password', '')
      },
    })
  }

  return (
    <LoginShell title="Sign in to your account">
      {'code' in errors && errors.code === 'E_INVALID_CREDENTIALS' && (
        <span>No account found with the provided credentials</span>
      )}

      <form action="" method="POST" onSubmit={submit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
          />
          {errors.password && <small>{errors.password}</small>}
        </div>

        <button type="submit" disabled={processing}>
          {processing ? 'Loading...' : 'Login'}
        </button>
      </form>
    </LoginShell>
  )
}
