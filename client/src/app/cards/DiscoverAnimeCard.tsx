'use client';

import CardTitle from './CardTitle';
import AnimeObjects from '../interfaces/animeObjects';

interface Props {
    anime: AnimeObjects;
}

const DiscoverAnimeCard: React.FC<Props> = ({ anime }) => {
    return (
        <div className='w-full h-full p-5'>
            <CardTitle title='Découvrir' />
            <div className='w-full h-84 text-center rounded-md flex-row space-y-2 dark:bg-dark-card bg-light-card p-5 '>
                <img
                    src={anime.cover}
                    alt={`Couverture de ${anime.title}`}
                    className='mx-auto rounded-sm min-h-[250px] min-w-[176px] max-h-[250px] max-w-[176px]'
                />
                <div className='flex justify-between mx-auto px-2'>
                    <div className='flex flex-col items-start'>
                        <p className='font-semibold text-xl text-light'>
                            {anime.title ?? 'Titre'}
                        </p>
                        <p className='font-regular text-sm  text-light'>
                            {anime.authorName ?? 'Auteur'}
                        </p>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span>⭐️</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverAnimeCard;
