const model = require('../models/play-models')
const addPlayFields = ['played_on', 'game_name', 'bgg_game_id']

class PlayController {

  static getPlays(req, res, next){
    model.getPlays()
    .then(plays => {
      res.json({plays})
    })
  }

  static getOnePlay(req, res, next){
    model.getOnePlay(req.params.id)
    .then(play => {
      res.json({play})
    })
  }

  static postPlay(req, res, next){
    model.postPlay(req.body)
    .then(play => {
      res.status(201).json({play})
    })
  }

  static complete(req, res, next){
    const errors = addPlayFields.filter(field => !req.body[field]).map(key => `${key}`)

    if (errors.length){
      const status = 400
      const message = `Please complete fields: ${errors.join(', ')}`
      return next({ status, message })
    }

    return next()
  }

  static editPlay(req, res, next){
    model.editPlay(req.params.id, req.body)
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
