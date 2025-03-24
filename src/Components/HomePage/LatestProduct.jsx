import React, { useContext, useState } from "react";
import image1166png from "../../assets/img/image 1166.png";
import image1168png from "../../assets/img/image 1168.png";
import image15png from "../../assets/img/image 15.png";
import Sale1png from "../../assets/img/Sale1.png";
import image23png from "../../assets/img/image 23.png";
import image321png from "../../assets/img/image 32(1).png";
import image31png from "../../assets/img/image 3(1).png";
import { FiShoppingCart } from "react-icons/fi";
import { IoEllipse } from "react-icons/io5";

import { IoIosHeartEmpty } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ApiDataContext } from "../Others/ContextApi";

const LatestProduct = () => {
  const products = [
    {
      image: image1166png,
      title: "Comfort Handy Craft",
      price: 42,
      oldPrice: 65,
    },
    {
      image: image15png,
      title: "Comfort Handy Craft",
      price: 42,
      oldPrice: 65,
    },
    {
      image: image1168png,
      title: "Comfort Handy Craft",
      price: 42,
      oldPrice: 65,
    },
    {
      image: image23png,
      title: "Comfort Handy Craft",
      price: 42,
      oldPrice: 65,
    },
    {
      image: image321png,
      title: "Comfort Handy Craft",
      price: 42,
      oldPrice: 65,
    },
    {
      image: image31png,
      title: "Comfort Handy Craft",
      price: 42,
      oldPrice: 65,
    },
  ];

  const data = useContext(ApiDataContext);

  let [tabProduct, setTabProduct] = useState([]);

  const handleProduct = (showRange) => {
    let filteredItem = data.filter(
      (item) => item.id > showRange.min && item.id <= showRange.max
    );
    setTabProduct(filteredItem);
  };

  const [activeTab, setActiveTab] = useState(0); // সক্রিয় ট্যাব ট্র্যাক করতে `useState`

  const handleTabChange = (index) => {
    setActiveTab(index); // ট্যাব পরিবর্তনের জন্য `activeTab` আপডেট
  };

  return (
    <section>
      <div className="container mx-auto pt-16">
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          <section>
            <div>
              <h1 className="font-josef font-bold text-center text-[42px]   pb-5 text-[#151875]">
                Leatest Products
              </h1>
              <div className="flex className='font-lato gap-8 justify-center text-center  text-[18px] '">
                <TabList>
                  <Tab>
                    <p
                      className={`  flex items-baseline font-semibold gap-2 ${
                        activeTab == 0
                          ? "underline underline-offset-3 text-[#FB2E86]"
                          : "text-[#151875] font-semibold"
                      }`}
                    >
                      New Arrival
                      {activeTab === 0 && <IoEllipse className="text-[8px]" />}
                    </p>
                  </Tab>
                  <Tab>
                    <p
                      onClick={() => {
                        handleProduct({ min: 0, max: 6 });
                        // setTabName(true);
                      }}
                      // className="text-[#151875] font-semibold"
                      className={`flex items-baseline font-semibold gap-2 ${
                        activeTab === 1
                          ? "underline underline-offset-3 text-[#FB2E86]"
                          : "text-[#151875] font-semibold"
                      }`}
                    >
                      Best Seller
                      {activeTab === 1 && <IoEllipse className="text-[8px]" />}
                    </p>
                  </Tab>
                  <Tab>
                    <p
                      onClick={() => handleProduct({ min: 7, max: 13 })}
                      className={`flex items-baseline font-semibold gap-2 ${
                        activeTab === 2
                          ? "underline underline-offset-3 text-[#FB2E86]"
                          : "text-[#151875]"
                      }`}
                    >
                      Featured
                      {activeTab === 2 && <IoEllipse className="text-[8px]" />}
                    </p>
                  </Tab>
                  <Tab>
                    <p
                      onClick={() => handleProduct({ min: 14, max: 20 })}
                      className={`flex items-baseline font-semibold gap-2 ${
                        activeTab === 3
                          ? "underline underline-offset-3 text-[#FB2E86]"
                          : "text-[#151875] font-semibold"
                      }`}
                    >
                      Special Offer
                      {activeTab === 3 && <IoEllipse className="text-[8px]" />}
                    </p>
                  </Tab>
                </TabList>
              </div>
            </div>
          </section>

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 pt-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group shadow-md rounded-md overflow-hidden relative bg-white"
                >
                  {/* Sale Badge */}
                  <div className="absolute w-[50%] top-[-60px] left-[-180px] duration-700 ease-in-out group-hover:left-[-35px]">
                    <img src={Sale1png} alt="Sale Badge" />
                  </div>

                  {/* Product Image */}
                  <div className="w-full h-[270px] flex items-center justify-center bg-[#F7F7F7] group-hover:bg-white">
                    <img src={product.image} alt={product.title} />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 space-y-2">
                    <h1 className="font-josef text-[18px] text-[#151875]">
                      {product.title}
                    </h1>
                    <div className="flex justify-between items-center">
                      <h1 className="font-josef text-[16px] text-[#151875]">
                        ${product.price.toFixed(2)}
                      </h1>
                      <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                        ${product.oldPrice.toFixed(2)}
                      </h1>
                    </div>
                  </div>

                  {/* Hover Icons */}
                  <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                    <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 pt-8">
              {tabProduct.map((product, index) => (
                <div
                  key={index}
                  className="group shadow-md rounded-md overflow-hidden relative bg-white"
                >
                  {/* Sale Badge */}
                  <div className="absolute w-[50%] top-[-60px] left-[-180px] duration-700 ease-in-out group-hover:left-[-35px]">
                    <img src={Sale1png} alt="Sale Badge" />
                  </div>

                  {/* Product Image */}
                  <div className="w-full h-[270px] flex items-center justify-center bg-[#F7F7F7] group-hover:bg-white">
                    <img src={product.thumbnail} alt={product.title} />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 space-y-2">
                    <h1 className="font-josef text-[18px] text-[#151875]">
                      {product.title}
                    </h1>
                    <div className="flex justify-between items-center">
                      <h1 className="font-josef text-[16px] text-[#151875]">
                        ${product.price}
                      </h1>
                      <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                        $
                        {(product.discountPercentage + product.price).toFixed(
                          2
                        )}
                      </h1>
                    </div>
                  </div>

                  {/* Hover Icons */}
                  <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                    <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 pt-8">
              {tabProduct.map((product, index) => (
                <div
                  key={index}
                  className="group shadow-md rounded-md overflow-hidden relative bg-white"
                >
                  {/* Sale Badge */}
                  <div className="absolute w-[50%] top-[-60px] left-[-180px] duration-700 ease-in-out group-hover:left-[-35px]">
                    <img src={Sale1png} alt="Sale Badge" />
                  </div>

                  {/* Product Image */}
                  <div className="w-full h-[270px] flex items-center justify-center bg-[#F7F7F7] group-hover:bg-white">
                    <img src={product.thumbnail} alt={product.title} />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 space-y-2">
                    <h1 className="font-josef text-[18px] text-[#151875]">
                      {product.title}
                    </h1>
                    <div className="flex justify-between items-center">
                      <h1 className="font-josef text-[16px] text-[#151875]">
                        ${product.price}
                      </h1>
                      <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                        $
                        {(product.discountPercentage + product.price).toFixed(
                          2
                        )}
                      </h1>
                    </div>
                  </div>

                  {/* Hover Icons */}
                  <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                    <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 pt-8">
              {tabProduct.map((product, index) => (
                <div
                  key={index}
                  className="group shadow-md rounded-md overflow-hidden relative bg-white"
                >
                  {/* Sale Badge */}
                  <div className="absolute w-[50%] top-[-60px] left-[-180px] duration-700 ease-in-out group-hover:left-[-35px]">
                    <img src={Sale1png} alt="Sale Badge" />
                  </div>

                  {/* Product Image */}
                  <div className="w-full h-[270px] flex items-center justify-center bg-[#F7F7F7] group-hover:bg-white">
                    <img src={product.thumbnail} alt={product.title} />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 space-y-2">
                    <h1 className="font-josef text-[18px] text-[#151875]">
                      {product.title}
                    </h1>
                    <div className="flex justify-between items-center">
                      <h1 className="font-josef text-[16px] text-[#151875]">
                        ${product.price}
                      </h1>
                      <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                        $
                        {(product.discountPercentage + product.price).toFixed(
                          2
                        )}
                      </h1>
                    </div>
                  </div>

                  {/* Hover Icons */}
                  <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                    <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default LatestProduct;
