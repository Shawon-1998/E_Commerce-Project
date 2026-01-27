import React from 'react'
import Banner from '../Components/Banner'
import FlashSales from '../Components/FlashSales'
import Catagories from '../Components/Catagories'
import BestSellingProduct from '../Components/BestSellingProduct'
import BannerTwo from '../Components/BannerTwo'
import ExpOurProduct from '../Components/ExpOurProduct'
import NewArrival from '../Components/NewArrival'
import Delivery from '../Components/Delivery'
import ProductDetails from './ProductDetails'


const Home = () => {
    return (
        <>
            <Banner />
            <FlashSales />
            <Catagories />
            <ProductDetails/>
            <BestSellingProduct />
            <BannerTwo />
            <ExpOurProduct />
            <NewArrival />
            <Delivery />
        </>
    )
}

export default Home
