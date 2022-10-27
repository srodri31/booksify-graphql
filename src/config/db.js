const knex = require('knex')
const knexfile = require('./knexfile')

exports.db = knex(knexfile.development)

// crete migrations (from root)
// npx knex migrate:make init --migrations-directory src/config/migrations
