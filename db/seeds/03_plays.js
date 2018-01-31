
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plays').del()
    .then(function () {
      // Inserts seed entries
      return knex('plays').insert([
        {id: 1, user_id: 1, game_name: 'Scythe', bgg_game_id: 169786, comment: 'close game!', played_on: '2018-01-01'},
        {id: 2, user_id: 1, game_name: 'Star Wars: Destiny', bgg_game_id: 205359, comment: 'First time with the Legacies set. Yoda!', played_on: '2018-01-01'},
        {id: 3, user_id: 1, game_name: 'Scythe', bgg_game_id: 169786, comment: '7-player birthday game!', played_on: '2018-01-03'},
        {id: 4, user_id: 1, game_name: 'Terraforming Mars', bgg_game_id: 167791, comment: 'Played with Kate and Gina', played_on: '2018-01-05'},
        {id: 5, user_id: 1, game_name: 'seed 5', bgg_game_id: 182874, comment: 'Love dice drafting.', played_on: '2018-01-08'}
      ])
    }).then(() => {
    return knex.raw(`SELECT setval('plays_id_seq', (SELECT MAX(id) FROM plays));`)
    })
}
