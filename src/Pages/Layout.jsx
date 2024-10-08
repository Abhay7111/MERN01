import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function Layout() {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout