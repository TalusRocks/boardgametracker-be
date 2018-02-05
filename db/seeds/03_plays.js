
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plays').del()
    .then(function () {
      // Inserts seed entries
      return knex('plays').insert([
        {id: 1, user_id: 1, game_name: 'Example Game', bgg_game_id: 169786, comment: 'Example Comment', played_on: '2018-01-01'}
      ])
    }).then(() => {
    return knex.raw(`SELECT setval('plays_id_seq', (SELECT MAX(id) FROM plays));`)
    })
}
