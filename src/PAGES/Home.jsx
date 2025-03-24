import React from 'react'
import Header from '../Components/HomePage/Header'
import Navbar from '../Components/HomePage/Navbar'
import Banner from '../Components/HomePage/Banner'
import Featured from '../Components/HomePage/Featured'
import LatestProduct from '../Components/HomePage/LatestProduct'
import ShopexOffer from '../Components/HomePage/ShopexOffer'
import Banner2 from '../Components/HomePage/Banner2'
import TreandingProducts from '../Components/HomePage/TreandingProducts'
import DiscountItem from '../Components/HomePage/DiscountItem'
import TopCategories from '../Components/HomePage/TopCategories'
import Banner3 from '../Components/HomePage/Banner3'
import SponserLogo from '../Components/HomePage/SponserLogo'
import LatestBlog from '../Components/HomePage/LatestBlog'

const Home = () => {
  return (
    <>
      <Banner/>
      <Featured/>
      <LatestProduct/>
      <ShopexOffer/>
      <Banner2/>
      <TreandingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <Banner3/>
      <SponserLogo/>
      <LatestBlog/>
    </>
  )
}

export default Home
