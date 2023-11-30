'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Toggle from './ToggleDarkMode';
import { useTheme } from 'next-themes';


export default function Navigation() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [searchBarVisibility, setSearchBarVisibility] = useState(false);

    function toggleSearchBar() {
        setSearchBarVisibility(!searchBarVisibility);
    }

return (
    <>
        <nav className='wave-border transition flex justify-between py-4 items-center font-bold  px-20 m-auto'>
            <div>
                <a
                    href='#'
                    onClick={() => toggleSearchBar()}
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
            {!searchBarVisibility ? (
                <>
                    
                    <Link href='/allmangas' className='p-2 m-2 text-dark text-lg transition'>Tous les mangas</Link>
                    <Link href='#' className='p-2 m-2 text-dark text-lg transition'>Ma collection</Link>
                    <div className='flex'>
                        <Link href='/login' className='p-2 m-2 text-dark text-lg transition'>Se connecter</Link>
                        
                        <Link href='/register' className='p-2 m-2 text-dark text-lg transition'>S'inscrire</Link>
                    </div>
                </>
            ) : (
                <input
                    type='text'
                    className='w-full border rounded p-2 m-2 text-dark font-light'
                    placeholder='Chercher un manga'
                />
                
            )}
             <Toggle
            
            value={false}
            onChangeHandler={(value: boolean) => {
                if (theme == 'dark') {
                    setTheme('light');
                } else {
                    setTheme('dark');
                }
                console.log(value);
            }}
            label='Dark mode'
            />
          
        </nav>
        
        </> 
    );

}
    


