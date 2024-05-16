import type { HttpContext } from '@adonisjs/core/http'

export default class LandingController {
  render({ inertia }: HttpContext) {
    return inertia.render('landing')
  }
}
