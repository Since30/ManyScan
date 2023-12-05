import AnimeObjects from '../interfaces/animeObjects';

const fetchManga = async (page: number): Promise<AnimeObjects[] | void> => {
  const url = new URL('http://localhost:8080/api/mangas/');
  try {
    const response = await fetch(`${url}?page=${page}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error({ error });
  }
};

const fetchFavoriteManga = async (): Promise<AnimeObjects[] | void> => {
    const url = new URL('http://localhost:8080/api/mangas/favorites');
    try {
      const response = await fetch(url);
      console.log('url fetchFavManga : ' + url)
      if (!response.ok) {
        throw new Error(`Erreur HTTP ffM: ${response.status}`);
      }
  
      const favoritesMangas = await response.json();
  
      return favoritesMangas;
  
    } catch (error) {
      console.error({ error });
    }
};

const addToFavorite = async (mangaId: string): Promise<AnimeObjects[] | void> => {
    
    try {
      const response = await fetch(`http://localhost:8080/api/mangas/like-manga`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mangaId }),
      });
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error({ error });
    }
};

const deleteFromFavorite = async (mangaId: string): Promise<AnimeObjects[] | void> => {
      
    try {
      const response = await fetch(`http://localhost:8080/api/mangas/unlike-manga`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mangaId }),
      });
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error({ error });
    }
}

export { fetchManga, addToFavorite, deleteFromFavorite, fetchFavoriteManga };

