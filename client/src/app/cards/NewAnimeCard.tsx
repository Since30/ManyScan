'use client';

import CardTitle from './CardTitle';
import AnimeOject from '../interfaces/animeObjects';

interface Props {
    animes: Array<AnimeOject>;
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className='ml-28 p-5 '>
            <CardTitle title='Nouveautés' />
            <div className='overflow-y-hidden overflow-x-auto rounded-md dark:bg-dark-card bg-light-card p-5 dark:border-black flex flex-row space-x-4'>
                {props.animes.slice(0, 7).map((anime, index) => {
                    return (
                        <div
                            key={anime.id || index}
                            className='text-center flex-row p-5'>
                            <img
                                src={`${anime.img}`}
                                alt={anime.title}
                                className='rounded-md min-h-[210px] min-w-[148px] max-h-[210px] max-w-[148px]'
                            />
                            <p className='font-semibold text-xl text-light'>
                                {anime.title ?? 'Titre'}
                            </p>
                            <p className='font-regular text-sm  text-light'>
                                {anime.author ?? 'Auteur'}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
