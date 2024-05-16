/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ShowDashboardController = () =>
  import('#admin/dashboard/controllers/show_dashboard_controller')
const LandingController = () => import('../src/pages/controllers/landing_controller.js')
const LoginController = () => import('#admin/auth/controllers/login_controller')

router.get('/', [LandingController, 'render'])

router
  .group(() => {
    router.get('/', [ShowDashboardController, 'render']).as('admin.dashboard')
    router.get('login', [LoginController, 'render']).as('admin.auth.login')
    router.post('login', [LoginController, 'execute'])
  })
  .prefix('admin')
