'use client';

import CardTitle from './CardTitle';
import AnimeObjects from '../interfaces/animeObjects';
import StarRating from '../components/StarRating';
import Cover from '../components/Cover';

interface Props {
    anime: AnimeObjects;
}

const DiscoverAnimeCard: React.FC<Props> = ({ anime }) => {
    return (
        <div className='w-full h-full p-5'>
    <CardTitle title='Découvrir' />
    <div className='w-full h-84 text-center rounded-md border-2 border-red-500 dark:bg-dark-card bg-white p-5 '>
        <Cover anime={anime} width={176} height={250} />
        <div className='flex justify-between w-[90%] mx-auto'>
            <div className='flex flex-col items-start w-[85%]'>
                <h3 className='font-semibold text-start text-lg text-dark line-clamp-2 overflow-hidden overflow-ellipsis'>
                    {anime.title ?? 'Titre'}
                </h3>
                <p className='font-regular text-xs text-dark text-start'>
                    {anime.authorName ?? 'Auteur'}
                </p>
            </div>
            <div className='flex flex-col items-center overflow-ellipsis'>
                <span className='text-sm text-dark'>
                    <StarRating
                        rating={anime.statistics.rating}
                        animeId={anime.id}
                    />
                    {anime.statistics.numberOfVotes ?? '0'} votes
                </span>
            </div>
        </div>
    </div>
</div>

    );
};

export default DiscoverAnimeCard;
