import Header from './components/header'
import Navigation from './components/navigation'
import TopAnimeCard from './cards/TopAnimeCard'
import DiscoverAnimeCard from './cards/DiscoverAnimeCard'
import NewAnimeCard from './cards/NewAnimeCard'
import TopVerticalAnimeCard from './cards/TopVerticalAnimeCard'

export default function Home() {
  return (
    <div className="bg-white">
      <Header/>
      <Navigation/>
      <div className="md:flex">
        <div className="md:w-3/4">
          <div className="md:flex">
            <div className="w-full md:w-3/4">
              <TopAnimeCard/>
            </div>
            <div className="w-full md:w-1/4">
              <DiscoverAnimeCard/>
            </div>
          </div>
          <div className="w-full">
              <NewAnimeCard/>
          </div>
        </div>
        <div className="md:w-1/4">
          <TopVerticalAnimeCard/>
        </div>
      </div>
    </div>
  )
}
