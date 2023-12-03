'use client';
import React, { useEffect, useState } from 'react';
import { fetchManga } from '../services/MangaTheqApi';
import AnimeObjects from '../interfaces/animeObjects';
import Headers from '../components/header';
import Navigation from '../components/navigation';
import StarRating from '../components/StarRating';
import Pagination from '../components/Pagination';
import Cover from '../components/Cover';
import Link from 'next/link';

const AllMangas = () => {
    const [animes, setAnimes] = useState<AnimeObjects[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const loadData = async () => {
            const mangaData = await fetchManga(currentPage);
            setAnimes(mangaData || []);
        };

        loadData();
    }, [currentPage]);

    return (
        <div className='py-6'>
        <Headers />
        <Navigation />
        <div className='flex flex-wrap justify-center mx-2'>
            {animes.map((anime) => (
                <Link key={anime.id} href={`/animes/${anime.id}`}>
                    <div className='flex flex-col justify-center m-4 items-center w-60 h-96 text-center rounded-md dark:bg-dark-card bg-light-card hover:cursor-pointer'>
                        <Cover anime={anime} width={176} height={250}/>
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
                                    {anime.statistics.numberOfVotes ?? '0'}{' '}
                                    votes
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <Pagination handlePageChange={handlePageChange} currentPage={currentPage}/>
    </div>
);
};

export default AllMangas;