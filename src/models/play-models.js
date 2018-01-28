const knex = require('../../db/connection')

class PlayModel {

  static getPlays(){
    return knex('plays')
  }

  static postPlay(body){
    return knex('plays')
      .insert({
        user_id: body.userId,
        game_id: body.gameId,
        comment: body.comment,
        played_on: body.playedOn
      })
  }
}

module.exports = PlayModel
