import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { ArticleCategory } from '#articles/models/article_category'

export default class extends BaseSeeder {
  async run() {
    await ArticleCategory.updateOrCreateMany('slug', [
      { name: 'News', slug: 'news' },
      { name: 'FIFA', slug: 'fifa', archived: true },
      { name: 'Overwatch', slug: 'overwatch', archived: true },
      { name: 'CSGO', slug: 'csgo', archived: true },
      { name: 'CS2', slug: 'cs2' },
      { name: 'Hearthstone', slug: 'hearthstone', archived: true },
      { name: 'Rocket League', slug: 'rocket-league', archived: true },
      { name: 'Fortnite', slug: 'fortnite', archived: true },
      { name: 'Ring of Elysium', slug: 'ring-of-elysium', archived: true },
      { name: 'Super Smash Bros', slug: 'super-smash-bros' },
    ])
  }
}
