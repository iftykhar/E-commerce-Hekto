import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";
import Hekto from "../../assets/img/Hekto.png";
import ScrollToTop from "react-scroll-to-top";
import  MySVG  from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer>
      <ScrollToTop smooth component={<img src={MySVG}/>} />
      <div className="h-auto w-full bg-[#EEEFFB] py-10">
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex flex-wrap justify-between gap-8">
            {/* First Section */}
            <div className="w-full md:w-[40%] lg:w-[25%]">
              <img src={Hekto} className="pb-6" alt="Hekto Company Logo" />
              <div className="flex justify-between bg-white py-1 rounded-lg items-center">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className=" w-[70%] ml-2 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f92a87] rounded-l-lg"
                />
                <button className="w-[30%] mr-2 p-2 font-josef font-medium text-[16px] rounded-r-lg py-2 px-4 bg-[#f92a87] text-white">
                  Sign Up
                </button>
              </div>
              <p className="text-[#9196AA] font-Lato text-[16px] pt-6">
                Contact Info
              </p>
              <p className="text-[#9196AA] font-Lato text-[16px]">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Second Section */}
            <div className="w-full md:w-[40%] lg:w-[15%]">
              <h2 className="text-[#000000] pb-6 font-josef font-semibold text-[22px]">
                Categories
              </h2>
              <div className="space-y-4">
                {[
                  "Laptops & Computers",
                  "Cameras & Photography",
                  "Smart Phones & Tablets",
                  "Video Games & Consoles",
                  "Waterproof Headphones",
                ].map((item) => (
                  <p
                    key={item}
                    className="font-Lato text-[16px] text-[#8A8FB9]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Third Section */}
            <div className="w-full md:w-[40%] lg:w-[15%]">
              <h2 className="text-[#000000] pb-6 font-josef font-semibold text-[22px]">
                Customer Care
              </h2>
              <div className="space-y-4">
                {[
                  "My Account",
                  "Discount",
                  "Returns",
                  "Orders History",
                  "Order Tracking",
                ].map((item) => (
                  <p
                    key={item}
                    className="font-Lato text-[16px] text-[#8A8FB9]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Fourth Section */}
            <div className="w-full md:w-[40%] lg:w-[15%]">
              <h2 className="text-[#000000] pb-6 font-josef font-semibold text-[22px]">
                Pages
              </h2>
              <div className="space-y-4">
                {[
                  "Blog",
                  "Browse the Shop",
                  "Category",
                  "Pre-Built Pages",
                  "Visual Composer Elements",
                  "WooCommerce Pages",
                ].map((item) => (
                  <p
                    key={item}
                    className="font-Lato text-[16px] text-[#8A8FB9]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="h-auto w-full bg-[#e7e3f8] flex justify-center items-center py-4">
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-between items-center px-5 gap-4">
          <p className="font-Lato font-semibold text-[16px] text-[#9DA0AE] text-center w-full lg:w-auto">
            © Fahad Bin Siddique - All Rights Reserved
          </p>

          <div className="flex justify-center gap-4">
            <Link to={"/pages"}>
              <FaFacebook className="text-xl text-[#9DA0AE] hover:text-[#f92a87] hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link to={"/pages"}>
              <LuInstagram className="text-xl text-[#9DA0AE] hover:text-[#f92a87] hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link to={"/pages"}>
              <GrTwitter className="text-xl text-[#9DA0AE] hover:text-[#f92a87] hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
