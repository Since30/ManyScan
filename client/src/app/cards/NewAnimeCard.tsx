'use client';

import CardTitle from './CardTitle';
import AnimeOject from '../interfaces/animeObject';

interface Props {
    animes: Array<AnimeOject>;
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className='ml-28 p-5 '>
            <CardTitle title='Nouveautés' />
            <div className='overflow-x-scroll overflow-y-hidden w-full min-h-fit max-h-fit h-fit rounded-md dark:bg-dark-card bg-light-card p-5 dark:border-black flex space-x-4'>
                {props.animes.map((anime) => {
                    return (
                        <div className='text-center flex-row space-y-2 p-5'>
                            <img src={`${anime.img}`} className='rounded-md' />
                            <p className='font-semibold text-xl text-light'>
                                {anime.title}
                            </p>
                            <p className='font-regular text-sm  text-light'>
                                {anime.author}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
