import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import FlashSales from './Components/FlashSales'
import Catagories from './Components/Catagories'
import BestSellingProduct from './Components/BestSellingProduct'
import BannerTwo from './Components/BannerTwo'
import ExpOurProduct from './Components/ExpOurProduct'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    <Header />
    <Nav />
    <Banner />
    <FlashSales/>
    <Catagories/>
    <BestSellingProduct/>
    <BannerTwo />
    <ExpOurProduct />
    <Footer />
    </>
  )
}

export default App
