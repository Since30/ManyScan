import Image from 'next/image';
import heartIcon from '../../public/heart.svg';

import AnimeObjects from '../interfaces/animeObjects';
import { useEffect, useState } from 'react';
import { fetchFavoriteManga, addToFavorite, deleteFromFavorite } from '@/services/MangaTheqApi';

interface Props {
    anime: AnimeObjects;
    size: string;
}
interface ImageSize {
    [key: string]: string;
};

const Cover: React.FC<Props> = ({ anime, size }) => {
    const [favoriteMangasList, setFavoriteMangasList] = useState<AnimeObjects[]>([]);

    const imageSizes: ImageSize = {
        small: 'w-[100px] h-[140px]',
        medium: 'w-[150px] h-[210px]',
        large: 'w-[210px] h-[300px]',
    };

   /* useEffect(() => {
        const fetchFavoriteMangasList = async () => {
            await fetchFavoriteManga().then((res) => {
                if (res) setFavoriteMangasList(res);
            }).catch((err) => console.log(err));
        };
        fetchFavoriteMangasList();
    }, []);
    */

    const addToFavorite = async (mangaId: string) => {
        await addToFavorite(mangaId);
        setFavoriteMangasList([...favoriteMangasList as any, mangaId]);
    };

    const removeFromFavorite = async (mangaId: string) => {
        await deleteFromFavorite(mangaId);
    }

    return (
        <div className={`relative ${imageSizes[size]}`}>
            <Image
                className='mx-auto rounded-sm'
                src={anime.cover}
                alt={`Couverture de ${anime.title}`}
                fill
            />
            <div className='absolute top-2 left-2'>
                <Image
                    onClick={() => addToFavorite(anime.id)}
                    src={heartIcon}
                    alt='like button'
                    width={35}
                />
            </div>
        </div>
    );
};

export default Cover;
