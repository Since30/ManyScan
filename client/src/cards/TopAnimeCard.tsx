'use client';

import CardTitle from './CardTitle';
import StarRating from '../components/svg/StarRating';
import AnimeObjects from '../interfaces/animeObjects';
import Cover from '../components/Cover';
import Link from 'next/link';


interface Props {
    animes: AnimeObjects;
}

const TopAnimeCard: React.FC<Props> = ({ animes }) => {
    const anime = animes;
    return (
        <div className='h-full ml-28 p-5'>
            <CardTitle title='Top mangas' />
          
            <div className='flex space-x-6 w-full h-82 p-5 rounded-md bg-white border-2 border-red-500 hover:cursor-pointer items-start'>
            <Link key={anime.id} href={`/animes/${anime.id}`}>
                <div className='min-w-max'>
                    <Cover anime={animes} width={210} height={297} />
                </div>
                </Link>
                <div className='flex flex-col content-between justify-between h-80'>
                    <div className='flex justify-between items-center'>
                        <div>
                        <h3 className='font-semibold text-xl text-black max-w-xs line-clamp-2 overflow-hidden overflow-ellipsis'>
                                {animes.title ?? 'Titre inconnu'}
                            </h3>
                            <span className='text-sm text-gray-800'>
                                {animes.authorName ?? 'Auteur'}
                            </span>
                        </div>
                        <div className='flex flex-col items-center min-w-6'>
                        <span className='text-sm text-gray-800'>
                                <StarRating
                                    rating={animes.statistics.rating}
                                    animeId={animes.id}
                                />
                            </span>
                            <span className='text-sm text-gray-800'>
                                {animes.statistics.numberOfVotes ?? '0'} votes
                            </span>
                        </div>
                    </div>
                    <p className='text-gray-800 max-h-32 scrollbar-thin overflow-auto hide-scrollbar'>
                        {animes.description ??
                            "Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois, du fait qu'il détient en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue."}
                    </p>
                    <div className='flex-row lg:flex lg:justify-between uppercase text-sm py-4'>
                    <span className='block font-semibold text-gray-800'>
                            {animes.type ?? 'Manga'}
                        </span>
                        <span className='block font-semibold text-gray-800'>
                            {animes.status ?? 'En cours'}
                        </span>

                        <span className='block font-semibold text-gray-800'>
                            {animes.language ?? 'Français'}
                        </span>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default TopAnimeCard;
