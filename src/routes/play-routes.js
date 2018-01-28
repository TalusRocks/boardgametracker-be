const express = require('express')
const router = express.Router()
const controller = require('../controllers/play-controllers')

//following 'plays/'
router.get('/', controller.getPlays)
router.post('/', controller.postPlay)


module.exports = router
