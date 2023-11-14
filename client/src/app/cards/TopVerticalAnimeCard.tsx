'use client';

import CardTitle from "./CardTitle"
import AnimeObject from "../interfaces/animeObject"

interface Props {
    animes: AnimeObject[];
  title: string;
}

export default function TopVerticalAnimeCard(props: Props) {
    return (
        <div className="p-5">
            <CardTitle title="Top"/>
            <div className="overflow-x-scroll overflow-y-hidden w-full min-h-fit max-h-fit h-fit border shadow rounded-sm dark:bg-black dark:border-black bg-white p-5 flex-row space-y-4">
                { 
                    props.animes.map((anime, index) => {
                        return (
                            <div key={anime.id || index} className="text-center flex items-center space-x-2 dark:bg-black bg-white p-2">
                                <img src={`${anime.img}`} alt={anime.title} className="rounded-sm"/>
                                <div className="w-full flex-row">
                                    <p className="font-semibold font-xl dark:text-white text-black opacity-90 align-middle">{ anime.title }</p>
                                    <p className="font-regular font-xl dark:text-white text-black opacity-75 align-middle">{ anime.author }</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
