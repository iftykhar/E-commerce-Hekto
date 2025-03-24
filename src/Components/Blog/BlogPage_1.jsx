import React, { useState } from "react";
import PageHeading from "../Others/PageHeading";
import { CiSearch } from "react-icons/ci";
import SponserLogo from "../HomePage/SponserLogo";
import img1 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 2.png";
import img2 from "../../assets/img/Vecfdfaftor.png";
import img3 from "../../assets/img/uil_calendar-alt.png";
import img4 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 3.png";
import img5 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 4.png";
import img6 from "../../assets/img/Rectangle 126.png";
import { LuInstagram } from "react-icons/lu";
import { GrTwitter } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import img7 from "../../assets/img/Rectangle fddsaf26.png";
import img8 from "../../assets/img/Rectangleafdasfa 126.png";
import img9 from "../../assets/img/Rectandasfadfgle 126.png";
import img10 from "../../assets/img/Rectadfadngle 126.png";
import img11 from "../../assets/img/Rectansdfadsfgle 126.png";
import img12 from "../../assets/img/Rectangledfd 126.png";
import img13 from "../../assets/img/Mask Grsdafasdoup.png";
import img14 from "../../assets/img/Maskdfadfa Group.png";
import img15 from "../../assets/img/Mask dsfasdfGroup (1).png";
import img16 from "../../assets/img/Maskdsfsa Group.png";
import { Link } from "react-router-dom";

const BlogPage_1 = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [activetag, setActivetag] = useState(1);

  const categories = [
    { id: 1, label: "Hobbies (14)" },
    { id: 2, label: "Women (21)" },
    { id: 3, label: "Travel (8)" },
    { id: 4, label: "Books (12)" },
    { id: 5, label: "Food (10)" },
    { id: 6, label: "Music (9)" },
  ];

  const getButtonClasses = (id) =>
    id === activeCategory
      ? "font-josef text-[14px] text-white bg-pink-500 rounded-md  py-2 w-[122px] "
      : "font-josef text-[14px] text-[#3F509E] bg-transparent px-6 py-2 hover:bg-gray-100 rounded-md";

  const tag = [
    { id: 1, label: "General" },
    { id: 2, label: "Atsanil" },
    { id: 3, label: "Insas." },
    { id: 4, label: "Bibsaas" },
    { id: 5, label: "Nulla." },
  ];

  // const gettagstyle = (id) =>
  //   id === activetag
  //     ? "font-lato text-[16px] text-pink-500 underline    "
  //     : "font-lato text-[16px] text-[#3F509E] bg-transparent hover:bg-gray-100 underline";

  return (
    <>
      <PageHeading
        headline="Blog Page"
        p1="Home"
        p2=". Pages"
        page=". Blog Page"
      />
      <div>
        <div className="container mx-auto">
          <div className="lg:flex justify-between pt-28 ">
            <div className=" lg:w-[70%]">
              <div>
                <Link to={"/maurisblogpost"}>
                  <div>
                    <img src={img1} alt="" className="" />
                  </div>
                </Link>

                <div className="flex gap-5 py-6 ">
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img2} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#ffe6f9] text-center items-center flex justify-center">
                      <p className="font-josef text-[14px] text-[#151875]">
                        Surf Auxion
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img3} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#feede2] text-center items-center flex justify-center">
                      <p className="font-lato font-semibold text-[14px] text-[#151875]">
                        Aug 09 2020
                      </p>
                    </div>
                  </div>
                </div>

                <Link to={"/maurisblogpost"}>
                  <p className="font-josef font-bold text-[30px] py-4 text-[#151875]">
                    Mauris at orci non vulputate diam tincidunt nec.
                  </p>
                </Link>
                <p className="font-Lato text-[16px] lg:w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                <Link to={"/maurisblogpost"}>
                  <p className=" font-Lato text-[#151875] font-semibold pb-4 text-[18px] items-center justify-center ">
                    Read More
                    <span className="text-[50px] text-[#f72588]">.</span>
                  </p>
                </Link>
              </div>

              <div>
                <div>
                  <img src={img4} alt="" />
                </div>

                <div className="flex gap-5 py-6 ">
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img2} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#ffe6f9] text-center items-center flex justify-center">
                      <p className="font-josef text-[14px] text-[#151875]">
                        Surf Auxion
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img3} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#feede2] text-center items-center flex justify-center">
                      <p className="font-lato font-semibold text-[14px] text-[#151875]">
                        Aug 09 2020
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-josef font-bold text-[30px] py-4 text-[#151875]">
                  Aenean vitae in aliquam ultrices lectus. Etiam.
                </p>
                <p className="font-Lato text-[16px] lg:w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                <p className=" font-Lato text-[#151875] font-semibold pb-4 text-[18px] items-center justify-center ">
                  Read More
                  <span className="text-[50px] text-[#f72588]">.</span>
                </p>
              </div>
              <div>
                <div>
                  <img src={img5} alt="" />
                </div>

                <div className="flex gap-5 py-6 ">
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img2} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#ffe6f9] text-center items-center flex justify-center">
                      <p className="font-josef text-[14px] text-[#151875]">
                        Surf Auxion
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img3} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#feede2] text-center items-center flex justify-center">
                      <p className="font-lato font-semibold text-[14px] text-[#151875]">
                        Aug 09 2020
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-josef font-bold text-[30px] py-4 text-[#151875]">
                  Sit nam congue feugiat nisl, mauris amet nisi.
                </p>
                <p className="font-Lato text-[16px] lg:w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                <p className=" font-Lato text-[#151875] font-semibold pb-4   text-[18px] items-center justify-center ">
                  Read More
                  <span className="text-[50px] text-[#f72588] ">.</span>
                </p>
              </div>

              <div className=" justify-center flex pt-6 pb-12 ">
                <div className="flex justify-between  gap-6 ">
                  <p className="font-Lato font-semibold text-[16px] bg-[#f72588] border-[#f72588] text-white border-[2px] px-5 py-2  rounded-md ">
                    1
                  </p>
                  <p className="font-Lato font-semibold  text-[#E0D3F5] border-[2px] px-5 py-2  rounded-md ">
                    2
                  </p>
                  <p className="font-Lato font-semibold  text-[#E0D3F5] border-[2px] px-5 py-2  rounded-md ">
                    3
                  </p>
                  <p className="font-Lato font-semibold  text-[#E0D3F5] border-[2px] px-5 py-2  rounded-md ">
                    4
                  </p>
                </div>
              </div>
            </div>

            <div className=" lg:w-[30%]">
              <div className="pb-12">
                <p className="font-semibold pb-4 font-josef text-[22px] text-[#151875]">
                  Search
                </p>

                <div className="relative w-[270px] h-[40px]">
                  <input
                    type="search"
                    className="w-full h-full border-2 pl-10 pr-4 rounded"
                    placeholder="Search..."
                  />
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                </div>
              </div>

              <div>
                <p className="text-[22px] pb-4 font-semibold font-josef text-[#151875]">
                  Categories
                </p>

                <div className="w-[254px]  flex flex-col justify-between h-[161px]">
                  <div className="flex flex-wrap  justify-between">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={getButtonClasses(category.id)}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold font-josef text-[22px]  pb-6 text-[#151875]">
                  Recent Post
                </p>

                <div className="py-4">
                  <div className="w-[251px]   h-[51px]">
                    <div className="flex justify-between ">
                      <div>
                        <img src={img6} alt="" />
                      </div>

                      <div>
                        <p className="text-[14px]  font-josef text-[#3F509E]">
                          It is a long established fact
                        </p>
                        <p className="text-[11px] font-semibold font-lato py-1 text-[#8A8FB9]">
                          Aug 09 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="w-[251px]    h-[51px]">
                    <div className="flex justify-between ">
                      <div>
                        <img src={img7} alt="" />
                      </div>

                      <div>
                        <p className="text-[14px]  font-josef text-[#3F509E]">
                          It is a long established fact
                        </p>
                        <p className="text-[11px] font-semibold font-lato py-1 text-[#8A8FB9]">
                          Aug 09 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="w-[251px]    h-[51px]">
                    <div className="flex justify-between ">
                      <div>
                        <img src={img8} alt="" />
                      </div>

                      <div>
                        <p className="text-[14px]  font-josef text-[#3F509E]">
                          It is a long established fact
                        </p>
                        <p className="text-[11px] font-semibold font-lato py-1 text-[#8A8FB9]">
                          Aug 09 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="w-[251px]    h-[51px]">
                    <div className="flex justify-between ">
                      <div>
                        <img src={img9} alt="" />
                      </div>

                      <div>
                        <p className="text-[14px]  font-josef text-[#3F509E]">
                          It is a long established fact
                        </p>
                        <p className="text-[11px] font-semibold font-lato py-1 text-[#8A8FB9]">
                          Aug 09 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold font-josef text-[22px] pt-6  pb-6 text-[#151875]">
                  Sale Product
                </p>

                <div className="py-4">
                  <div className="w-[251px]   h-[51px]">
                    <div className="flex justify-between ">
                      <div>
                        <img src={img10} alt="" />
                      </div>

                      <div>
                        <p className="text-[14px]  font-josef text-[#3F509E]">
                          It is a long established fact
                        </p>
                        <p className="text-[11px] font-semibold font-lato py-1 text-[#8A8FB9]">
                          Aug 09 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="w-[251px]    h-[51px]">
                    <div className="flex justify-between ">
                      <div>
                        <img src={img11} alt="" />
                      </div>

                      <div>
                        <p className="text-[14px]  font-josef text-[#3F509E]">
                          It is a long established fact
                        </p>
                        <p className="text-[11px] font-semibold font-lato py-1 text-[#8A8FB9]">
                          Aug 09 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="w-[251px]    h-[51px]">
                    <div className="flex justify-between ">
                      <div>
                        <img src={img12} alt="" />
                      </div>

                      <div>
                        <p className="text-[14px]  font-josef text-[#3F509E]">
                          It is a long established fact
                        </p>
                        <p className="text-[11px] font-semibold font-lato py-1 text-[#8A8FB9]">
                          Aug 09 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="w-[251px]    h-[51px]">
                    <div className="flex justify-between ">
                      <div>
                        <img src={img9} alt="" />
                      </div>

                      <div>
                        <p className="text-[14px]  font-josef text-[#3F509E]">
                          It is a long established fact
                        </p>
                        <p className="text-[11px] font-semibold font-lato py-1 text-[#8A8FB9]">
                          Aug 09 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold font-josef text-[22px] pt-6 pb-6 text-[#151875]">
                  Offer product
                </p>

                <div className="py-3">
                  <div className="flex justify-between w-[267px]">
                    <div>
                      <div className="flex items-center">
                        <img src={img13} alt="" />
                      </div>

                      <div className="py-2">
                        <p className="font-semibold text-center font-lato text-[14px]  text-[#151875]">
                          Duis lectus est.
                        </p>

                        <p className="font-Lato text-center font-semibold text-[12px] text-[#8A8FB9]">
                          $12.00 - $15.00
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <img src={img14} alt="" />
                      </div>

                      <div className="py-2">
                        <p className="font-semibold text-center font-lato text-[14px]  text-[#151875]">
                          Sed placerat.
                        </p>

                        <p className="font-Lato text-center font-semibold text-[12px] text-[#8A8FB9]">
                          $12.00 - $15.00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex"></div>
                </div>

                <div className="py-3">
                  <div className="flex justify-between w-[267px]">
                    <div>
                      <div className="flex items-center">
                        <img src={img15} alt="" />
                      </div>

                      <div className="py-2">
                        <p className="font-semibold text-center font-lato text-[14px]  text-[#151875]">
                          Netus proin.
                        </p>

                        <p className="font-Lato text-center font-semibold text-[12px] text-[#8A8FB9]">
                          $12.00 - $15.00
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <img src={img16} alt="" />
                      </div>

                      <div className="py-2">
                        <p className="font-semibold text-center font-lato text-[14px]  text-[#151875]">
                          Platea in.
                        </p>

                        <p className="font-Lato text-center font-semibold text-[12px] text-[#8A8FB9]">
                          $12.00 - $15.00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex"></div>
                </div>
              </div>

              

              <div>
                <p className="font-semibold font-josef text-[22px]  py-6 text-[#151875]">
                  Follow
                </p>

                <div className="flex  gap-4 ">
                  <Link to={"/contact"}>
                    <FaFacebook className="text-2xl text-[#9DA0AE] hover:text-[#f92a87] hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link to={"/contact"}>
                    <LuInstagram className="text-2xl text-[#9DA0AE] hover:text-[#f92a87] hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link to={"/contact"}>
                    <GrTwitter className="text-2xl text-[#9DA0AE] hover:text-[#f92a87] hover:scale-110 transition-transform duration-300" />
                  </Link>
                </div>

              </div>

              <div>
                <p className="font-semibold  font-josef text-[22px]  py-6 text-[#151875]">
                  Tags
                </p>

                <div className="w-[228px]  flex flex-wrap  gap-10">
                  {tag.map((tag) => (
                    <button
                      key={tag.id}
                      // className={gettagstyle(tag.id)}
                      className={`${
                        tag.id === activetag
                          ? "font-lato text-[16px] text-pink-500 underline    "
                          : "font-lato text-[16px] text-[#3F509E] bg-transparent hover:bg-gray-100 underline"
                      }`}
                      onClick={() => setActivetag(tag.id)}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <SponserLogo />
      </div>
    </>
  );
};

export default BlogPage_1;
