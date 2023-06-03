const{getChannel} = require('../controllers/channels')
var express = require ('express')
var router = express.Router()

router.get('/:id', getChannel)

module.exports = router