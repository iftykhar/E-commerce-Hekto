import React, { useState } from "react";
import PageHeading from "../Others/PageHeading";
import { CiSearch } from "react-icons/ci";
import SponserLogo from "../HomePage/SponserLogo";
import img1 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 2.png";
import img2 from "../../assets/img/Vecfdfaftor.png";
import img21 from "../../assets/img/Groupfdasdf 92.png";
import img3 from "../../assets/img/uil_calendar-alt.png";
import img4 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 3.png";
import img5 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 4.png";
import img6 from "../../assets/img/Rectangle 126.png";
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
import img17 from "../../assets/img/Grofdup 202.png";
import img18 from "../../assets/img/Group dfasdf203.png";
import img19 from "../../assets/img/Group 20dfdasf4.png";
import img20 from "../../assets/img/Groupdsfasd 140.png";
import img22 from "../../assets/img/Rectansdafasgle 63.png";
import img23 from "../../assets/img/Rectadsafasdngle 63.png";
import img24 from "../../assets/img/Rectangledasfadfa 63.png";
import img25 from "../../assets/img/Rectangle 6dsfasdfe3.png";
import img26 from "../../assets/img/Rectandsfsadfagle 59.png";
import img27 from "../../assets/img/Rectasdfdsangle 59.png";
import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { FaUser } from "react-icons/fa6";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

const BlogPage_2 = () => {
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
        headline="Single Blog"
        p1="Home"
        p2=". Pages"
        page=". Single Blog "
      />
      <div>
        <div className="container mx-auto">
          <div className="flex justify-between pt-28 ">
            <div className=" w-[70%] ">
              <div>
                <div>
                  <img src={img1} alt="" />
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
                  Mauris at orci non vulputate diam tincidunt nec.
                </p>
                <p className="font-Lato text-[16px] pb-16   w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                <p className=" font-Lato text-[#8A8FB9] w-[852px] pb-4 text-[16px] items-center justify-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>

                <div className="pt-12 pb-10">
                  <div className="border-l-2 bg-[#fafafb]  	border-pink-600  w-[852px]">
                    <p className="font-josef tracking-wide ml-4 font-semibold text-[18px] py-10  text-[#969CB4]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Velit facilisis quis auctor pretium ipsum, eu rutrum.
                      Condimentum eu malesuada vitae ultrices in in neque, porta
                      dignissim. Adipiscing purus, cursus vulputate id id dictum
                      at.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-14">
                  <div className="flex items-center justify-center">
                    <img src={img21} alt="" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={img20} alt="" />
                  </div>
                </div>

                <p className="font-Lato text-[16px] pb-16 pt-24  w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>
              </div>

              <section>
                <div className="flex gap-6">
                  <div>
                    <div className="flex items-center">
                      <img src={img22} alt="" />
                    </div>
                    <p className="font-josef text-[20px] pl-5 pt-3">Quam sed</p>
                    <div className="flex justify-between pl-3 pt-2 pr-2 ">
                      <p className="font-josef text-[14px] text-[#232A69]">
                        $32.00
                      </p>
                      <p className="font-josef line-through	 text-[14px] text-[#FF38B0]">
                        $56.00
                      </p>
                      <div className="flex text-yellow-500 justify-between">
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarHalfOutline />
                        <TiStarOutline />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <img src={img23} alt="" />
                    </div>
                    <p className="font-josef text-[20px] pl-5 pt-3">Quam sed</p>
                    <div className="flex justify-between pl-3 pt-2 pr-2 ">
                      <p className="font-josef text-[14px] text-[#232A69]">
                        $32.00
                      </p>
                      <p className="font-josef line-through	 text-[14px] text-[#FF38B0]">
                        $56.00
                      </p>
                      <div className="flex text-yellow-500 justify-between">
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarHalfOutline />
                        <TiStarOutline />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <img src={img24} alt="" />
                    </div>
                    <p className="font-josef text-[20px] pl-5 pt-3">Quam sed</p>
                    <div className="flex justify-between pl-3 pt-2 pr-2 ">
                      <p className="font-josef text-[14px] text-[#232A69]">
                        $32.00
                      </p>
                      <p className="font-josef line-through	 text-[14px] text-[#FF38B0]">
                        $56.00
                      </p>
                      <div className="flex text-yellow-500 justify-between">
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarHalfOutline />
                        <TiStarOutline />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <img src={img25} alt="" />
                    </div>
                    <p className="font-josef text-[20px] pl-5 pt-3">Quam sed</p>
                    <div className="flex justify-between pl-3 pt-2 pr-2 ">
                      <p className="font-josef text-[14px] text-[#232A69]">
                        $32.00
                      </p>
                      <p className="font-josef line-through	 text-[14px] text-[#FF38B0]">
                        $56.00
                      </p>
                      <div className="flex text-yellow-500 justify-between">
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarHalfOutline />
                        <TiStarOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <p className="font-Lato text-[16px] pb-16 pt-16  w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>

                <p className="font-Lato text-[16px] pb-16 pt-16  w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc,
                </p>

                <div className="flex w-[126px] pb-12 ml-[350px] justify-between">
                  <a href="https://facebook.com">
                    <img src={img17} alt="Facebook" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={img18} alt="Facebook" />
                  </a>
                  <a href="https://x.com">
                    <img src={img19} alt="Facebook" />
                  </a>
                </div>

                <div className="w-[883px] px-5  bg-[#F7F8FB] flex items-center justify-between h-[45px]">
                  <button>
                    <div className="flex text-[#8A8FB9] items-center font-Lato font-medium text-[17px]">
                      <LuMoveLeft />
                      <p>Previous Post</p>
                    </div>
                  </button>

                  <button>
                    <div className="flex text-[#8A8FB9] items-center font-Lato font-medium text-[17px]">
                      <p>Next Post</p>
                      <LuMoveRight />
                    </div>
                  </button>
                </div>
              </section>

              <section className="pt-12">
                <div className="space-y-12">
                  <div
                    className="w-[668px] flex border-2  bg-white items-center p-3  h-[138px]"
                    style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.2)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="">
                        <img src={img26} alt="" />
                      </div>

                      <div>
                        <div className="flex gap-6 items-center ">
                          <p className="font-semibold font-josef text-[19px] text-[#363385]">
                            Sapien ac
                          </p>
                          <p className="font-Lato text-[13px] ">Jan 09 2020</p>
                        </div>
                        <p className="w-[506px] tracking-widest	 font-Lato text-[13px] text-[#A3A2B6]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. At in vitae rutrum vulputate consectetur.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-[668px] flex border-2  bg-white items-center p-3  h-[138px]"
                    style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.2)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="">
                        <img src={img27} alt="" />
                      </div>

                      <div>
                        <div className="flex gap-6 items-center ">
                          <p className="font-semibold font-josef text-[19px] text-[#363385]">
                            Augue conva
                          </p>
                          <p className="font-Lato text-[13px] ">Aug 18 2020</p>
                        </div>
                        <p className="w-[506px] tracking-widest	 font-Lato text-[13px] text-[#A3A2B6]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. At in vitae rutrum vulputate consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="py-14">
                  <div className="flex py-4 gap-[50px]">
                    <div className="relative w-[340px] h-[42px]">
                      <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        placeholder="Your Name*"
                        className="w-full h-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div className="relative w-[340px] h-[42px]">
                      <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        placeholder="Your Name*"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="">
                    <div className="relative h-[205px] py-4 w-[730px]">
                      <span className="absolute top-7 left-3 text-gray-400">
                        💬
                      </span>
                      <textarea
                        placeholder="Write your comment*"
                        rows="4"
                        className="w-full pl-10 h-full pr-4 pt-3 pb-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-Lato text-[#8A91AB] text-[14px] font-medium">
                    <input type="checkbox" name="" id="" />
                    <p>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </p>
                  </div>

                  <div className="py-16">
                    <button className="w-[698px] bg-[#FB2E86] text-white rounded-sm  h-[50px]">
                      Continue Shipping
                    </button>
                  </div>
                </div>
              </section>
            </div>

            <div className=" w-[30%]">
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
                <p className="font-semibold font-josef text-[22px]  pb-6 text-[#151875]">
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
                <div className="flex w-[126px] justify-between">
                  <a href="https://facebook.com">
                    <img src={img17} alt="Facebook" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={img18} alt="Facebook" />
                  </a>
                  <a href="https://x.com">
                    <img src={img19} alt="Facebook" />
                  </a>
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

export default BlogPage_2;
