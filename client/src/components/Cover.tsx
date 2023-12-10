
import AnimeObjects from '../interfaces/animeObjects';

interface Props {
    anime: AnimeObjects;
    width: number;
    height: number;
}

const Cover: React.FC<Props> = ({ anime, width, height }) => {

   

    return (
        <div className='relative'>
            <img
                className='mx-auto rounded-sm'
                src={anime.cover}
                alt={`Couverture de ${anime.title}`}
                width={width}
                height={height}
            />
       
        </div>
    );
};

export default Cover;
