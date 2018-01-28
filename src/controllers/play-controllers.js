const model = require('../models/play-models')

class PlayController {

  static getPlays(req, res, next){
    model.getPlays()
    .then(plays => {
      res.json({plays})
    })
  }

  static postPlay(req, res, next){
    model.postPlay(body)
    .then(play => {
      res.json({play})
    })
  }

}

module.exports = PlayController
