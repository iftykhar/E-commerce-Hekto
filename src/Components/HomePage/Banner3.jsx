import React from "react";
import banner3 from "../../assets/img/Rectangle 102.png";

const Banner3 = () => {
  return (
    <section className="py-24">
      <div className="relative">
        <img src={banner3} alt="" className="w-full" />

        {/* হেডিং */}
        <h2 className="font-josef  font-bold top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[620px] text-center text-[22px] md:text-[35px] text-[#151875] absolute">
          Get Latest Updates By Subscribing to Our Newsletter
        </h2>

        {/* বাটন */}
        <button className="font-josef absolute top-2/3 left-1/2 transform -translate-x-1/2 py-1 px-4 bg-[#f92a87] sm:px-4 sm:py-2 md:px-6 md:py-2 text-white text-[14px] md:text-[17px] font-semibold rounded-md">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner3;
