'use client';

import CardTitle from './CardTitle';
import AnimeObjects from '../interfaces/animeObjects';
import StarRating from '../components/StarRating';
import Cover from '../components/Cover';

interface Props {
    animes: Array<AnimeObjects>;
}

const TopAnimeCard: React.FC<Props>= ({animes}) => {
    return (
        <div className='ml-28 p-5'>
    <CardTitle title='Nouveautés' />
    <div className='scrollbar-thin overflow-auto hide-scrollbar rounded-md border-2 border-red-500 dark:bg-dark-card bg-white p-5 dark:border-black flex flex-row space-x-4'>
        {animes.slice(0, 7).map((anime, index) => {
            return (
                <div key={anime.id || index} className='w-[190px]'>
                    <div className='flex flex-col items-center text-center'>
                        <Cover anime={anime} width={148} height={210} />
                        <h3 className='font-semibold text-lg text-dark line-clamp-2 overflow-hidden overflow-ellipsis'>
                            {anime.title ?? 'Titre inconnu'}
                        </h3>
                        <p className='font-regular text-xs text-dark'>
                            {anime.authorName ?? 'Auteur inconnu'}
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-sm text-dark'>
                            <StarRating
                                rating={anime.statistics.rating}
                                animeId={anime.id}
                            />
                        </span>
                        <span className='text-dark text-xs'>
                            {anime.statistics.numberOfVotes ?? '0'} votes
                        </span>
                    </div>
                </div>
            );
        })}
    </div>
</div>

    );
}

export default TopAnimeCard