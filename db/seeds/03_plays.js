
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plays').del()
    .then(function () {
      // Inserts seed entries
      return knex('plays').insert([
        {id: 1, user_id: 1, game_id: 1, comment: 'cool'},
        {id: 2, user_id: 1, game_id: 2, comment: 'fun'},
        {id: 3, user_id: 1, game_id: 3, comment: 'wow'},
        {id: 4, user_id: 1, game_id: 4, comment: 'rad'},
        {id: 5, user_id: 1, game_id: 5, comment: 'yeah'}
      ])
    })
}
