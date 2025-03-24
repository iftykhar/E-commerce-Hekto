import React from "react";
import boximage from "../../assets/img/box for image.png";
import image1170png from "../../assets/img/image 1170.png";
import image31png from "../../assets/img/image 31.png";
import image321png from "../../assets/img/image 321.png";
import image1162png from "../../assets/img/image 1162.png";
import image1161png from "../../assets/img/image 1161.png";
import image30png from "../../assets/img/image 30.png";
import image33png from "../../assets/img/image31.png";
import image32png from "../../assets/img/image32.png";

const TreandingProducts = () => {
  return (
    <section>
      {/* Trending Products */}
      <div className="container mx-auto pb-16 px-4">
        <h2 className="font-josef font-bold text-[#151875] pb-8 md:pb-12 text-[28px] md:text-[36px] lg:text-[42px] text-center">
          Trending Products
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          {[boximage, image1170png, image31png, image321png].map(
            (image, index) => (
              <div
                key={index}
                className="h-[350px] hover:scale-110 duration-500 ease-in-out border-[10px] shadow-2xl border-white bg-white"
              >
                <div className="bg-[#F5F6F8] flex justify-center h-[244px]">
                  <img src={image} alt={`Product ${index}`} />
                </div>
                <div className="pt-3">
                  <h2 className="text-[18px] md:text-[20px] font-Lato font-bold text-[#151875] text-center">
                    Cantilever Chair
                  </h2>
                </div>
                <div className="flex gap-2 justify-center items-center pt-1">
                  <p className="text-[16px] font-josef text-[#151875]">
                    $26.00
                  </p>
                  <p className="text-[12px] font-josef text-gray-400 line-through">
                    $42.00
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Offer Section */}
      <div className="container mx-auto pb-32 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="bg-[#fff6fb] relative p-6 h-[270px]">
            <h1 className="text-[20px] md:text-[26px] font-semibold font-josef text-[#151875] pb-4">
              23% off in all products
            </h1>
            <a
              href="/shop"
              className="font-Lato underline font-semibold text-[16px] text-[#FB2E86]"
            >
              Shop Now
            </a>
            <img
              src={image1162png}
              alt="Offer Image 1"
              className="absolute top-[70px] left-[50%] transform -translate-x-[50%] w-[120px] md:w-[150px]"
            />
          </div>

          {/* Middle Card */}
          <div className="bg-[#EEEFFB] relative p-6 h-[270px]">
            <h1 className="text-[20px] md:text-[26px] font-semibold font-josef text-[#151875] pb-4">
              23% off in all products
            </h1>
            <a
              href="/shop"
              className="font-Lato underline font-semibold text-[16px] text-[#FB2E86]"
            >
              View Collection
            </a>
            <img
              src={image1161png}
              alt="Offer Image 2"
              className="absolute top-[70px] left-[50%] transform -translate-x-[50%] w-[120px] md:w-[150px]"
            />
          </div>

          {/* Right Card */}
          <div className="flex flex-col justify-between h-[270px]">
            {[image30png, image32png, image33png].map((image, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#f5f6f8] p-2 rounded-md"
              >
                <div className="w-[80px] h-[80px] flex justify-center items-center bg-white">
                  <img src={image} alt={`Product Image ${index}`} />
                </div>
                <div>
                  <h2 className="text-[16px] md:text-[20px] font-semibold font-josef text-[#151875]">
                    Executive Seat Chair
                  </h2>
                  <p className="text-[14px] md:text-[16px] text-[#151875] line-through font-josef">
                    $32.00
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreandingProducts;
