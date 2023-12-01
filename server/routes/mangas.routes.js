const router = require('express').Router();
const mangasControllers = require('../controllers/mangas.controllers');

router.get('/', mangasControllers.allMangas)
router.get('/search', mangasControllers.oneMangaByTitle)
router.get('/favorites', mangasControllers.getFavoriteMangas)
router.post('/like-manga', mangasControllers.addFavoriteMangas);
router.delete('/unlike-manga', mangasControllers.deleteFavoriteMangas);

module.exports = router;