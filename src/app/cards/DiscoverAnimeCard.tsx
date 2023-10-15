'use client'

import CardTitle from "./CardTitle"
// TODO: rendre cette carte dynamique en:
//      option 1. appeler API depuis ce component
//      option 2. appeler API depuis le component parent et passer
//          les données en props à ce component
export default function TopAnimeCard() {
    return (
        <div className="w-full h-full p-5">
            <CardTitle title="Découvrir"/>
            <div className="w-full min-h-full max-h-full  h-full border text-center shadow rounded-sm flex-row space-y-2 bg-white p-5">
                <img src="https://placehold.co/160x250/EEE/31343C" className="mx-auto rounded-sm"/>
                <p className="font-bold font-xl text-black">Naruto</p>
                <p className="font-bold font-xl text-black">Masashi Kishimoto</p>
            </div>
        </div>
    )
}