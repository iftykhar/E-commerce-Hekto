import React from "react";
import group153 from "../../assets/img/Group 153.png";
import { IoEllipse } from "react-icons/io5";

const Banner2 = () => {
  return (
    <section className="py-16 md:py-36">
      <div className="bg-[#F1F0FF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Left Side: Image */}
            <div className="flex justify-center">
              <img
                src={group153}
                alt="Product Banner"
                className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-[#151875] font-josef font-bold text-[24px] md:text-[30px] lg:text-[35px] pb-5 leading-snug">
                Unique Features Of Latest & Trending Products
              </h2>

              <div className="space-y-4 md:space-y-5">
                {/* Feature Points */}
                <p className="flex items-center gap-3 font-Lato font-medium text-[14px] md:text-[16px] text-[#ACABC3]">
                  <IoEllipse className="text-[#F52B70]" />
                  All frames constructed with hardwood solids and laminates
                </p>
                <p className="flex items-center gap-3 font-Lato font-medium text-[14px] md:text-[16px] text-[#ACABC3]">
                  <IoEllipse className="text-[#2B2BF5]" />
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </p>
                <p className="flex items-center gap-3 font-Lato font-medium text-[14px] md:text-[16px] text-[#ACABC3]">
                  <IoEllipse className="text-[#2BF5CC]" />
                  Arms, backs and seats are structurally reinforced
                </p>
              </div>

              {/* Call-to-Action Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 py-8">
                <button className="font-josef font-semibold text-[15px] md:text-[17px] rounded-md py-4 px-8 bg-[#f92a87] text-white mb-4 sm:mb-0">
                  Add To Cart
                </button>
                <div>
                  <p className="text-[#151875] font-josef font-semibold text-[14px] md:text-[16px]">
                    B&B Italian Sofa
                  </p>
                  <p className="font-Lato text-[14px] md:text-[16px] text-[#151875]">
                    $32.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
