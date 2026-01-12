import React from 'react'
import { Outlet } from "react-router";
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';


const RootLayout = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout
