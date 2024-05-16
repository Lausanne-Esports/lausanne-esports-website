import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { User } from '#auth/models/user'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'romain@example.com',
      password: 'secret',
    })
  }
}
