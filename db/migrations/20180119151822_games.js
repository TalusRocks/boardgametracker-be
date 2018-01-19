
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
    table.string('name').notNullable().defaultTo('')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
}
