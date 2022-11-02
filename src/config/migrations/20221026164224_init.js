/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("library", table => {
    table.increments('id').unique()
    table.string('name').notNullable()
    table.string('address').notNullable()
    table.string('city').notNullable()
    table.string('schedule').notNullable()
    // params createdAt, updatedAt
    table.timestamps(true, true)
  }).createTable("book", table => {
    table.increments('id').unique()
    table.string('title').notNullable()
    table.string('published_on').notNullable()
    table.string('editorial').notNullable()
    table.string('description')
    table.bigInteger('library_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('library');
    // params createdAt, updatedAt
    table.timestamps(true, true)
  }).createTable("author", table => {
    table.increments('id').unique()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.integer('age').notNullable()
    // params createdAt, updatedAt
    table.timestamps(true, true)
  }).createTable("genre", table => {
    table.increments('id').unique()
    table.string('name').notNullable()
    table.string('description')
    // params createdAt, updatedAt
    table.timestamps(true, true)
  }).createTable("book_genre", table => {
    table.increments('id').unique()
    table.bigInteger('book_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('book');
    table.bigInteger('genre_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('genre');
  }).createTable("book_author", table => {
    table.increments('id').unique()
    table.bigInteger('book_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('book');
    table.bigInteger('author_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('author');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("book_author")
    .dropTable("book_genre")
    .dropTable("genre")
    .dropTable("author")
    .dropTable("book")
    .dropTable("library")
};
