'use client'
// TODO: rendre cette carte dynamique en:
//      option 1. appeler API depuis ce component
//      option 2. appeler API depuis le component parent et passer
//          les données en props à ce component
export default function TopAnimeCard() {
    return (
        <div className="p-5">
            <span className="font-bold font-xl text-black">Nouveautés</span>
            <div className="overflow-x-scroll overflow-y-hidden w-full min-h-fit max-h-fit h-fit border shadow rounded-sm bg-white p-5 flex space-x-4">
                <div className="text-center flex-row space-y-2 bg-white p-5">
                    <img src="https://placehold.co/160x250/EEE/31343C" className="rounded-sm"/>
                    <p className="font-bold font-xl text-black">Naruto</p>
                    <p className="font-bold font-xl text-black">Masashi Kishimoto</p>
                </div>
                <div className="text-center flex-row space-y-2 bg-white p-5">
                    <img src="https://placehold.co/160x250/EEE/31343C" className="rounded-sm"/>
                    <p className="font-bold font-xl text-black">Naruto</p>
                    <p className="font-bold font-xl text-black">Masashi Kishimoto</p>
                </div>
                <div className="text-center flex-row space-y-2 bg-white p-5">
                    <img src="https://placehold.co/160x250/EEE/31343C" className="rounded-sm"/>
                    <p className="font-bold font-xl text-black">Naruto</p>
                    <p className="font-bold font-xl text-black">Masashi Kishimoto</p>
                </div>
                <div className="text-center flex-row space-y-2 bg-white p-5">
                    <img src="https://placehold.co/160x250/EEE/31343C" className="rounded-sm"/>
                    <p className="font-bold font-xl text-black">Naruto</p>
                    <p className="font-bold font-xl text-black">Masashi Kishimoto</p>
                </div>
                <div className="text-center flex-row space-y-2 bg-white p-5">
                    <img src="https://placehold.co/160x250/EEE/31343C" className="rounded-sm"/>
                    <p className="font-bold font-xl text-black">Naruto</p>
                    <p className="font-bold font-xl text-black">Masashi Kishimoto</p>
                </div>
            </div>
        </div>
    )
}