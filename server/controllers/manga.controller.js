const Manga = require("../models/Manga.model");

module.exports.getAllManga =async (req, res) => {
  try {
    const mangas = await Manga.findAll();
    res.json({ mangas });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports.getMangaId = async (req, res) => {
  try {
    const manga = await Manga.findByPk(req.params.id);
    if (!manga) {
      res.status(404).json({ message: 'Manga non trouvé' });
      return;
    }
    res.json({ manga });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports.editMangaId = async (req, res) => {
  try {
    const manga = await Manga.findByPk(req.params.id);
    if (!manga) {
      res.status(404).json({ message: 'Manga non trouvé' });
      return;
    }

    await manga.update(req.body);
    res.json({ message: 'Manga mis à jour' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports.deleteMangaId = async (req, res) => {
  try {
    const manga = await Manga.findByPk(req.params.id);
    if (!manga) {
      res.status(404).json({ message: 'Manga non trouvé' });
      return;
    }

    await manga.destroy();
    res.json({ message: 'Manga supprimé' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}