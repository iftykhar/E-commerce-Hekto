import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";
import Slider from "react-slick";
import { ApiDataContext } from "../Others/ContextApi";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from "../../slice/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Featured = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
    toast.success(" Item Added To Cart ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const settings = {
    dots: false, // Pagination dots
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Medium screens (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (mobile landscape)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576, // Extra small screens (mobile portrait)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const value = useContext(ApiDataContext);

  return (
    <section className="py-16">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <h2 className="font-josef font-bold text-[32px] md:text-[42px] text-[#1A0B5B] text-center">
          Featured Products
        </h2>

        <div className="py-8">
          <Slider {...settings}>
            {value?.map((item) => (
              <div
                key={item.id}
                className="shadow-lg rounded-lg group hover:scale-105 transition-transform duration-300"
              >
                {/* Product Image */}
                <div className="bg-[#F6F7FB] flex justify-center items-center overflow-hidden relative h-[250px] md:h-[300px] lg:h-[350px] rounded-t-lg">
                  <img
                    className="object-contain max-h-full w-full"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <Link to={`/shop/${item.id}`}>
                    <button className="absolute -bottom-12 left-[110px] bg-[#08D15F] font-josef font-medium text-[12px] px-7 py-2 rounded-md duration-700 ease-in-out text-white group-hover:bottom-2 ">
                      View Details
                    </button>
                  </Link>

                  {/* Icons */}
                  <div className=" gap-5   cursor-pointer absolute duration-700 ease-in-out -left-48 group-hover:left-2">
                    <div className="hover:bg-white w-12 items-center justify-center flex  h-12 rounded-full">
                      <FiShoppingCart
                        onClick={() => handleAddToCart(item)}
                        className="text-[#2F1AC4]  hover:text-[#f92a87] text-[25px]"
                      />
                    </div>

                    <div className="hover:bg-white w-12 items-center justify-center flex  h-12 rounded-full">
                      <IoIosHeartEmpty className="text-[#1389FF] hover:text-[#f92a87] text-[25px]" />
                    </div>

                    <div className="hover:bg-white w-12 items-center justify-center flex  h-12 rounded-full">
                      <BsZoomIn className="text-[#1389FF] hover:text-[#f92a87] text-[25px]" />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="bg-white text-center py-4 space-y-2 group-hover:bg-[#2F1AC4] rounded-b-lg">
                  <h3 className="font-Lato font-bold text-[16px] lg:text-[18px] group-hover:text-white text-[#FB2E86]">
                    {item.title}
                  </h3>
                  <p className="text-[#151875] group-hover:text-white font-josef text-[14px]">
                    In Stock: {item.stock}
                  </p>
                  <p className="font-Lato font-bold text-[14px] group-hover:text-white text-[#151875]">
                    $ {item.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Featured;
