'use client';
import React, { useEffect, useState } from 'react';
import { fetchManga } from '../services/MangaTheqApi';
import AnimeObjects, { MangaObjects } from '../interfaces/animeObjects';
import Pagination from '../components/Pagination';
import Header from '@/components/Headers';

import * as mangaApi from '../services/MangaTheqApi';
import { mangaFakeData } from '../services/mangaData';
import CardsContainer from '@/components/cards/CardsContainer';
import MangaCard from '@/components/cards/MangaCard';
import CardTitle from '@/components/cards/CardTitle';

const AllMangas = () => {
    const [mangas, setAnimes] = useState<AnimeObjects[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [favorites, setFavorites] = useState<AnimeObjects[] | string[]>();

    const MANGAS_PER_PAGE = 20;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const loadData = async () => {
            const mangaData = await fetchManga(currentPage, MANGAS_PER_PAGE);
            setAnimes(mangaData || []);
        };

        const loadFavoriteManga = async () => {
            const favoriteMangaData = await mangaApi.fetchFavoriteManga();
            setFavorites(favoriteMangaData || []);
            console.log(favoriteMangaData);
        };

        loadData();
        loadFavoriteManga();
    }, [currentPage]);

    return (
        <div className='py-6 bg-background-primary'>
            <Header />

            <div className='m-16'>
                <CardTitle title='Tous les mangas' />
                <CardsContainer tailwindClass=''>
                    <div className='flex flex-col'>
                        <div className='flex flex-wrap justify-center mx-2'>
                            {mangaFakeData.map((manga) => (
                                <MangaCard
                                    key={manga.id}
                                    manga={manga as unknown as MangaObjects}
                                    size='large'
                                    parentDiv='flex flex-col justify-center items-center w-52 h-96 text-center'
                                     childDiv='flex flex-col w-[80%] mt-3 pl-2'
                                    titleDiv='flex flex-col items-start w-[90%]'
                                    titleCSS='text-start line-clamp-2 overflow-hidden overflow-ellipsis'
                                    ratingDiv='flex-row'
                                />
                            ))}
                        </div>
                        <div className='flex items-end justify-end w-full'>
                            <Pagination
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </CardsContainer>
            </div>
        </div>
    );
};

export default AllMangas;
