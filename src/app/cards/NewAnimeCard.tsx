'use client'

import CardTitle from './CardTitle'
import AnimeOject from "../interfaces/animeObject"

interface Props {
    animes: Array<AnimeOject>
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className="p-5">
            <CardTitle title="Nouveautés"/>
            <div className="overflow-x-scroll overflow-y-hidden w-full min-h-fit max-h-fit h-fit border shadow rounded-sm bg-white p-5 flex space-x-4">
                { 
                    props.animes.map((anime) => {
                            return (
                                <div className="text-center flex-row space-y-2 bg-white p-5">
                                    <img src={`${anime.img}`} className="rounded-sm"/>
                                    <p className="font-semibold font-xl opacity-90 text-black">{anime.title}</p>
                                    <p className="font-regular font-xl opacity-75 text-black">{anime.author}</p>
                                </div>
                            )
                    })
                }
                
            </div>
        </div>
    )
}