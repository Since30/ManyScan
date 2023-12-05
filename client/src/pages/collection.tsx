import { useEffect, useState } from 'react';
import { fetchFavoriteManga } from '../services/MangaTheqApi';
import AnimeObjects from '../interfaces/animeObjects';
import Headers from '../components/header';
import Navigation from '../components/navigation';
import StarRating from '../components/svg/StarRating';
import Cover from '../components/Cover';
import Link from 'next/link';

const Collection = () => {
    const [favoriteAnimes, setFavoriteAnimes] = useState<AnimeObjects[]>([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            await fetchFavoriteManga().then((res) => {
                if (res) setFavoriteAnimes([...res]);
                else console.log('error');
            });
            console.log('collection: ' + favoriteAnimes);
        };

        loadData();
    }, []);

    return (
        <div className='py-6'>
            <Headers />
            <Navigation />
            <div className='flex flex-wrap justify-center mx-2'>
                {favoriteAnimes.map((anime) => (
                    <Link key={anime.id} href={`/animes/${anime.id}`}>
                        <div className='flex flex-col justify-center m-4 items-center w-60 h-96 text-center rounded-md dark:bg-dark-card bg-light-card hover:cursor-pointer'>
                            <Cover anime={anime} width={176} height={250} />
                            <div className='flex justify-between w-[80%] mt-3 pl-2'>
                                <div className='flex flex-col items-start w-[90%]'>
                                    <h3 className='font-semibold text-start text-lg text-light line-clamp-2 overflow-hidden overflow-ellipsis'>
                                        {anime.title ?? 'Titre'}
                                    </h3>
                                    <p className='font-regular text-xs text-light text-start'>
                                        {anime.authorName ?? 'Auteur'}
                                    </p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='text-sm text-light'>
                                        <StarRating
                                            rating={anime.statistics.rating}
                                            animeId={anime.id}
                                        />
                                        {anime.statistics.numberOfVotes ?? '0'}{' '}
                                        votes
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Collection;
