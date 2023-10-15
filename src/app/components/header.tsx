'use client' // Nécéssaire pour pouvoir utiliser onChangeHandler

import Toggle from './toggle'

export default function Header() {
    return (
        <header className="bg-black px-4 py-6 flex justify-between">
            <div>&nbsp;</div>
            <h2 className="font-bold text-white text-2xl opacity-75">ManyScan</h2>                
            <Toggle 
                value={false} 
                onChangeHandler= { (value: boolean) =>
                    console.log(value) // TODO: Sauvegarder ici dans les préférences le choix de l'utilisateur
                }
                label="Dark mode"></Toggle> 
        </header>
    )
}