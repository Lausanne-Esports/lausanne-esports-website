import type { HttpContext } from '@adonisjs/core/http'

export default class ShowDashboardController {
  render({ inertia }: HttpContext) {
    return inertia.render('admin/dashboard')
  }
}
