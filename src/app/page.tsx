
import AddMangaForm from '@/components/AddMangaForm'
import Image from 'next/image'

import Header from './components/header'
import Navigation from './components/navigation'
import TopAnimeCard from './cards/TopAnimeCard'
import DiscoverAnimeCard from './cards/DiscoverAnimeCard'
import NewAnimeCard from './cards/NewAnimeCard'
import TopVerticalAnimeCard from './cards/TopVerticalAnimeCard'



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddMangaForm />
    </main>

  var _exTopAnimeCardObject = {
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
    language: 'Français'
  }

  var _exDiscoverAnimeCardObject = {
    img: 'https://placehold.co/160x250/EEE/31343C',
    title: 'Naruto',
    author: 'Masashi Kishimoto'
  }
  
  var _exTopVerticalAnimeCardObjectsArray = [
    _exDiscoverAnimeCardObject,
    _exDiscoverAnimeCardObject,
    _exDiscoverAnimeCardObject,
    _exDiscoverAnimeCardObject,
    _exDiscoverAnimeCardObject,
  ]

  var _exNewAnimeCardObjectsArray = [
    _exDiscoverAnimeCardObject,
    _exDiscoverAnimeCardObject,
    _exDiscoverAnimeCardObject,
    _exDiscoverAnimeCardObject,
    _exDiscoverAnimeCardObject,
  ]

  return (
    <div className="dark:bg-black bg-white">
      <Header/>
      <Navigation/>
      <div className="lg:flex">
        <div className="lg:w-3/4">
          <div className="lg:flex">
            <div className="w-full lg:w-3/4">
              <TopAnimeCard anime={ _exTopAnimeCardObject }/>
            </div>
            <div className="w-full lg:w-1/4">
              <DiscoverAnimeCard anime={ _exDiscoverAnimeCardObject }/>
            </div>
          </div>
          <div className="w-full">
              <NewAnimeCard animes={ _exNewAnimeCardObjectsArray} />
          </div>
        </div>
        <div className="lg:w-1/4">
          <TopVerticalAnimeCard animes={_exTopVerticalAnimeCardObjectsArray}/>
        </div>
      </div>
    </div>

  )
}
