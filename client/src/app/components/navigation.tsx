'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Navigation() {
    const [searchBarVisibility, setSearchBarVisibility] = useState(false);

    function toggleSearchBar() {
        setSearchBarVisibility(!searchBarVisibility);
    }

    return (
        <nav className='transition flex justify-between py-4 items-center font-bold bg-light-card dark:bg-dark-card px-20 m-auto'>
            <div>
                <a
                    href='#'
                    onClick={() => toggleSearchBar()}
                    className='text-light transition'>
                    <svg
                        className='dark:fill-light fill-light'
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
            {searchBarVisibility === false ? (
                <>
                    <a
                        href='#'
                        className='p-2 m-2 text-light text-lg transition'>
                        Accueil
                    </a>
                    <a
                        href='#'
                        className='p-2 m-2 text-light text-lg transition'>
                        Tous les mangas
                    </a>
                    <a
                        href='#'
                        className='p-2 m-2 text-light text-lg transition'>
                        Ma collection
                    </a>
                    <a
                        href='#'
                        className='p-2 m-2 text-light text-lg transition hover:opacity-100'>
                        Se connecter / S'inscrire
                    </a>
                </>
            ) : (
                <>
                    <input
                        type='text'
                        className='w-full border rounded p-2 m-2 text-lightfont-light'
                        placeholder='Chercher un manga'
                    />
                </>
            )}
        </nav>
    );
}
