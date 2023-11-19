import AnimeObjects from '../interfaces/animeObjects';

const fetchMangaCovers = async (): Promise<AnimeObjects[] | null> => {
  try {
    const response = await fetch('https://api.mangadex.org/manga?includes[]=cover_art'); 
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const data = await response.json();

    if (data && Array.isArray(data.data)) {
      const animeObjects: AnimeObjects[] = data.data.map((manga: any) => {
        const mangaId = manga.id;
        const coverArt = manga.relationships.find((rel: any) => rel.type === 'cover_art');
        const coverFilename = coverArt?.attributes?.fileName;
        const coverImageUrl = coverFilename 
          ? `https://uploads.mangadex.org/covers/${mangaId}/${coverFilename}`
          : 'https://uploads.mangadex.org/covers/8f3e1818-a015-491d-bd81-3addc4d7d56a/26dd2770-d383-42e9-a42b-32765a4d99c8.png.256.jpg';

        
        return {
          img: coverImageUrl, 
          title: manga.title,
          author: manga.author,
          type: manga.type,
          chapters: manga.chapters,
          status: manga.status,
          language: manga.language,
          synopsis: manga.synopsis,
        };
      });

      return animeObjects;
    } else {
      console.log('Réponse inattendue de l\'API:', data);
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des couvertures:", error);
    return null;
  }
};

const fetchManga = async (page: number): Promise<AnimeObjects[] | void> => {
  
  try {
    const response = await fetch(`http://localhost:8080/api/mangas?page=${page}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error({ error });
  }
};

export { fetchMangaCovers, fetchManga };

