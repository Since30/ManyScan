import CardTitle from './CardTitle';
import AnimeObjects from '../../interfaces/animeObjects';
import CardsContainer from './CardsContainer';
import MangaCard from './MangaCard';
import React from 'react';

interface Props {
    anime: AnimeObjects;
}

const DiscoverAnimeCard: React.FC<Props> = ({ anime }) => {
    return (
        <div>
            <CardTitle title='Découvrir' />
            <CardsContainer tailwindClass='h-80 flex items-center justify-center'>
                <MangaCard
                    anime={anime}
                    size='medium'
                    parentDiv='flex flex-col items-center text-center'
                    childDiv='flex flex-col items-center'
                    titleCSS='text-lg line-clamp-2 overflow-hidden overflow-ellipsis mt-1'
                    ratingDiv='flex items-center overflow-ellipsis'
                />
            </CardsContainer>
        </div>
    );
};

export default DiscoverAnimeCard;
