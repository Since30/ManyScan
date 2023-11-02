const url = new URL('https://api.mangadex.org/manga');


// Retourne un array de 20 mangas max
module.exports.searchByTitle = async (title) => {
    if(!title){
        throw new Error ('Title is not specified')
    }
    const params = {
        title: title.toString(),
        limit: 20    
    };
    
    url.search = new URLSearchParams(params).toString();
    
    try {
        const response = await fetch(url);
        const resultsJSON = await response.json();
        
        return resultsJSON;
        
    } catch (error) {
        console.log(error);
    }
};

//Retourne un array de 100 mangas max 
//l'offset permet un affichage 20 par 20 en spécifiant un numéro de page dans la requête
module.exports.getAllMangas = async (page) => {

    const params = {
        limit: 100,
        offset: (page * 10).toString()
    };

    url.search = new URLSearchParams(params).toString();
    
    try {
        const response = await fetch(url);
        const resultsJSON = await response.json();
        
        return resultsJSON;
        
    } catch (error) {
        console.log(error);
    }
};
/*
module.exports.getMangaCover = async (mangaId, coverFileName) => {

    const coverUrl = new URL(`https://uploads.mangadex.org/covers/${mangaId}/${coverFileName}`)
    const params = {
        includes[]: cover_art
    };

    url.search = new URLSearchParams(params).toString();
    
    try {
        const response = await fetch(url);
        const resultsJSON = await response.json();
        
        return resultsJSON;
        
    } catch (error) {
        console.log(error);
    }
};
*/