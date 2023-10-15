'use client'

import CardTitle from './CardTitle'

// TODO: rendre cette carte dynamique en:
//      option 1. appeler API depuis ce component
//      option 2. appeler API depuis le component parent et passer
//          les données en props à ce component
export default function TopAnimeCard() {
    return (
        <div className="h-full p-5">
            <CardTitle title="Top 5 mangas"/>
            <div className="overflow-x-scroll overflow-y-hidden w-full min-h-full max-h-full  h-full border shadow rounded-sm bg-white p-5 flex space-x-4 items-center">
                <img src="https://placehold.co/160x250/EEE/31343C" className="rounded-sm"/>
                <div className="">
                    <span className="font-bold font-2xl text-black">Naruto</span>
                    <p className="text-black">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                    </p>
                    <div className="flex justify-between">
                        <span className="font-bold text-black">
                            Manga
                        </span>

                        <span className="font-bold text-black">
                            12 chapitres
                        </span>

                        <span className="font-bold text-black">
                            Statut
                        </span>

                        <span className="font-bold text-black">
                            Français
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}