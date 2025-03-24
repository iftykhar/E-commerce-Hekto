import React from 'react'
import { IoEllipse } from "react-icons/io5";

const ReUsableOne = (props) => {
  return (
    <section>
        
      <div >
        <h1 className="font-josef font-bold text-center text-[42px]   pb-5 text-[#151875]">
          {props.heading}
        </h1>
        <div className="flex className='font-lato gap-8 justify-center   text-[18px] '">
          <p className="text-[#FB2E86] underline flex items-baseline font-semibold gap-2">
          {props.catergoryName1} <IoEllipse className="text-[8px]" />
          </p>
          <p className="text-[#151875] font-semibold">{props.catergoryName2}</p>
          <p className="text-[#151875] font-semibold">{props.catergoryName3}</p>
          <p className="text-[#151875] font-semibold">{props.catergoryName4}</p>
        </div>
        </div>
    </section>
  )
}

export default ReUsableOne
