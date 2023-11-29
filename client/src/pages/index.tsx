'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import TopAnimeCard from '../cards/TopAnimeCard';
import DiscoverAnimeCard from '../cards/DiscoverAnimeCard';
import NewAnimeCard from '../cards/NewAnimeCard';
import TopVerticalAnimeCard from '../cards/TopVerticalAnimeCard';
import { fetchManga } from '../services/MangaTheqApi';
import AnimeObjects from '../interfaces/animeObjects';
import Footer from '../components/footer';
import AllMangas from '@/components/allmangas';
import Contact from '@/components/contact';

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
    <div className='py-6'>
      <Header />
     
      <div className="lg:flex">
        <div className="lg:w-3/4">
          <div className="lg:flex">
            {animes.length > 0 && (
              <div className="w-full lg:w-3/4 mt-12">
              
                <TopAnimeCard animes={animes[0]} />
              </div>
            )}
            {animes.length > 1 && (
              <div className="w-full lg:w-1/4 mt-12">
                
                <DiscoverAnimeCard anime={animes[1]} />
              </div>
            )}
          </div>
          <div className="w-full">
            <NewAnimeCard animes={animes} />
          </div>
        </div>
        <div className="lg:w-1/4 mt-12">
      
          <TopVerticalAnimeCard animes={animes} title="Top Vertical" />
        </div>
      </div>
      <main>
        <AllMangas />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
