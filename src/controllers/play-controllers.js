const model = require('../models/play-models')

class PlayController {

  static getPlays(req, res, next){
    model.getPlays()
    .then(plays => {
      res.json({plays})
    })
  }

  static postPlay(req, res, next){
    model.postPlay(req.body)
    .then(play => {
      res.status(201).json({play})
    })
  }

  static deleteAllPlays(req, res, next){
    model.deleteAllPlays()
    .then(plays => {
      res.status(201).json({plays})
    })
  }

}

module.exports = PlayController
