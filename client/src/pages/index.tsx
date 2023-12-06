'use client';
import { useState, useEffect } from 'react';
import Header from '../components/Headers';
import TopAnimeCard from '../components/cards/TopMangaCard';
import DiscoverAnimeCard from '../components/cards/DiscoverMangaCard';
import NewAnimeCard from '../components/cards/NewMangaCard';
import TopVerticalAnimeCard from '../components/cards/TopVerticalMangaCard';
import { fetchManga } from '../services/MangaTheqApi';
import AnimeObjects from '../interfaces/animeObjects';
import Footer from '../components/footer';

export default function Home() {
    const [animes, setAnimes] = useState<AnimeObjects[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const mangaData = await fetchManga(1);

            setAnimes(mangaData || []);
        };

        loadData();
    }, []);

    const topRatedManga = animes.sort((a, b) => b.statistics.rating - a.statistics.rating);
    const randomManga = animes[Math.floor(Math.random() * animes.length)];
    const newManga = animes.sort((a, b) => b.createdAt - a.createdAt);
    const topRatedMangaVertical = animes.sort((a, b) => b.statistics.rating - a.statistics.rating);

    return (
        <div className='py-6 bg-background-primary dark:bg-dark-background-secondary'>
            <Header />
            <div className='lg:flex lg:flex-row gap-10 mx-24 my-10'>
                <div className='lg:w-3/4'>
                    <div className='lg:flex lg:flex-row gap-10'>
                        {animes.length > 0 && (
                            <div className='w-full lg:w-3/4'>
                                <TopAnimeCard anime={topRatedManga[0]} />
                            </div>
                        )}
                        {animes.length > 1 && (
                            <div className=' lg:w-1/3'>
                                <DiscoverAnimeCard anime={randomManga} />
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <NewAnimeCard animes={newManga} />
                    </div>
                </div>
                <div className='lg:w-1/4'>
                    <TopVerticalAnimeCard
                        animes={topRatedMangaVertical.slice(0, 10)}
                        title='Top Vertical'
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
