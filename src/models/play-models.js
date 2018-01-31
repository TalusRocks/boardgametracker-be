const knex = require('../../db/connection')

class PlayModel {

  static getPlays(){
    return knex('plays')
  }

  static postPlay(body){
    return knex('plays')
      .insert(body)
      .returning('*')
  }
}

module.exports = PlayModel
