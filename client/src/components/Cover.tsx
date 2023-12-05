import Image from 'next/image';
import heartIcon from '../../public/heart.svg';
import * as mangaApi from '../services/MangaTheqApi';

import AnimeObjects from '../interfaces/animeObjects';

interface Props {
    anime: AnimeObjects;
    width: number;
    height: number;
}

const Cover: React.FC<Props> = ({ anime, width, height }) => {

    const handleLike = async (mangaId: string) => {
        await mangaApi.addToFavorite(mangaId);
    }

    return (
        <div className='relative'>
            <img
                className='mx-auto rounded-sm'
                src={anime.cover}
                alt={`Couverture de ${anime.title}`}
                width={width}
                height={height}
            />
            <div className='absolute top-2 left-2'>
                <Image onClick={() => handleLike(anime.id)} src={heartIcon} alt='like button' width={35} />
            </div>
        </div>
    );
};

export default Cover;
