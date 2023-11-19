'use client';

import CardTitle from './CardTitle';

import AnimeOject from '../interfaces/animeObject';
interface Props {
    anime: AnimeOject;
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className='h-full ml-28 p-5'>
            <CardTitle title='Top 5 mangas' />
            <div className='flex space-x-6 overflow-x-hidden overflow-y-hidden w-full h-82 p-5 rounded-md dark:bg-dark-card bg-light-card hover:cursor-pointer border-text-light items-start '>
                <img
                    src={`${props.anime.img}`}
                    className='rounded-md min-h-[297px] min-w-[210px] max-h-[297px] max-w-[210px]'
                />
                <div className='flex flex-col content-between justify-between h-80'>
                    <div>
                        <h3 className='font-bold text-2xl text-light'>
                            {props.anime.title ?? 'Titre'}
                        </h3>
                        <span className='text-sm text-light'>
                            {props.anime.author ?? 'Auteur'}
                        </span>
                    </div>
                        <p className='text-light max-h-32 overflow-scroll'>
                            {props.anime.synopsis ?? "Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois, du fait qu'il détient en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue."}
                        </p>
                        <div className='flex-row lg:flex lg:justify-between uppercase text-sm py-4'>
                            <span className='block font-semibold text-light'>
                                {props.anime.type ?? 'Manga'}
                            </span>

                            {props.anime.chapters !== undefined && (
                                <span className='block font-semibold text-light'>
                                    {`${props.anime.chapters} chapitre${
                                        props.anime.chapters > 1 ? 's' : ''
                                    }`}
                                </span>
                            )}
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
