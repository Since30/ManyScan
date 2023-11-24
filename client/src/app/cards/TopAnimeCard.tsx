'use client';

import CardTitle from './CardTitle';
import Star from '../components/StarRating';

import AnimeObjects from '../interfaces/animeObjects';
interface Props {
    anime: AnimeObjects;
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className='h-full ml-28 p-5'>
            <CardTitle title='Top 5 mangas' />

            <div className='flex space-x-6 overflow-x-hidden overflow-y-hidden w-full scrollbar-thin h-82 p-5 rounded-md dark:bg-dark-card bg-light-card hover:cursor-pointer border-text-light items-start '>
                <img
                    src={`${props.anime.cover}`}
                    className='rounded-md min-h-[297px] min-w-[210px] max-h-[297px] max-w-[210px]'
                />
                <div className='flex flex-col content-between justify-between h-80'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className='font-semibold text-xl text-light max-w-xs line-clamp-2 overflow-hidden overflow-ellipsis'>
                                {props.anime.title ?? 'Titre inconnu'}
                            </h3>
                            <span className='text-sm text-light'>
                                {props.anime.authorName ?? 'Auteur'}
                            </span>
                        </div>
                        <div className='flex flex-col items-center min-w-6'>
                            <span className='text-sm text-light'>
                                <Star
                                    rating={props.anime.statistics.rating}
                                    animeId={props.anime.id}
                                />
                            </span>
                            <span className='text-light text-xs'>
                                {props.anime.statistics.numberOfVotes ?? '0'}{' '}
                                votes
                            </span>
                        </div>
                    </div>
                    <p className='text-light max-h-32 overflow-scroll'>
                        {props.anime.description ??
                            "Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois, du fait qu'il détient en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue."}
                    </p>
                    <div className='flex-row lg:flex lg:justify-between uppercase text-sm py-4'>
                        <span className='block font-semibold text-light'>
                            {props.anime.type ?? 'Manga'}
                        </span>
                        <span className='block font-semibold text-light'>
                            {props.anime.status ?? 'En cours'}
                        </span>

                        <span className='block font-semibold text-light'>
                            {props.anime.language ?? 'Français'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}