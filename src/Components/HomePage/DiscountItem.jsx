import React, { useState } from "react";
import { IoEllipse } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import tortuga from "../../assets/img/Grosdfsdafup 154.png";
import sofa from "../../assets/img/sofa promotional header.png";
import plasticChair from "../../assets/img/Group 153.png";
import ReUsableOne from "../Others/ReUsableOne";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const DiscountItem = () => {
  

  const [activeTab, setActiveTab] = useState(0); // সক্রিয় ট্যাব ট্র্যাক করতে `useState`

  const handleTabChange = (index) => {
    setActiveTab(index); // ট্যাব পরিবর্তনের জন্য `activeTab` আপডেট
  };
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          {/* ReUsable Component */}
          {/* <ReUsableOne 
          heading="Discount Item"
          catergoryName1="Wood Chair"
          catergoryName2="Plastic Chair"
          catergoryName3="Sofa Collection"
          
        /> */}

          <section>
            <div>
              <h1 className="font-josef font-bold text-center text-[42px]   pb-5 text-[#151875]">
                Discount Item
              </h1>
              <div className="flex className='font-lato gap-8 justify-center   text-[18px] '">
                <TabList>
                  <Tab>
                    <p
                      className={`  flex items-baseline font-semibold gap-2 ${
                        activeTab == 0
                          ? "underline underline-offset-3 text-[#FB2E86]"
                          : "text-[#151875] font-semibold "
                      }`}
                    >
                      Wood Chair{" "}
                      {activeTab === 0 && <IoEllipse className="text-[8px]" />}
                    </p>
                  </Tab>

                  <Tab>
                    
                    <p
                      className={`  flex items-baseline font-semibold gap-2 ${
                        activeTab == 1
                          ? "underline underline-offset-3 text-[#FB2E86]"
                          : "text-[#151875] font-semibold "
                      }`}
                    >
                      Plastic Chair{" "}
                      {activeTab === 1 && <IoEllipse className="text-[8px]" />}
                    </p>
                  </Tab>

                  <Tab>
                    <p
                      className={`  flex items-baseline font-semibold gap-2 ${
                        activeTab == 2
                          ? "underline underline-offset-3 text-[#FB2E86]"
                          : "text-[#151875] font-semibold  "
                      }`}
                    >
                      Sofa Collection{" "}
                      {activeTab === 2 && <IoEllipse className="text-[8px]" />}
                    </p>
                  </Tab>
                </TabList>
              </div>
            </div>
          </section>
          {/* Main Section */}

          <TabPanel>
            <div className="flex flex-col pt-12 lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-16 h-auto lg:h-[597px]">
              {/* Left Content */}
              <div className="text-center lg:flex lg:gap-5 lg:items-center  lg:text-left">
                <div>
                  <h1 className="font-josef font-bold pb-3 text-[28px] md:text-[30px] lg:text-[35px] text-[#151875]">
                    20% Discount On All Products
                  </h1>
                  <p className="font-josef text-[18px] md:text-[20px] lg:text-[21px] pt-2 pb-5 text-[#FB2E86]">
                    Eams Sofa Compact
                  </p>
                  <p className="font-lato leading-6 md:leading-8 tracking-wide lg:tracking-widest pb-4 text-[14px] md:text-[16px] lg:text-[17px] text-[#B7BACB] max-w-[600px] mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    eget feugiat habitasse nec, bibendum condimentum.
                  </p>

                  {/* Features Section */}
                  <div className="flex flex-col md:flex-row md:justify-between gap-6 lg:gap-10 pb-10 lg:pb-14">
                    <div className="space-y-4">
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Material expose like metals
                      </p>
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Simple neutral colours.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Clear lines and geometric figures
                      </p>
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Material expose like metals
                      </p>
                    </div>
                  </div>

                  {/* Shop Button */}
                  <button className="font-josef justify-center items-center text-center font-semibold text-[15px] md:text-[17px] rounded-md py-4 px-10 md:px-14 bg-[#f92a87] text-white">
                    Shop Now
                  </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center pb-6 ">
                  <img
                    src={tortuga}
                    alt="Discount Item"
                    className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-full"
                  />
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex flex-col pt-12 lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-16 h-auto lg:h-[597px]">
              {/* Left Content */}
              <div className="text-center lg:flex lg:gap-5 lg:items-center  lg:text-left">
                <div>
                  <h1 className="font-josef font-bold pb-3 text-[28px] md:text-[30px] lg:text-[35px] text-[#151875]">
                    20% Discount On All Products
                  </h1>
                  <p className="font-josef text-[18px] md:text-[20px] lg:text-[21px] pt-2 pb-5 text-[#FB2E86]">
                    Eams Sofa Compact
                  </p>
                  <p className="font-lato leading-6 md:leading-8 tracking-wide lg:tracking-widest pb-4 text-[14px] md:text-[16px] lg:text-[17px] text-[#B7BACB] max-w-[600px] mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    eget feugiat habitasse nec, bibendum condimentum.
                  </p>

                  {/* Features Section */}
                  <div className="flex flex-col md:flex-row md:justify-between gap-6 lg:gap-10 pb-10 lg:pb-14">
                    <div className="space-y-4">
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Material expose like metals
                      </p>
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Simple neutral colours.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Clear lines and geometric figures
                      </p>
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Material expose like metals
                      </p>
                    </div>
                  </div>

                  {/* Shop Button */}
                  <button className="font-josef justify-center items-center text-center font-semibold text-[15px] md:text-[17px] rounded-md py-4 px-10 md:px-14 bg-[#f92a87] text-white">
                    Shop Now
                  </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center pb-6 ">
                  <img
                    src={plasticChair}
                    alt="Discount Item"
                    className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-full"
                  />
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex flex-col pt-12 lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-16 h-auto lg:h-[597px]">
              {/* Left Content */}
              <div className="text-center lg:flex lg:gap-5 lg:items-center  lg:text-left">
                <div>
                  <h1 className="font-josef font-bold pb-3 text-[28px] md:text-[30px] lg:text-[35px] text-[#151875]">
                    20% Discount On All Products
                  </h1>
                  <p className="font-josef text-[18px] md:text-[20px] lg:text-[21px] pt-2 pb-5 text-[#FB2E86]">
                    Eams Sofa Compact
                  </p>
                  <p className="font-lato leading-6 md:leading-8 tracking-wide lg:tracking-widest pb-4 text-[14px] md:text-[16px] lg:text-[17px] text-[#B7BACB] max-w-[600px] mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    eget feugiat habitasse nec, bibendum condimentum.
                  </p>

                  {/* Features Section */}
                  <div className="flex flex-col md:flex-row md:justify-between gap-6 lg:gap-10 pb-10 lg:pb-14">
                    <div className="space-y-4">
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Material expose like metals
                      </p>
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Simple neutral colours.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Clear lines and geometric figures
                      </p>
                      <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                        <SiTicktick className="text-[#151875]" />
                        Material expose like metals
                      </p>
                    </div>
                  </div>

                  {/* Shop Button */}
                  <button className="font-josef justify-center items-center text-center font-semibold text-[15px] md:text-[17px] rounded-md py-4 px-10 md:px-14 bg-[#f92a87] text-white">
                    Shop Now
                  </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center pb-6 ">
                  <img
                    src={sofa}
                    alt="Discount Item"
                    className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-full"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default DiscountItem;
