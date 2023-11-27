'use client';

import CardTitle from './CardTitle';
import AnimeObjects from '../interfaces/animeObjects';
import Star from '../components/StarRating';
import Cover from '../components/Cover';

interface Props {
    animes: AnimeObjects[];
    title: string;
}

export default function TopVerticalAnimeCard(props: Props) {
    return (
        <div className=' pr-20 p-5'>
            <CardTitle title='Top' />
            <div className=' scrollbar-thin overflow-auto hide-scrollbar overflow-x-hidden w-full h-full min-h-screen max-h-screen rounded-md dark:bg-dark-card bg-light-card dark:border-black p-5 flex-row space-y-4 '>
                {props.animes.map((anime, index) => {
                    return (
                        <div
                            key={anime.id || index}
                            className='text-start flex items-start space-x-2 p-2 h-44'>
                            <div className='min-w-max min-h-max'>
                                <Cover anime={anime} width={100} height={150} />
                            </div>
                            <div className='w-full flex flex-col justify-between h-[150px]'>
                                <h3 className='font-semibold text-sm text-light line-clamp-3 overflow-hidden overflow-ellipsis'>
                                    {anime.title ?? 'Titre inconnu'}
                                </h3>
                                <p className='font-regular text-xs text-light  align-start'>
                                    {anime.authorName}
                                </p>
                                <p className='font-regular text-xs text-light  align-start'>
                                    {anime.type}
                                </p>

                                <div className='flex flex-col items-end'>
                                    <span className='text-sm text-light'>
                                        <Star
                                            rating={
                                                anime.statistics.rating ?? 0
                                            }
                                            animeId={anime.id}
                                        />
                                    </span>
                                    <span className='text-light text-xs'>
                                        {anime.statistics?.numberOfVotes ?? '0'}{' '}
                                        votes
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
