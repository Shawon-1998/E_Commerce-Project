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
import Delivery from './Components/Delivery'
import NewArrival from './Components/NewArrival'
import ProductPage from './Pages/ProductPage'

function App() {
 

  return (
    <>
    <ProductPage />
    <Banner />
    <FlashSales/>
    <Catagories/>
    <BestSellingProduct/>
    <BannerTwo />
    <ExpOurProduct />
    <NewArrival />
    <Delivery />
    </>
  )
}

export default App
