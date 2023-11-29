const fetch = require('node-fetch');

const baseUrl = new URL('https://api.mangadex.org/manga');

//Récupération de la cover
const getCover = async (manga) => {
    const mangaId = await manga.id;
    const fileName = await manga.relationships.find(
        (relationship) => relationship.type === 'cover_art'
    ).attributes.fileName;
    const coverUrl = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`;
    return coverUrl;
};

// Récupération du rating
const getStatistics = async (manga) => {
    const mangaId = await manga.id;
    const fetchStatistics = await fetch(
        `https://api.mangadex.org/statistics/manga/${mangaId}`
    );
    const data = await fetchStatistics.json();
    const rating = await data.statistics[manga.id].rating.average;
    const numberOfVotes = await data.statistics[manga.id].rating.distribution;

    const totalVotes = Object.values(numberOfVotes).reduce((sum, value) => sum + value, 0);

    const statistics = {
        rating: rating,
        numberOfVotes: totalVotes,
    };
    return statistics ;
};

// Retourne un array de 20 mangas max
module.exports.searchByTitle = async (title) => {
    if (!title) {
        throw new Error('Title is not specified');
    }
    const params = {
        title: title.toString(),
        limit: 20,
    };

    baseUrl.search = new URLSearchParams(params).toString();

    try {
        const response = await fetch(url);
        const resultsJSON = await response.json();

        return resultsJSON;
    } catch (error) {
        console.error(error);
    }
};

//Retourne un array de 20 mangas
//L'offset permet un affichage 20 par 20 en spécifiant un numéro de page dans la requête

module.exports.getAllMangas = async (page = 1) => {
    // Construction de l'URL de la requête API
    const params = {
        'contentRating[]': 'safe',
        'includes[]': ['cover_art', 'author'], // Regrouper les paramètres 'includes' dans un tableau
        limit: 20,
        offset: page * 20,
    };

    // Ajouter les paramètres à l'URL
    Object.keys(params).forEach((key) => {
        if (Array.isArray(params[key])) {
            // Si la valeur est un tableau, ajoutez chaque élément séparément
            params[key].forEach((value) =>
                baseUrl.searchParams.append(key, value)
            );
        } else {
            baseUrl.searchParams.append(key, params[key]);
        }
    });

    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Création d'un tableau d'objets manga

        const mangasPromises = data.data.map(async (manga) => {
            const coverURL = await getCover(manga);
            const statistics = await getStatistics(manga);

            const mangaObj = {
                id: manga.id,
                title: manga.attributes.title.en,
                description: manga.attributes.description.en,
                type: manga.attributes.publicationDemographic,
                status: manga.attributes.status,
                year: manga.attributes.year,
                createAt: manga.attributes.createdAt,
                updatedAt: manga.attributes.updatedAt,
                language:
                    manga.attributes.availableTranslatedLanguages.join(' '),
                lastChapter: manga.attributes.latestUploadedChapter,
                statistics: statistics,
                //coverFileName: manga.relationships.find((relationship) => relationship.type === 'cover_art').attributes.fileName,
                cover: coverURL,
                authorId: manga.relationships.find(
                    (relationship) => relationship.type === 'author'
                ).id,
                authorName: manga.relationships.find(
                    (relationship) => relationship.type === 'author'
                ).attributes.name,
            };
            return mangaObj;
        });

        // Attendre que toutes les promesses soient résolues
        const mangas = await Promise.all(mangasPromises);

        return mangas;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
