import React, { useContext } from "react";
import image20png from "../../assets/img/image 20.png";
import image1168png from "../../assets/img/image 1168.png";
import image1171png from "../../assets/img/image 1171.png";
import { Link } from "react-router-dom";
import { ApiDataContext } from "../Others/ContextApi";

const TopCategories = () => {
  const categories = [
    { id: 1, image: image20png, title: "Mini LCW Chair", price: "$56.00" },
    { id: 2, image: image1168png, title: "Mini LCW Chair", price: "$56.00" },
    { id: 3, image: image1171png, title: "Mini LCW Chair", price: "$56.00" },
    { id: 4, image: image20png, title: "Mini LCW Chair", price: "$56.00" },
  ];

 


  return (
    <section className="pb-16 lg:pt-48">
      <div className="container pt-24  mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="font-josef font-bold text-center py-10 text-[32px] md:text-[38px] lg:text-[42px] text-[#151875]">
          Top Categories
        </h1>

        {/* Category Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-full relative overflow-hidden group"
            >
              {/* Background Circle */}
              <div className="flex justify-center w-[220px] h-[220px] bg-[#986be4] rounded-full absolute top-[35px] left-[50%] -translate-x-1/2 duration-700 ease-in-out group-hover:w-[278px] group-hover:h-[278px] group-hover:top-[15px]"></div>

              {/* Product Image */}
              <div className="flex justify-center h-[290px] py-2 relative">
                <img
                  src={category.image}
                  className="p-12 bg-[#f6f7fb] rounded-full z-10"
                  alt={category.title}
                />
              </div>

              {/* View Details Button */}
              <Link to={`/shop`}>
                <button className="absolute -bottom-[50px] left-1/2 transform -translate-x-1/2 bg-[#08D15F] font-josef font-medium text-[12px] z-10 w-[124px] py-2 rounded-md text-white duration-700 ease-in-out group-hover:bottom-[100px]">
                  View Details
                </button>
              </Link>

              {/* Product Details */}
              <div className="text-center mt-6">
                <h2 className="font-josef font-semibold text-[20px] text-[#151875]">
                  {category.title}
                </h2>
                <p className="font-josef text-[16px] text-[#151875]">
                  {category.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
