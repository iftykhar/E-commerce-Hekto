import React from "react";
import car from "../../assets/img/free-delivery 1.png";
import cash from "../../assets/img/cashback 1.png";
import achive from "../../assets/img/premium-quality 1.png";
import hour from "../../assets/img/24-hours-support 1.png";

const ShopexOffer = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] py-28 md:py-24 font-josef font-bold text-center text-[#151875]">
          What Shopex Offer!
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="w-full hover:border-b-4 border-orange-400 rounded-lg h-auto shadow-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src={car} className="h-[80px] w-[80px]" alt="Free Delivery" />
            </div>
            <h2 className="text-[#151875] font-semibold font-josef text-[18px] md:text-[22px]">
              Free Delivery
            </h2>
            <p className="font-Lato font-bold text-[14px] md:text-[16px] text-[#1A0B5B] py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="w-full hover:border-b-4 border-orange-400 rounded-lg h-auto shadow-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src={cash} className="h-[80px] w-[80px]" alt="Cashback" />
            </div>
            <h2 className="text-[#151875] font-semibold font-josef text-[18px] md:text-[22px]">
              Cashback Offer
            </h2>
            <p className="font-Lato font-bold text-[14px] md:text-[16px] text-[#1A0B5B] py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="w-full hover:border-b-4 border-orange-400 rounded-lg h-auto shadow-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src={achive} className="h-[80px] w-[80px]" alt="Premium Quality" />
            </div>
            <h2 className="text-[#151875] font-semibold font-josef text-[18px] md:text-[22px]">
              Premium Quality
            </h2>
            <p className="font-Lato font-bold text-[14px] md:text-[16px] text-[#1A0B5B] py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="w-full hover:border-b-4 border-orange-400 rounded-lg h-auto shadow-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src={hour} className="h-[80px] w-[80px]" alt="24/7 Support" />
            </div>
            <h2 className="text-[#151875] font-semibold font-josef text-[18px] md:text-[22px]">
              24/7 Support
            </h2>
            <p className="font-Lato font-bold text-[14px] md:text-[16px] text-[#1A0B5B] py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ShopexOffer;
