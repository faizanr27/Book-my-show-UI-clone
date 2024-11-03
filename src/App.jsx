import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import MovieCard from './components/MovieCard'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Premiere from './components/Premiere'
import {useState} from 'react'
function App() {
  const [searchInput, setSearchInput] = useState('')

  const addSearch = (input) => {
    setSearchInput(input)
  }

  return (
    <div className="max-w-[1280px] mx-auto h-screen">
    <Navbar addSearch={addSearch}/>
    <Carousel/>
    <MovieCard searchInput={searchInput}/>
    <SectionTwo/>
    <SectionThree/>
    <Premiere/>
    {/* <MovieCard/> */}
    </div>
  )
}

export default App
