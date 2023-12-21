'use client';

import React from 'react';
import CardTitle from './CardTitle';
import CardsContainer from './CardsContainer';
import AnimeObjects from '../../interfaces/animeObjects';
import MangaCard from './MangaCard';

interface Props {
    animes: AnimeObjects[];
}

export default function TopVerticalAnimeCard(props: Props) {
    return (
        <div>
            <CardTitle title='Top' />
            <CardsContainer tailwindClass='scrollbar-thin overflow-auto overflow-x-hidden  min-h-screen max-h-screen flex flex-col space-y-4'>
                {props.animes.map((anime) => {
                    return (
                        <MangaCard anime={anime} size='small' parentDiv='flex gap-5' ratingDiv='w-32' titleDiv='w-32' />
                    );
                })}
            </CardsContainer>
        </div>
    );
}
