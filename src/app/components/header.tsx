'use client' // Nécéssaire pour pouvoir utiliser onChangeHandler

import { useTheme } from 'next-themes';
import Toggle from './toggle'

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <header className="bg-white dark:bg-black px-4 py-6 flex justify-between">
            <div>&nbsp;</div>
            <h2 className="font-bold text-black dark:text-white text-2xl opacity-75">ManyScan</h2>                
            <Toggle 
                value={false} 
                onChangeHandler= { (value: boolean) => {
                    if(theme == "dark") { 
                        setTheme('light')
                    } else {
                        setTheme("dark");
                    }
                    console.log(value) // TODO: Sauvegarder ici dans les préférences le choix de l'utilisateur
                }}
                label="Dark mode"></Toggle> 
        </header>
    )
}