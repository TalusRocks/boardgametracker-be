const knex = require('../../db/connection')

class PlayModel {

  static getPlays(){
    return knex('plays')
  }

  static postPlay(body){
    console.log(body, "body from play-models");
    //how or where does play id get generated?
    return knex('plays')
      .insert(body)
      .returning('*')
  }
}

module.exports = PlayModel
