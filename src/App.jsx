import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import HeroSlider from './components/HeroSlider'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/unknown/:id' element={<Home />} ></Route>
        <Route path='*' element={ <h1 className='not-found'>Page Not Found! </h1> } ></Route>
      </Routes>

    </>
  )
}

export default App