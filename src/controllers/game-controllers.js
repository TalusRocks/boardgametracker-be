const model = require('../models/game-models')

class GameController {

  static getGames(req, res, next){
    model.getGames()
    .then(games => {
      res.json({games})
    })
  }

}

module.exports = GameController
