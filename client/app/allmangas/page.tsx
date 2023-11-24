'use client'
import React, { useEffect, useState } from 'react';
import { fetchManga } from '../services/MangaTheqApi';
import AnimeObjects from '@/interfaces/animeObjects';
import Headers from '../components/header';
import Navigation from '../components/navigation';

const AllMangas = () => {
    const [animes, setAnimes] = useState<AnimeObjects[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const mangaData = await fetchManga(1);

            setAnimes(mangaData || []);
        };

        loadData();
    }, []);
    return (
    <div>
        <Headers />
        <Navigation />
        {animes.map((anime) => {
            return (
            <div key={anime.id}>
                <h1>{anime.title}</h1>
                <img src={anime.cover} alt={anime.title} />
                <p>{anime.description}</p>
            </div>
            );
        })}
    </div>);
};

export default AllMangas;
