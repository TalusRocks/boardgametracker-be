const knex = require('../../db/connection')

class GameModel {

  static getGames(){
    return knex('games')
    // .then((games) => {
    //   if(games.length === 0){
    //     //return result
    //     //axios to get from BGG
    //       //nested promise chain
    //       //parseString
    //   } else {
    //     return games
    //   }
    // })
  }
}

module.exports = GameModel
