import Image from 'next/image';
import AnimeObjects from '@/interfaces/animeObjects';
import heartIcon from '../../public/heart.svg';

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
            <div className='absolute top-2 left-2'><Image src={heartIcon} alt='like button' width={35} /></div>
        </div>
    );
};

export default Cover;
