'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Result } from 'postcss';



export default function Navigation() {
    const { systemTheme, theme, setTheme } = useTheme();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([])

    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            const response = await fetch(`https://api.mangadex.org/manga?title=${encodeURIComponent(value)}`);
            const data = await response.json();
            console.log("API Response:", data);
            if (data.result === "ok" && Array.isArray(data.data)) {
                setSearchResults(data.data); // Mettez à jour avec le tableau de résultats
            } else {
                setSearchResults([]); // Réinitialisez si la réponse n'est pas ce qui est attendu
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        console.log("Form submitted with searchTerm:", searchTerm);
    };

    const navigateToMangaDetail = (mangaId: string) => {
        router.push(`/animes/${mangaId}`);
    };

return (
    <nav className='bg-white shadow px-4 py-2 flex justify-between items-center flex-wrap'>
    <div>
        <a
            href='#'
            onClick={() => setSearchTerm('')}
            className='text-light transition'>
           <svg
                        className='dark:fill-dark fill-dark'
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='32'
                        height='32'
                        viewBox='0 0 50 50'>
                        <path d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z'></path>
                    </svg>
        </a>
    </div>
    
    <div className="w-full md:w-auto relative mt-2 md:mt-0">
                <input
                    type='text'
                    className='border p-2 rounded w-full md:w-auto'
                    placeholder='Chercher un manga'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {searchResults.length > 0 && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border rounded shadow-lg z-10">
                        {searchResults.map((manga) => (
                            <a
                                key={manga.id}
                                onClick={() => navigateToMangaDetail(manga.id)}
                                className='block p-2 hover:bg-gray-100'
                            >
                                {manga.attributes.title.en}
                            </a>
                        ))}
                    </div>
                )}
            </div>

<>
                    <Link href='/allmangas' className='p-2 m-2 text-dark text-lg transition'>Tous les mangas</Link>
                    <Link href='#' className='p-2 m-2 text-dark text-lg transition'>Ma collection</Link>
                    <div className='flex'>
                        <Link href='/login' className='p-2 m-2 text-dark text-lg transition'>Se connecter</Link>
                        
                        <Link href='/register' className='p-2 m-2 text-dark text-lg transition'>S'inscrire</Link>
                    </div>
                </>
     
    </nav>
);
}

    


