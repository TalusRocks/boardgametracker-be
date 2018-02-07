const express = require('express')
const router = express.Router()
const controller = require('../controllers/play-controllers')

//following 'plays/'
router.get('/', controller.getPlays)
router.get('/:id', controller.getOnePlay)
router.post('/', controller.complete, controller.postPlay)
router.put('/:id', controller.complete, controller.editPlay)
router.delete('/', controller.deleteAllPlays)


module.exports = router
