import React, { useEffect, useState } from 'react';
import { fetchFavoriteManga } from '../services/MangaTheqApi';
import AnimeObjects from '../interfaces/animeObjects';
import Headers from '../components/header';
import StarRating from '../components/svg/StarRating';
import Cover from '../components/Cover';
import Link from 'next/link';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import * as mangaApi from '../services/MangaTheqApi';

const Collection = () => {
    const [favoriteAnimes, setFavoriteAnimes] = useState<AnimeObjects[]>([]);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetchFavoriteManga();
                if (res) {
                    setFavoriteAnimes(res);
                    // Mettre à jour les favoris à partir de la réponse, si nécessaire
                }
            } catch (err) {
                console.log(err);
            }
        };

        loadData();
    }, []);

    const toggleFavorite = async (mangaId: string) => {
        setFavorites((prevFavorites) => {
            const newFavorites = new Set(prevFavorites);
            if (newFavorites.has(mangaId)) {
                newFavorites.delete(mangaId);
            } else {
                newFavorites.add(mangaId);
            }
            return newFavorites;
        });

        // Si vous souhaitez également mettre à jour les favoris côté serveur
        await mangaApi.addToFavorite(mangaId);
    };

    return (
        <div className='py-6'>
            <Headers />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-2'>
                {favoriteAnimes.map((anime) => (
                    <Link key={anime.id} href={`/animes/${anime.id}`}>
                        <div className='flex flex-col justify-center items-center w-60 h-96 text-center rounded-md dark:bg-dark-card bg-light-card hover:cursor-pointer'>
                            <div className="w-44 h-64 overflow-hidden">
                                <Cover anime={anime} width={176} height={250} />
                            </div>
                            <div className='flex justify-between w-[80%] mt-3 pl-2'>
                                <div className='flex flex-col items-start w-[90%]'>
                                    <h3 className='font-semibold text-start text-lg text-light line-clamp-2 overflow-hidden overflow-ellipsis'>
                                        {anime.title ?? 'Titre'}
                                    </h3>
                                    <p className='font-regular text-xs text-light text-start'>
                                        {anime.authorName ?? 'Auteur'}
                                    </p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='text-sm text-light'>
                                        <StarRating
                                            rating={anime.statistics.rating}
                                            animeId={anime.id}
                                        />
                                        {anime.statistics.numberOfVotes ?? '0'} votes
                                    </span>
                                    <div onClick={() => toggleFavorite(anime.id)}>
                                        {favorites.has(anime.id) ? <FaHeart /> : <FaRegHeart />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Collection;
