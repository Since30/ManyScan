'use client';

import CardTitle from './CardTitle';
import AnimeObjects from '../interfaces/animeObjects';
import Star from '../components/StarRating';

interface Props {
    animes: Array<AnimeObjects>;
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className='ml-28 p-5 '>
            <CardTitle title='Nouveautés' />
            <div className=' scrollbar-thin overflow-auto hide-scrollbar  rounded-md dark:bg-dark-card bg-light-card p-5 dark:border-black flex flex-row space-x-4'>
                {props.animes.slice(0, 7).map((anime, index) => {
                    return (
                        <div key={anime.id || index}>
                            <div className='flex flex-col items-center text-center w-[190px]'>
                                <img
                                    src={`${anime.cover}`}
                                    alt={anime.title}
                                    className='rounded-md min-h-[210px] min-w-[148px] max-h-[210px] max-w-[148px]'
                                />
                                <h3 className='font-semibold text-lg text-light line-clamp-2 overflow-hidden overflow-ellipsis'>
                                    {anime.title ?? 'Titre inconnu'}
                                </h3>
                                <p className='font-regular text-xs  text-light'>
                                    {anime.authorName ?? 'Auteur inconnu'}
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-sm text-light'>
                                    <Star
                                        rating={anime.statistics.rating}
                                        animeId={anime.id}
                                    />
                                </span>
                                <span className='text-light text-xs'>
                                    {anime.statistics.numberOfVotes ?? '0'}{' '}
                                    votes
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
