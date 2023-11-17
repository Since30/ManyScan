'use client'; // Nécéssaire pour pouvoir utiliser onChangeHandler

import { useTheme } from 'next-themes';
import Toggle from './ToggleDarkMode';
import AppLogo from './AppLogo';

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    

    return (
        <header className=' px-20 flex justify-between items-center'>
            <div>&nbsp;</div>
            <div className='h-32 w-96'>
                <AppLogo />
            </div>
            <Toggle
                value={false}
                onChangeHandler={(value: boolean) => {
                    if (theme == 'dark') {
                        setTheme('light');
                    } else {
                        setTheme('dark');
                    }
                    console.log(value); // TODO: Sauvegarder ici dans les préférences le choix de l'utilisateur
                }}
                label='Dark mode'
            />
        </header>
    );
}
