
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plays').del()
    .then(function () {
      // Inserts seed entries
      return knex('plays').insert([
        {id: 1, user_id: 1, game_name: 'Example 1', bgg_game_id: 169786, comment: 'Simple sample comment', played_on: '2018-01-01'},
        {id: 2, user_id: 1, game_name: 'Example 2', bgg_game_id: 205359, comment: 'An excited sample comment!', played_on: '2018-01-01'},
        {id: 3, user_id: 1, game_name: 'Example 3', bgg_game_id: 169786, comment: '', played_on: '2018-01-03'}
      ])
    }).then(() => {
    return knex.raw(`SELECT setval('plays_id_seq', (SELECT MAX(id) FROM plays));`)
    })
}
