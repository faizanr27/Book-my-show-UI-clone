import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import MovieCard from './components/MovieCard'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Premiere from './components/Premiere'
import Layout from './components/Movies/Layout'
import Main from './components/Events/Main'
import Footer from './components/Footer'
import BottomNavBar from './components/BottomNav'
import {useState} from 'react'

import { Route, Routes } from "react-router-dom";


function App() {
  const [searchInput, setSearchInput] = useState('')

  const addSearch = (input) => {
    setSearchInput(input)
  }

  return (
    <div className="w-screen h-dvh overflow-x-hidden">
    <Navbar addSearch={addSearch}/>
    <Carousel/>
    <Routes>
      <Route path='/' element={<MovieCard searchInput={searchInput}/>}/>
      <Route path='/movies' element={<Layout/>}/>
      <Route path='/events' element={<Main/>}/>
    </Routes>
    <SectionTwo/>
    <SectionThree/>
    <Premiere/>
    <Footer/>
    <BottomNavBar/>
    </div>
  )
}

export default App
