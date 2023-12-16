'use client';

import CardTitle from './CardTitle';
import StarRating from '../svg/StarRating';
import AnimeObjects from '../../interfaces/animeObjects';
import Cover from '../Cover';
import CardsContainer from './CardsContainer';

interface Props {
    anime: AnimeObjects;
}

const TopAnimeCard: React.FC<Props> = ({ anime }) => {
    return (
        <div>
            <CardTitle title='Top mangas' />

            <CardsContainer tailwindClass='flex space-x-6 w-full h-80 items-start'>
                
                <div className='min-w-max'>
                    <Cover anime={anime} size='large' />
                </div>

                <div className='flex flex-col content-between justify-between h-80'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className='font-semibold text-xl text-black max-w-xs line-clamp-2 overflow-hidden overflow-ellipsis'>
                                {anime.title ?? 'Titre inconnu'}
                            </h3>
                            <span className='text-sm text-gray-800'>
                                {anime.authorName ?? 'Auteur'}
                            </span>
                        </div>
                        <div className='flex flex-col items-center min-w-6'>
                            <span className='text-sm text-gray-800'>
                                <StarRating
                                    rating={anime.statistics.rating}
                                    animeId={anime.id}
                                />
                            </span>
                            <span className='text-sm text-gray-800'>
                                {anime.statistics.numberOfVotes ?? '0'} votes
                            </span>
                        </div>
                    </div>
                    <p className='text-gray-800 max-h-32 scrollbar-thin overflow-auto hide-scrollbar'>
                        {anime.description ??
                            "Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois, du fait qu'il détient en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue."}
                    </p>
                    <div className='flex-row lg:flex lg:justify-between uppercase text-sm py-4'>
                        <span className='block font-semibold text-gray-800'>
                            {anime.type ?? 'Manga'}
                        </span>
                        <span className='block font-semibold text-gray-800'>
                            {anime.status ?? 'En cours'}
                        </span>

                        <span className='block font-semibold text-gray-800'>
                            {anime.language ?? 'Français'}
                        </span>
                    </div>
                </div>
            </CardsContainer>
        </div>
    );
};

export default TopAnimeCard;
