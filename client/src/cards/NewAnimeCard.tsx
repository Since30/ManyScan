'use client';

import CardTitle from './CardTitle';
import AnimeObjects from '../interfaces/animeObjects';
import StarRating from '../components/svg/StarRating';
import Cover from '../components/Cover';

interface Props {
    animes: Array<AnimeObjects>;
}

const TopAnimeCard: React.FC<Props> = ({ animes }) => {
    return (
        <div className='ml-28 p-5 '>
            <CardTitle title='Nouveautés' />
            <div className=' scrollbar-thin overflow-auto hide-scrollbar  rounded-md dark:bg-dark-card bg-light-card p-5 dark:border-black flex flex-row space-x-4'>
                {animes.slice(0, 7).map((anime, index) => {
                    return (
                        <div key={anime.id || index}>
                            <div className='flex flex-col items-center text-center w-[190px]'>
                                <Cover anime={anime} width={148} height={210} />
                                <h3 className='font-semibold text-lg text-light line-clamp-2 overflow-hidden overflow-ellipsis'>
                                    {anime.title ?? 'Titre inconnu'}
                                </h3>
                                <p className='font-regular text-xs  text-light'>
                                    {anime.authorName ?? 'Auteur inconnu'}
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-sm text-light'>
                                    <StarRating
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
};

export default TopAnimeCard;
