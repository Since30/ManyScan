'use client';

import CardTitle from './CardTitle';
import AnimeOject from '../interfaces/animeObject';

interface Props {
    anime: AnimeOject;
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className='w-full h-full p-5'>
            <CardTitle title='Découvrir' />
            <div className='w-full text-center rounded-md flex-row space-y-2 dark:bg-dark-card bg-light-card p-5 '>
                <img
                    src={`${props.anime.img}`}
                    className='mx-auto rounded-md h-[190px]'
                />
                <p className='font-semibold text-xl text-light'>
                    {props.anime.title}
                </p>
                <p className='font-regular text-sm  text-light'>
                    {props.anime.author}
                </p>
            </div>
        </div>
    );
}
