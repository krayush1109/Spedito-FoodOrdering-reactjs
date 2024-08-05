import React from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />

      <MainRoutes />
      <Footer />
    </>
  )
}

export default App