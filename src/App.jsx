import React from 'react'
import Header from './components/Header'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />

      <MainRoutes />
      <Footer />
    </>
  )
}

export default App