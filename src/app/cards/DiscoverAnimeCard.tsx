'use client'

import CardTitle from "./CardTitle"
import AnimeOject from "../interfaces/animeObject"

interface Props {
    anime: AnimeOject
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className="w-full h-full p-5">
            <CardTitle title="Découvrir"/>
            <div className="w-full min-h-full max-h-full  h-full border text-center shadow rounded-sm flex-row space-y-2 dark:bg-black bg-white p-5 dark:border-black">
                <img src={ `${props.anime.img}` } className="mx-auto rounded-sm"/>
                <p className="font-semibold font-xl opacity-90 dark:text-white text-black">{ props.anime.title }</p>
                <p className="font-regular font-xl opacity-75 dark:text-white text-black">{ props.anime.author }</p>
            </div>
        </div>
    )
}