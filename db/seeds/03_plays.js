
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plays').del()
    .then(function () {
      // Inserts seed entries
      return knex('plays').insert([
        {id: 1, user_id: 1, bgg_game_id: 194607, comment: 'close game!', played_on: '2018-01-05'},
        {id: 2, user_id: 1, bgg_game_id: 242301, comment: 'fun', played_on: '2018-01-06'},
        {id: 3, user_id: 1, bgg_game_id: 219102, comment: 'wow', played_on: '2018-01-07'},
        {id: 4, user_id: 1, bgg_game_id: 214329, comment: 'rad', played_on: '2018-01-07'},
        {id: 5, user_id: 1, bgg_game_id: 229980, comment: 'yeah', played_on: '2018-01-08'}
      ])
    }).then(() => {
    return knex.raw(`SELECT setval('plays_id_seq', (SELECT MAX(id) FROM plays));`)
    })
}
