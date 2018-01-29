
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, user_id: 1, name: 'Scythe'},
        {id: 2, user_id: 1, name: 'Star Wars: Destiny'},
        {id: 3, user_id: 1, name: 'Terraforming Mars'},
        {id: 4, user_id: 1, name: 'Castles of Burgundy'},
        {id: 5, user_id: 1, name: 'BEEEEES!'}
      ])
    }).then(() => {
    return knex.raw(`SELECT setval('games_id_seq', (SELECT MAX(id) FROM games));`)
    })
}
