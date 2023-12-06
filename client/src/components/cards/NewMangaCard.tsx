'use client';

import CardTitle from './CardTitle';
import AnimeObjects from '../../interfaces/animeObjects';
import MangaCard from './MangaCard';
import CardsContainer from './CardsContainer';

interface Props {
    animes: Array<AnimeObjects>;
}

const NewAnimeList: React.FC<Props> = ({ animes }) => {
    return (
        <div className='ml-28 p-5'>
            <CardTitle title='Nouveautés' />
            <CardsContainer tailwindClass='scrollbar-thin overflow-auto flex flex-row space-x-4'>
                <ul>
                    {animes.slice(0, 7).map((anime, index) => (
                        <li className='list-none'>
                            <MangaCard
                                anime={anime}
                                index={index}
                                size='small'
                            />
                        </li>
                    ))}
                </ul>
            </CardsContainer>
        </div>
    );
};

export default NewAnimeList;
