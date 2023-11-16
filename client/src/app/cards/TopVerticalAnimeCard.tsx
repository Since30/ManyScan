'use client';

import CardTitle from './CardTitle';
import AnimeOject from '../interfaces/animeObject';

interface Props {
    animes: Array<AnimeOject>;
}

export default function TopVerticalAnimeCard(props: Props) {
    return (
        <div className=' pr-20 p-5'>
            <CardTitle title='Top' />
            <div className='overflow-x-hidden overflow-y-scroll w-full h-full min-h-screen max-h-screen rounded-md dark:bg-dark-card bg-light-card dark:border-black p-5 flex-row space-y-4 '>
                {props.animes.map((anime) => {
                    return (
                        <div className='text-start flex items-start space-x-2 p-2'>
                            <img
                                src={`${anime.img}`}
                                className='rounded-md h-[150px]'
                            />
                            <div className='w-full flex-row'>
                                <p className='font-semibold text-xl text-light align-start'>
                                    {anime.title}
                                </p>
                                <p className='font-regular text-sm text-light  align-start'>
                                    {anime.author}
                                </p>
                                <p className='font-regular text-xs text-light  align-start'>
                                    {anime.type}
                                </p>

                                <p className='text-sm mt-10'>
                                    ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
