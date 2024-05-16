import { BaseModel, column } from '@adonisjs/lucid/orm'

export class ArticleCategory extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare slug: string

  @column()
  declare archived: boolean
}
