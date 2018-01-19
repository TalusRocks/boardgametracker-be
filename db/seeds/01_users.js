
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'RJ', email: 'rj@gmail.com', bgg_username: 'PlayBosco'},
        {id: 2, name: 'Kate', email: 'klb@gmail.com', bgg_username: ''}
      ])
    })
}
