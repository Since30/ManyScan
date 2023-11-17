'use client';

import CardTitle from './CardTitle';
import AnimeOject from '../interfaces/animeObject';

interface Props {
    anime: AnimeOject;
}

const DiscoverAnimeCard: React.FC<Props> = ({ anime, title }) => {  
    const {
        img = 'Url par défault', 
        title: animeTitle = 'Découvrir', 
        author = 'Auteur inconnu',
        synopsis = 'Pas de synopsis disponible',
    } = anime;

    return (

        <div className='w-full h-full p-5'>
            <CardTitle title='Découvrir' />
            <div className='w-full text-center rounded-md flex-row space-y-2 dark:bg-dark-card bg-light-card p-5 '>
                <img src={img} alt={`Couverture de ${animeTitle}`} className="mx-auto rounded-sm h-[190px]"/>
                <p className='font-semibold text-xl text-light'>
                    {animeTitle}
                </p>
                <p className='font-regular text-sm  text-light'>
                    {author}
                </p>
            </div>
        </div>
    );
}

export default DiscoverAnimeCard;

