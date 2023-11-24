import AnimeObjects from '../interfaces/animeObjects';

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

export { fetchManga };

