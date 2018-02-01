const knex = require('../../db/connection')

class PlayModel {

  static getPlays(){
    return knex('plays')
  }

  static getOnePlay(id){
    return knex('plays')
      .where({ id })
      .first()
  }

  static postPlay(body){
    return knex('plays')
      .insert(body)
      .returning('*')
  }

  static editPlay(id, body){
    return knex('plays')
      .update({
        played_on: body.played_on,
        game_name: body.game_name,
        bgg_game_id: body.bgg_game_id,
        comment: body.comment
      })
      .where({ id })
      .returning('*')
  }

  static deleteAllPlays(){
    return knex('plays')
      .del()
      .then(() => {
        return knex('plays')
      })
  }
}

module.exports = PlayModel
