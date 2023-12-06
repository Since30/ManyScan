import CardTitle from './CardTitle';
import AnimeObjects from '../../interfaces/animeObjects';
import StarRating from '../svg/StarRating';
import CardsContainer from './CardsContainer';
import MangaCard from './MangaCard';

interface Props {
    anime: AnimeObjects;
}

const DiscoverAnimeCard: React.FC<Props> = ({ anime }) => {
    return (
        <div>
            <CardTitle title='Découvrir' />
            <CardsContainer tailwindClass='h-80'>
                <MangaCard
                    anime={anime}
                    size='medium'
                    parentDiv='flex flex-col items-center text-center'
                    titleCSS='text-lg line-clamp-2 overflow-hidden overflow-ellipsis'
                    ratingDiv='flex flex-col items-center overflow-ellipsis'
                />
            </CardsContainer>
        </div>
    );
};

export default DiscoverAnimeCard;
