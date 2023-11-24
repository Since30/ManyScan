'use client';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import TopAnimeCard from './cards/TopAnimeCard';
import DiscoverAnimeCard from './cards/DiscoverAnimeCard';
import NewAnimeCard from './cards/NewAnimeCard';
import TopVerticalAnimeCard from './cards/TopVerticalAnimeCard';

import { fetchManga } from './services/MangaTheqApi';
import AnimeObjects from './interfaces/animeObjects';

export default function Home() {
  const [animes, setAnimes] = useState<AnimeObjects[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const mangaData = await fetchManga(1);

      setAnimes(mangaData || []);
    };

    loadData();
  }, []);

  return (
    <div className='bg-light dark:bg-dark py-6'>
      <Header />
      <Navigation />
      <div className="lg:flex">
        <div className="lg:w-3/4">
          <div className="lg:flex">
            {animes.length > 0 && (
              <div className="w-full lg:w-3/4">
              
                <TopAnimeCard anime={animes[0]} />
              </div>
            )}
            {animes.length > 1 && (
              <div className="w-full lg:w-1/4">
                
                <DiscoverAnimeCard anime={animes[1]} />
              </div>
            )}
          </div>
          <div className="w-full">
            <NewAnimeCard animes={animes} />
          </div>
        </div>
        <div className="lg:w-1/4">
      
          <TopVerticalAnimeCard animes={animes} title="Top Vertical" />
        </div>
      </div>
    </div>
  );
}
