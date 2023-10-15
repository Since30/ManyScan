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
            <div className="w-full min-h-full max-h-full  h-full border text-center shadow rounded-sm flex-row space-y-2 bg-white p-5">
                <img src={ `${props.anime.img}` } className="mx-auto rounded-sm"/>
                <p className="font-bold font-xl text-black">{ props.anime.title }</p>
                <p className="font-bold font-xl text-black">{ props.anime.author }</p>
            </div>
        </div>
    )
}