
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plays').del()
    .then(() => {
    return knex('games').del()
    })
    .then(() => {
    return knex('users').del()
    })
}
