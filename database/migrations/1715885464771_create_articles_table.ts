import { BaseSchema } from '@adonisjs/lucid/schema'
import { ArticleStatus } from '#articles/enums/article_status'
import { Language } from '#articles/enums/language'

export default class extends BaseSchema {
  #tableName = 'articles'
  #tableNameTranslations = 'article_translations'
  #tableNameCategories = 'article_categories'

  async up() {
    this.schema.createTable(this.#tableNameCategories, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('gen_random_uuid()').knexQuery)
      table.string('name')
      table.string('slug').unique()
      table.boolean('archived').defaultTo(false)
    })

    this.schema.createTable(this.#tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('gen_random_uuid()').knexQuery)
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.timestamp('published_at')
      table.smallint('old_id').nullable()
      table.jsonb('thumbnail').nullable()
      table.jsonb('featured_thumbnail').nullable()

      table
        .uuid('category_id')
        .references('id')
        .inTable(this.#tableNameCategories)
        .onDelete('SET NULL')
    })

    this.schema.createTable(this.#tableNameTranslations, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('gen_random_uuid()').knexQuery)
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('title').notNullable()
      table.string('description').nullable()
      table.string('slug').notNullable().unique()
      table.string('markdown_content')
      table.string('markdown_rendered')
      table.smallint('language').notNullable().defaultTo(Language.French)
      table.smallint('status').notNullable().defaultTo(ArticleStatus.Draft)
      table.integer('view_count').unsigned().notNullable().defaultTo(0)
      table.uuid('article_id').references('id').inTable(this.#tableName).onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.#tableNameTranslations)
    this.schema.dropTable(this.#tableName)
    this.schema.dropTable(this.#tableNameCategories)
  }
}
