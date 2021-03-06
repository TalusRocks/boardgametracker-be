
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('user')
    table.string('email').notNullable().defaultTo('')
    table.string('bgg_username').defaultTo('')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
