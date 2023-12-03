'use client'; // Nécéssaire pour pouvoir utiliser onChangeHandler

import AppLogo from './AppLogo';
import Navigation from './navigation';

export default function Header() {
    // const { systemTheme, theme, setTheme } = useTheme();
    

    return (
        <header className=' px-20 flex  '>
            <div>&nbsp;</div>
            <div className='h-32 w-96'>
                <AppLogo />
            </div>
            <Navigation />
            
        </header>
    );
}
