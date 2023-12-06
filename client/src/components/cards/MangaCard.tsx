import React from 'react';
import AnimeObjects from '@/interfaces/animeObjects';
import Cover from '@/components/Cover';
import StarRating from '@/components/svg/StarRating';

interface Props {
    anime: AnimeObjects;
    index?: number;
    size: string;
    parentDiv?: string;
    titleDiv?: string;
    titleCSS?: string;
    ratingDiv?: string;
}

const MangaCard: React.FC<Props> = ({ anime, index, size, parentDiv, titleDiv, titleCSS, ratingDiv }) => {

    return (
        <div key={anime.id || index} className={parentDiv}>
            <Cover anime={anime} size={size} />
            <div className={titleDiv}>
                <h3 className={titleCSS}>
                    {anime.title ?? 'Titre inconnu'}
                </h3>
                <p className='font-regular text-xs text-dark'>
                    {anime.authorName ?? 'Auteur inconnu'}
                </p>
            </div>
            <div className={ratingDiv}>
                <span className='text-sm text-dark'>
                    <StarRating
                        rating={anime.statistics.rating}
                        animeId={anime.id}
                    />
                </span>
                <span className='text-dark text-xs'>
                    {anime.statistics.numberOfVotes ?? '0'} votes
                </span>
            </div>
        </div>
    );
};

export default MangaCard;
