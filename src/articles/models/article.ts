import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { ArticleCategory } from '#articles/models/article_category'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export class Article extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare publishedAt: DateTime

  @column()
  declare oldId: number

  @column()
  declare thumbnail: Record<string, unknown> | null

  @column()
  declare featuredThumbnail: Record<string, unknown> | null

  @column()
  declare categoryId: string

  @belongsTo(() => ArticleCategory)
  declare category: BelongsTo<typeof ArticleCategory>
}
