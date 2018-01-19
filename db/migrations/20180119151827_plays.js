
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plays', table => {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
    table.integer('game_id')
    table.foreign('game_id').references('id').inTable('games')
    table.string('comment').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plays')
}
