import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const LayoutsWebsite = () => {
    return (
        <div>
            <Header />
            <Outlet />

            <Footer />
        </div>
    )
}

export default LayoutsWebsite