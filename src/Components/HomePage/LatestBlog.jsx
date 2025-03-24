import React from "react";
import latest1 from "../../assets/img/JIUjvqe2ZHg.png";
import latest2 from "../../assets/img/2dcYhvbHV-M.png";
import latest3 from "../../assets/img/2dcYhvbHV-Me.png";
import { FaPenNib } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const LatestBlog = () => {
  return (
    <section>
      <div className="container mx-auto pt-8">
        <h2 className="font-josef font-bold text-center text-[42px] text-[#151875]">
          Latest Blog
        </h2>

        <div className="grid  gap-6 pt-24 pb-36 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Card */}
          {[latest1, latest2, latest3].map((image, index) => (
            <div key={index} className="shadow-md rounded-md h-auto hover:scale-105 duration-700 ease-in-out bg-white">
              <div className="h-[255px] flex justify-center">
                <img
                  src={image}
                  alt={`blog-${index + 1}`}
                  className="w-full rounded-t-md"
                />
              </div>

              <div className="p-5">
                <div className="flex gap-4 pb-6">
                  <p className="font-josef text-[14px] text-[#151875] flex items-center gap-2">
                    <FaPenNib className="text-[#FB2E86]" /> SaberAli
                  </p>
                  <p className="font-josef text-[14px] text-[#151875] flex items-baseline gap-2">
                    <FaCalendarAlt className="text-[#FFA454]" />
                    21 August, 2020
                  </p>
                </div>
                <h3 className="font-josef font-bold pb-2 text-[18px] text-[#151875]">
                  Top essential Trends in 2021
                </h3>
                <p className="font-lato pb-5 text-[16px] leading-8 text-[#72718F]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <a
                  href="/blog"
                  className="font-lato font-semibold underline text-[16px] text-[#151875]"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
