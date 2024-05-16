import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { Article } from '#articles/models/article'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { ArticleStatus } from '#articles/enums/article_status'
import type { Language } from '#articles/enums/language'

export class ArticleTranslation extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare title: string

  @column()
  declare description: string | null

  @column()
  declare slug: string

  @column()
  declare markdownContent: string

  @column()
  declare markdownRendered: string

  @column()
  declare status: ArticleStatus

  @column()
  declare language: Language

  @column()
  declare viewCount: number

  @column()
  declare articleId: string

  @belongsTo(() => Article)
  declare article: BelongsTo<typeof Article>
}
