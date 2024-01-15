'use client';

import CardTitle from './CardTitle';
import StarRating from '../svg/StarRating';
import AnimeObjects from '../../interfaces/animeObjects';
import Cover from '../Cover';
import CardsContainer from './CardsContainer';
import React from 'react';

interface Props {
    anime: AnimeObjects;
}

const statusConverter = (status: string) => {
    switch (status) {
        case 'ongoing':
            return 'En cours';
        break;
        case 'completed':
            return 'Terminé';
        break;
        case 'hiatus':
            return 'En pause';
        break;
        case 'cancelled':
            return 'Annulé';
        default:
            return 'Inconnu';
    }
};

const TopAnimeCard: React.FC<Props> = ({ anime }) => {
    return (
        <div>
            <CardTitle title='Top mangas' />

            <CardsContainer tailwindClass='flex space-x-6 w-full h-80 items-center justify-center'>
                <div className='min-w-max'>
                    <Cover anime={anime} size='xlarge' />
                </div>

                <div className='flex flex-col justify-between h-64'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className='text-xl line-clamp-2 overflow-hidden overflow-ellipsis'>
                                {anime.title ?? 'Titre inconnu'}
                            </h3>
                            <span className='text-sm text-element-primary'>
                                {anime.authorName ?? 'Auteur'}
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-sm text-gray-800'>
                                <StarRating
                                    rating={anime.statistics.rating}
                                    animeId={anime.id}
                                />
                            </span>
                            <span className='text-sm text-gray-800'>
                                {anime.statistics.numberOfVotes ?? '0'} votes
                            </span>
                        </div>
                    </div>
                    <p className='text-element-primary max-h-32 scrollbar-thin overflow-auto hide-scrollbar'>
                        {anime.description ??
                            "Aucune description n'est disponible pour ce manga"}
                    </p>

                    <div className='flex-row flex justify-between items-start uppercase text-sm text-element-secondary'>
                        <span className=''>
                            {anime.type ?? 'Manga'}
                        </span>
                        <span className=''>
                            {statusConverter(anime.status) ?? 'Inconnu'}
                        </span>

                        <span className=''>
                            {anime.language.split(' ').slice(0, 3).join(' ') ?? 'Français'}
                        </span>
                    </div>
                </div>
            </CardsContainer>
        </div>
    );
};

export default TopAnimeCard;
