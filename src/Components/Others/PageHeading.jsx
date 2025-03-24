import React from 'react'

const PageHeading = (props) => {
  return (
    <>
      <section className="  bg-[#F6F5FF] w-[100%]">
        <div className="container mx-auto">
        <div className="h-[286px]  flex flex-col justify-center ">

            <h2 className='font-josef font-bold text-[36px]  text-[#101750]'>{props.headline}</h2>
            <div className="flex gap-2">
                <p  className='font-Lato text-[16px] font-bold text-[#000000]'>{props.p1}</p>
                <p className='font-Lato text-[16px] font-bold text-[#000000]'>{props.p2}</p>
                <p className='font-Lato text-[16px] font-bold text-[#FB2E86]'>{props.page}</p>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default PageHeading
