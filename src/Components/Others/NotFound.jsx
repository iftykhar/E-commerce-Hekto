import React from 'react'
import PageHeading from './PageHeading'
import SponserLogo from '../HomePage/SponserLogo'
import img1 from '../../assets/img/Group 27dfdf1.png'
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <>
      <PageHeading
        headline="404 Not Found"
        p1="Home"
        p2=". Pages"
        page=". 404 Not Found"
      />
        <div className="container mx-auto ">

                <div className=' text-center py-6 pb-16 '>
                    <div className='flex items-center justify-center'>
                        <img src={img1} alt="" />
                    </div>

                   <Link to={'/'}> <button  className='w-[165px]  rounded h-[44px] bg-[#FB2E86] text-white'>Back To Home</button></Link>
                </div>
        </div>

      <SponserLogo/>
    </>
  )
}

export default NotFound
