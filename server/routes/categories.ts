const{getCategories} = require('../controllers/categories')
var express = require ('express')
var router = express.Router()

router.get('/', getCategories)

module.exports = router