import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa";
import AnimeObjects from '../interfaces/animeObjects';
import {
    fetchFavoriteManga,
    addToFavorite,
    deleteFromFavorite,
} from '@/services/MangaTheqApi';

interface Props {
    anime: AnimeObjects;
    size: string;
}
interface CoverSize {
    [key: string]: string | number;
}

interface HeartIconSize {
    [key: string]: number;
}

const Cover: React.FC<Props> = ({ anime, size }) => {
    const [favoriteMangasList, setFavoriteMangasList] = useState<
        AnimeObjects[]
    >([]);

    const coverSizes: CoverSize = {
        small: 'w-[76px] h-[106px]',
        medium: 'w-[109px] h-[152px]',
        large: 'w-[160px] h-[223px]',
    };

    const heartIconSizes: HeartIconSize = {
        small: 20,
        medium: 25,
        large: 35,
    };

    const addMangaToFavorite = async (mangaId: string) => {
        await addToFavorite(mangaId);
        setFavoriteMangasList([...(favoriteMangasList as any), mangaId]);
    };

    const removeFromFavorite = async (mangaId: string) => {
        await deleteFromFavorite(mangaId);
    };

    return (
        <div className={`relative ${coverSizes[size]}`}>
            <Image
                className='mx-auto shadow-img-light dark:shadow-img-dark rounded-md hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out'
                src={anime.cover}
                alt={`Couverture de ${anime.title}`}
                fill
                sizes='(max-width: 640px) 76px, (max-width: 768px) 109px, 160px'
            />
            <div className='absolute bottom-0 p-1 rounded-tr-md rounded-bl-md bg-element-secondary dark:bg-background-primary'>
                <FaRegHeart
                    onClick={() => addMangaToFavorite(anime.id)}
                    size={ heartIconSizes[size]}
                    className='cursor-pointer stroke-background-primary fill-background-primary00'
                />
            </div>
        </div>
    );
};

export default Cover;
