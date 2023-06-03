const{getPopularVideos, getVideosById, getVideoById, getComments, getVideosByCategory} = require('../controllers/videos')
var express = require ('express')
var router = express.Router()

router.get('/', getPopularVideos)
router.get('/category/:id', getVideosByCategory);
router.get('/:id', getVideosById);
router.get('/comments/:id', getComments);


module.exports = router