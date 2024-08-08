import React from 'react'
import HeroSlider from '../components/HeroSlider'
import OrderOnline from './OrderOnline'

const Home = () => {  
  return (
    <div className='overflow-hidden bg-gradient-to-br from-violet-100 to-amber-100'>
      <HeroSlider />
      <OrderOnline />     
    </div>
  )
}

export default Home