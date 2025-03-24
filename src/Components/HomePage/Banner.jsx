import React from 'react'
import sofa from '../../assets/img/sofa promotional header.png'
import light from '../../assets/img/image 32.png'
import fota from '../../assets/img/Ellipse 62.png'
import promo from '../../assets/img/promotional.png'
import { FirebaseError } from 'firebase/app'

const Banner = () => {
  return (
    
  //  <div className='bg-[#F2F0FF] h-[764px] relative'>
  //   <div className="container mx-auto ">
  //   <div className='flex items-center justify-between  h-[764px]'>
  //       <div className='w-[700px]  '>
  //           <p className='font-Lato font-bold text-[16px] text-[#f92a87] leading-[28px] pb-3'>Best Furniture For Your Castle....</p>
  //           <h2 className='font-josef font-bold text-[53px] pb-4 '>New Furniture Collection Trends in 2020</h2>
  //           <p className='font-Lato font-bold text-[16px] leading-7 pb-8 text-[#8A8FB9] w-[570px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
  //           in phasellus non in justo.</p>
  //           <button className='font-josef font-semibold text-[17px] rounded-sm py-4 px-6 bg-[#f92a87] text-white'>Shop Now</button>
  //       </div>
  //       <div className=' '>
  //           <img src={sofa} alt="" />
  //       </div>
  //   </div>
  //       <img className='absolute top-0 left-[-80px]  ' src={light} alt="" />
  //       <img className='absolute top-[600px] left-[40px]  ' src={fota} alt="" />
  //   </div>
  //   </div>


  <div >
    <img src={promo} alt="" className='w-[100%]' />
  </div>
  )
}

export default Banner
