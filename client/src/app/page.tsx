import Header from './components/Header';
import Navigation from './components/Navigation';
import TopAnimeCard from './cards/TopAnimeCard';
import DiscoverAnimeCard from './cards/DiscoverAnimeCard';
import NewAnimeCard from './cards/NewAnimeCard';
import TopVerticalAnimeCard from './cards/TopVerticalAnimeCard';

export default function Home() {
    const _fakeDataTopAnimeCardObject = {
        img: 'https://placehold.co/160x250/EEE/31343C',
        title: 'Naruto',
        author: 'Masashi Kishimoto',
        synopsis: `It is a long established fact that a reader will be distracted by 
            the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal 
            distribution of letters, as opposed to using 'Content here, content here', 
            making it look like readable English.`,
        chapters: 12,
        status: '?',
        language: 'Français',
        type: 'Shonen',
    };

    const _fakeDataDiscoverAnimeCardObject = {
        img: 'https://placehold.co/160x250/EEE/31343C',
        title: 'Naruto',
        author: 'Masashi Kishimoto',
        type: 'Shonen',
    };

    const _fakeDataTopVerticalAnimeCardObjectsArray = [
        _fakeDataDiscoverAnimeCardObject,
        _fakeDataDiscoverAnimeCardObject,
        _fakeDataDiscoverAnimeCardObject,
        _fakeDataDiscoverAnimeCardObject,
        _fakeDataDiscoverAnimeCardObject,
    ];

    const _fakeDataNewAnimeCardObjectsArray = [
        _fakeDataDiscoverAnimeCardObject,
        _fakeDataDiscoverAnimeCardObject,
        _fakeDataDiscoverAnimeCardObject,
        _fakeDataDiscoverAnimeCardObject,
        _fakeDataDiscoverAnimeCardObject,
    ];

    return (
        <div className='bg-light dark:bg-dark py-6'>
            <Header />
            <Navigation />
            <div className='lg:flex'>
                <div className='lg:w-3/4'>
                    <div className='lg:flex'>
                        <div className='w-full lg:w-3/4'>
                            <TopAnimeCard anime={_fakeDataTopAnimeCardObject} />
                        </div>
                        <div className='w-full lg:w-1/4'>
                            <DiscoverAnimeCard
                                anime={_fakeDataDiscoverAnimeCardObject}
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <NewAnimeCard
                            animes={_fakeDataNewAnimeCardObjectsArray}
                        />
                    </div>
                </div>
                <div className='lg:w-1/4'>
                    <TopVerticalAnimeCard
                        animes={_fakeDataTopVerticalAnimeCardObjectsArray}
                    />
                </div>
            </div>
        </div>
    );
}
