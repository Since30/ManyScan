import React, { useEffect, useState } from 'react';
import { fetchFavoriteManga } from '../services/MangaTheqApi';
import AnimeObjects from '../interfaces/animeObjects';
import Headers from '../components/Headers';
import * as mangaApi from '../services/MangaTheqApi';
import MangaCard from '@/components/cards/MangaCard';
import CardsContainer from '@/components/cards/CardsContainer';
import CardTitle from '@/components/cards/CardTitle';

const Collection = () => {
    const [favoriteAnimes, setFavoriteAnimes] = useState<AnimeObjects[]>([]);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetchFavoriteManga();
                if (res) {
                    setFavoriteAnimes(res);
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
        <div className='py-6 bg-background-primary'>
            <Headers />
            <div className='flex m-16 gap-5'>
                <div className='w-1/3 h-60'>
                    <CardTitle title='Profil' />
                    <CardsContainer tailwindClass='flex flex-col p-2 items-center'>
                        <div className='flex gap-5 items-center'>
                            <div className='bg-element-primary rounded-full w-40 h-40'></div>
                            <div className='flex flex-col gap-10'>
                                <div>Pseudo</div>
                                <div>
                                    <p>Mes favoris</p>
                                    <p> ❤️ 23 likes</p>
                                </div>
                                <div>
                                    <p>Mes lectures en cours</p>
                                    <p> 📖 23 mangas</p>
                                </div>
                            </div>
                        </div>
                        <div className='items-center h-6'>Décorations</div>
                    </CardsContainer>
                </div>
                <div className='w-2/3'>
                    <CardTitle title='Favoris' />
                    <CardsContainer tailwindClass='scrollbar-thin overflow-auto flex flex-row space-x-10 h-auto p-5 gap-4'>
                        <div className='flex flex-row justify-center'>
                            {favoriteAnimes.map((manga) => (
                                <MangaCard
                                    key={manga.id}
                                    manga={manga}
                                    isFavorite={favorites.has(manga.id)}
                                    toggleFavorite={toggleFavorite}
                                    size='small'
                                    parentDiv='flex flex-col justify-center items-center w-40 h-auto text-center'
                                    childDiv='flex flex-col w-[80%] mt-3  items-center'
                                    titleDiv='flex flex-col items-center w-[90%] text-xs '
                                    titleCSS='text-center line-clamp-2 overflow-hidden overflow-ellipsis'
                                    ratingDiv='flex-row'
                                />
                            ))}
                        </div>
                    </CardsContainer>
                </div>
            </div>
            <div className='mx-16 gap-5'>
                <CardTitle title='Lecture en cours' />
                <CardsContainer tailwindClass=''>
                    <div>Lecture en cours ici</div>
                </CardsContainer>
            </div>
        </div>
    );
};

export default Collection;
