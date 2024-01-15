import { useState } from 'react';
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa";
import AnimeObjects from '../interfaces/animeObjects';
import {
    addToFavorite,
    deleteFromFavorite,
} from '../services/MangaTheqApi';
import React from 'react';

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
        medium: 'w-[149px] h-[192px]',
        large: 'w-[160px] h-[223px]',
        xlarge: 'w-[200px] h-[278px]',
    };

    const heartIconSizes: HeartIconSize = {
        small: 15,
        medium: 20,
        large: 30,
        xlarge: 35,
    };

    const addMangaToFavorite = async (mangaId: string) => {
        await addToFavorite(mangaId);
        setFavoriteMangasList([...(favoriteMangasList as any), mangaId]);
    };

    const removeFromFavorite = async (mangaId: string) => {
        await deleteFromFavorite(mangaId);
    };

    return (
        <div className={`relative ${coverSizes[size]} hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out`}>
            <Image
                className='mx-auto shadow-img-light dark:shadow-img-dark rounded-md '
                src={anime.cover}
                alt={`Couverture de ${anime.title}`}
                fill
                sizes='(max-width: 640px) 76px, (max-width: 768px) 109px, 160px'
            />
            <div className='absolute bottom-0 p-1 rounded-tr-md rounded-bl-md bg-element-secondary dark:bg-background-primary'>
                <FaRegHeart
                    onClick={() => addMangaToFavorite(anime.id)}
                    size={ heartIconSizes[size]}
                    className='cursor-pointer stroke-background-primary fill-background-primary'
                />
            </div>
        </div>
    );
};

export default Cover;
