'use client';

import React from 'react';
import AnimeObject from "../interfaces/animeObject";
import CardTitle from "./CardTitle";

interface Props {
    anime: AnimeObject;
    title: string; 
}

const DiscoverAnimeCard: React.FC<Props> = ({ anime, title }) => {  
    const {
        img = 'Url par défault', 
        title: animeTitle = 'Découvrir', 
        author = 'Auteur inconnu',
        synopsis = 'Pas de synopsis disponible',
    } = anime;

    return (
        <div className="w-full h-full p-5">
            <CardTitle title= "Découvrir" /> 
            <div className="w-full min-h-full max-h-full h-full border text-center shadow rounded-sm flex-row space-y-2 dark:bg-black bg-white p-5 dark:border-black">
                <img src={img} alt={`Couverture de ${animeTitle}`} className="mx-auto rounded-sm"/>
                <div>
                    <h2 className="font-bold font-2xl dark:text-white text-black opacity-90">{animeTitle}</h2>
                    <p className="dark:text-white text-black opacity-70">{synopsis}</p>
                    <p className="dark:text-white text-black opacity-70">{author}</p>
                   
                </div>
            </div>
        </div>
    );
}

export default DiscoverAnimeCard;

