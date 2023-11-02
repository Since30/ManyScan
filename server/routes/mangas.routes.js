const router = require('express').Router();
const mangasControllers = require('../controllers/mangas.controllers');

router.get('/', mangasControllers.allMangas)
router.get('/search', mangasControllers.oneMangaByTitle)

/* non utilisées pour l'instant
router.post('/', mangasControllers.createMangas)
router.put('/:id', mangasControllers.updateMangas)
router.delete('/', mangasControllers.deleteMangas)
*/
router.patch('/like-mangas/:id', mangasControllers.likeMangas);
router.patch('/unlike-mangas/:id', mangasControllers.unlikeMangas);

module.exports = router;