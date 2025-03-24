import React from 'react'
import Header from '../HomePage/Header'
import Navbar from '../HomePage/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../HomePage/Footer'
import { ScrollToTop } from './ScrollToTop'


const Layout = () => {
  return (
    <>
    <ScrollToTop/>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
