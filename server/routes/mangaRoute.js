const express = require('express');

const router = express.Router();
const mangaController = require("../controllers/manga.controller")


//----- Liste des mangas
router.get('/all', mangaController.getAllManga);
//----- Détails d'un manga par ID
router.get('/manga/:id', mangaController.getMangaId);
//----- Mettre à jour un manga
router.put('/manga/edit/:id', mangaController.editMangaId);
//----- Supprimer un manga
router.delete('/manga/delete/:id', mangaController.deleteMangaId);


module.exports = router;