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
            <div className='overflow-x-scroll overflow-y-hidden w-full rounded-md dark:bg-dark-card bg-light-card hover:cursor-pointer border-text-light p-5 flex space-x-4 items-center '>
                <img src={`${props.anime.img}`} className='rounded-md' />
                <div className='flex-col justify-between'>
                    <span className='font-bold text-2xl text-light'>
                        {props.anime.title}
                    </span>
                    <p className='text-light'>
                        {
                            // L'emploi de "??" permet de se prémunir d'erreur si la valeur que
                            // l'on veut afficher est nulle (telle que définie dans AnimeObject.ts)
                        }
                        {props.anime.synopsis ?? ''}
                    </p>
                    <div className='flex-row lg:flex lg:justify-between uppercase  text-sm py-4'>
                        <span className='block font-semibold text-light'>
                            {props.anime.type ?? 'Manga'}
                        </span>

                        <span className='block font-semibold text-light'>
                            {props.anime.chapters ?? 0} chapitres
                        </span>

                        <span className='block font-semibold text-light'>
                            {props.anime.status ?? ''}
                        </span>

                        <span className='block font-semibold text-light'>
                            {props.anime.language ?? ''}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
