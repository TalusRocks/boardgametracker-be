const knex = require('../../db/connection')

class GameModel {

  static getGames(){
    return knex('games')
  }
}

module.exports = GameModel
