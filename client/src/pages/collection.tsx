import React, { useEffect, useState } from 'react';
import { fetchFavoriteManga } from '../services/MangaTheqApi';
import AnimeObjects from '../interfaces/animeObjects';
import Headers from '../components/header';
import Navigation from '../components/navigation';
import StarRating from '../components/StarRating';
import Pagination from '../components/Pagination';
import Cover from '../components/Cover';
import Link from 'next/link';

interface AnimeId {
    id: string;
    mangaId: string
}

const Collection = () => {
    const [favoriteAnimes, setFavoriteAnimes] = useState<AnimeId[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const loadData = async () => {
            const favoriteMangas = await fetchFavoriteManga();
            setFavoriteAnimes([]);
        };

        loadData();
    }, [currentPage]);

    console.log(favoriteAnimes);
    return (
        <div className='py-6'>
            <Headers />
            <Navigation />
            <div className='flex flex-wrap justify-center mx-2'>
                {favoriteAnimes.map((anime) => (
                    <div>{anime.id}</div>
                ))}
            </div>
            <Pagination
                handlePageChange={handlePageChange}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Collection;
