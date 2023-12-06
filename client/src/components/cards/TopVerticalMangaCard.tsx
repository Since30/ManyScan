'use client';

import CardTitle from './CardTitle';
import CardsContainer from './CardsContainer';
import AnimeObjects from '../../interfaces/animeObjects';
import Star from '../svg/StarRating';
import Cover from '../Cover';

interface Props {
    animes: AnimeObjects[];
    title: string;
}

export default function TopVerticalAnimeCard(props: Props) {
    return (
        <div>
            <CardTitle title='Top' />
                <CardsContainer tailwindClass='scrollbar-thin overflow-auto overflow-x-hidden  min-h-screen max-h-screen flex flex-col space-y-4'>
                {props.animes.map((anime, index) => {
                    return (
                        <div
                            key={anime.id || index}
                            className='text-start flex items-start space-x-2 p-2 h-44 bg-white rounded shadow-md'>
                            <div className='min-w-max min-h-max'>
                                <Cover anime={anime} size='small' />
                            </div>
                            <div className='w-full flex flex-col justify-between h-[150px]'>
                                <h3 className='font-semibold text-sm text-gray-900 line-clamp-3 overflow-hidden overflow-ellipsis'>
                                    {anime.title ?? 'Titre inconnu'}
                                </h3>
                                <p className='font-regular text-xs text-gray-600 align-start'>
                                    {anime.authorName ?? 'Auteur inconnu'}
                                </p>
                                <p className='font-regular text-xs text-gray-600 align-start'>
                                    {anime.type ?? 'Type inconnu'}
                                </p>

                                <div className='flex flex-col items-end'>
                                    <span className='text-sm text-gray-900'>
                                        <Star
                                            rating={
                                                anime.statistics.rating ?? 0
                                            }
                                            animeId={anime.id}
                                        />
                                    </span>
                                    <span className='text-gray-600 text-xs'>
                                        {anime.statistics?.numberOfVotes ?? '0'}{' '}
                                        votes
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </CardsContainer>
        </div>
    );
}