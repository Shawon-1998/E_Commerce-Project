import React from 'react'
import { Outlet } from "react-router";
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';

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
