'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import TopAnimeCard from '../cards/TopAnimeCard';
import DiscoverAnimeCard from '../cards/DiscoverAnimeCard';
import NewAnimeCard from '../cards/NewAnimeCard';
import TopVerticalAnimeCard from '../cards/TopVerticalAnimeCard';
import { fetchMangaCovers } from '../services/MangaTheqApi';
import AnimeObject from '../interfaces/animeObject';

export default function Home() {
  const [animes, setAnimes] = useState<AnimeObject[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMangaCovers();
      setAnimes(data || []);
    };

    loadData();
  }, []);

  return (
    <div className="dark:bg-black bg-white">
      <Header />
      <Navigation />
      <div className="lg:flex">
        <div className="lg:w-3/4">
          <div className="lg:flex">
            {animes.length > 0 && (
              <div className="w-full lg:w-3/4">
                <TopAnimeCard key={animes[0].id} anime={animes[0]} />
              </div>
            )}
            {animes.length > 1 && (
              <div className="w-full lg:w-1/4">
                <DiscoverAnimeCard anime={animes[1]} title={''} />
              </div>
            )}
          </div>
          <div className="w-full">
            <NewAnimeCard animes={animes} />
          </div>
        </div>
        <div className="lg:w-1/4">
          <TopVerticalAnimeCard title='Top ' animes={animes} />
        </div>
      </div>
    </div>
  );
}
