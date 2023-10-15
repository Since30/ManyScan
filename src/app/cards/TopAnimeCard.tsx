'use client'

import CardTitle from './CardTitle'

import AnimeOject from "../interfaces/animeObject"
interface Props {
    anime: AnimeOject
}

export default function TopAnimeCard(props: Props) {
    return (
        <div className="h-full p-5">
            <CardTitle title="Top 5 mangas"/>
            <div className="overflow-x-scroll overflow-y-hidden w-full min-h-full max-h-full  h-full border shadow rounded-sm bg-white p-5 flex space-x-4 items-center">
                <img src={ `${props.anime.img}` } className="rounded-sm"/>
                <div>
                    <span className="font-bold font-2xl text-black opacity-90">{ props.anime.title }</span>
                    <p className="text-black opacity-70">
                    {
                        // L'emploi de "??" permet de se prémunir d'erreur si la valeur que 
                        // l'on veut afficher est nulle (telle que définie dans AnimeObject.ts)
                    }
                    { props.anime.synopsis ?? "" }
                    </p>
                    <div className="flex-row lg:flex lg:justify-between uppercase opacity-75 text-sm py-4">
                        <span className="block font-semibold text-black">
                            { props.anime.type ?? "Manga" }
                        </span>

                        <span className="block font-semibold text-black">
                            { props.anime.chapters ?? 0 } chapitres
                        </span>

                        <span className="block font-semibold text-black">
                            { props.anime.status ?? "" } 
                        </span>

                        <span className="block font-semibold text-black">
                            { props.anime.language ?? "" } 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}