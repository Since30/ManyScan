'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Padlock from './svg/Padlock';
import Heart from './svg/Heart';
import Book from './svg/Book';
<<<<<<< HEAD
import LoginForm from '@/pages/auth/login'
=======
import { useAuth } from '../pages/auth/authContext';
>>>>>>> main

export default function Navigation() {
    const { user, logout } = useAuth();
    useEffect(() => {
        console.log("User state in Navigation component:", user);
    }, [user]);
    
    return (
        <nav className='flex flew-row justify-between items-center gap-6 text-element-secondary'>
            <Link href='/allmangas' className='flex items-center px-6 gap-1'>
                <Book />
                Tous les mangas
            </Link>
            <Link href='/collection' className='flex items-center px-4 gap-1'>
                <Heart />
                Ma collection
            </Link>
            <div className='flex items-center justify-between px-3 gap-2 rounded-3xl bg-background-secondary border-4  border-element-secondary'>
                <Padlock />
                <div>
<<<<<<< HEAD
                    <Link href='/login' className=''>
                    Connexion
                </Link>
                <span className=''> / </span>
                <Link href='/register' className=''>
                    Inscription
                </Link>
=======
                {user ? (
                    <>
                        <span className="">{user.username}</span>
                        <button onClick={logout} className="">Déconnexion</button>
                    </>
                ) : (
                    <>
                        <Link href="/auth/login">
                            Connexion
                        </Link>
                        <span> / </span>
                        <Link href="/auth/register">
                           Inscription
                        </Link>
                    </>
                )}
>>>>>>> main
                </div>
            </div>
            
        </nav>
    );
};
