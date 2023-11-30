const mangaAPI  = require('../mangas-api')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//module.exports.createMangas = (req, res) => {};

module.exports.oneMangaByTitle = async (req, res) => {
   const searchManga = req.query.title;
   const results = await mangaAPI.searchByTitle(searchManga);

   return res.json(results)
};

module.exports.allMangas = async (req, res) => {
    const page = req.query.page;
    const results = await mangaAPI.getAllMangas(page);

    return res.json(results)
};

module.exports.likeMangas = async (req, res) => {
    const mangaId = req.body.mangaId;

    try {
        const favoriteManga = await prisma.favoriteRecipes.create({
            data: {
                mangaId
            }
        });
        return res.status(201).json(favoriteManga)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Oops, something went wrong"})
    }

};

module.exports.unlikeMangas = (req, res) => {
    const mangaId = req.params.id;

    const manga = db.get('mangas').find({ id: mangaId }).value();

    if (!manga) {
        return res.status(404).json({ error: 'Manga not found' });
    }

    db.get('mangas').remove({ id: mangaId }).write();

    return res.json({ message: 'Manga removed from favorites' });
};
