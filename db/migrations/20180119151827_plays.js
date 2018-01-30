
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plays', table => {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
    table.date('played_on').defaultTo(null)
    table.string('game_name').notNullable().defaultTo('')
    table.integer('bgg_game_id').defaultTo(0)
    table.string('comment').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plays')
}
