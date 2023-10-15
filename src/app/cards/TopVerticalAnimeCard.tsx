'use client'

import CardTitle from "./CardTitle"
// TODO: rendre cette carte dynamique en:
//      option 1. appeler API depuis ce component
//      option 2. appeler API depuis le component parent et passer
//          les données en props à ce component
export default function TopVerticalAnimeCard() {
    return (
        <div className="p-5">
            <CardTitle title="Top"/>
            <div className="overflow-x-scroll overflow-y-hidden w-full min-h-fit max-h-fit h-fit border shadow rounded-sm bg-white p-5 flex-row space-y-4">
                <div className="text-center flex items-center space-x-2 bg-white p-2">
                    <img src="https://placehold.co/80x125/EEE/31343C" className="rounded-sm"/>
                    <div className="w-full flex-row">
                        <p className="font-bold font-xl text-black align-middle">Naruto</p>
                        <p className="font-bold font-xl text-black align-middle">Masashi Kishimoto</p>
                    </div>
                </div>
                <div className="text-center flex items-center space-x-2 bg-white p-2">
                    <img src="https://placehold.co/80x125/EEE/31343C" className="rounded-sm"/>
                    <div className="w-full flex-row">
                        <p className="font-bold font-xl text-black align-middle">Naruto</p>
                        <p className="font-bold font-xl text-black align-middle">Masashi Kishimoto</p>
                    </div>
                </div>
                <div className="text-center flex items-center space-x-2 bg-white p-2">
                    <img src="https://placehold.co/80x125/EEE/31343C" className="rounded-sm"/>
                    <div className="w-full flex-row">
                        <p className="font-bold font-xl text-black align-middle">Naruto</p>
                        <p className="font-bold font-xl text-black align-middle">Masashi Kishimoto</p>
                    </div>
                </div>
                <div className="text-center flex items-center space-x-2 bg-white p-2">
                    <img src="https://placehold.co/80x125/EEE/31343C" className="rounded-sm"/>
                    <div className="w-full flex-row">
                        <p className="font-bold font-xl text-black align-middle">Naruto</p>
                        <p className="font-bold font-xl text-black align-middle">Masashi Kishimoto</p>
                    </div>
                </div>
                <div className="text-center flex items-center space-x-2 bg-white p-2">
                    <img src="https://placehold.co/80x125/EEE/31343C" className="rounded-sm"/>
                    <div className="w-full flex-row">
                        <p className="font-bold font-xl text-black align-middle">Naruto</p>
                        <p className="font-bold font-xl text-black align-middle">Masashi Kishimoto</p>
                    </div>
                </div>
            </div>
        </div>
    )
}