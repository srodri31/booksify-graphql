/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = ({

  development: {
    client: 'pg',
    connection: {
      database: 'booksify',
      user: null,
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

});
