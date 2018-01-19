const express = require('express')
const router = express.Router()
const controller = require('../controllers/game-controllers')

//following 'games/'
router.get('/', controller.getGames)

module.exports = router
