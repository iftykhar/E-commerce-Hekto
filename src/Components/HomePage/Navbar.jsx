import React, { useState, useContext } from "react"; 
import { ApiDataContext } from "../Others/ContextApi"; 
import logo from "../../assets/img/Hekto.png";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // সার্চ ইনপুট সংরক্ষণ করার জন্য State
  const products = useContext(ApiDataContext); // Context API থেকে প্রোডাক্ট লোড করা
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [menuShow, setMenuShow] = useState(false);
  const location = useLocation(); // Get the current path

  const handleMenu = () => {
    setMenuShow(!menuShow);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0  z-50">
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex justify-between items-center ">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-8 lg:h-10 hover:scale-105" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="lg:flex hidden">
            <ul className="flex gap-8 text-gray-700 font-medium">
              <li className="group relative hover:scale-110">
                <Link
                  to={"/"}
                  className={` flex items-center ${
                    isActive("/") ? "text-[#FB2E86]" : "hover:text-[#FB2E86] "
                  }`}
                >
                  Home
                  <FaAngleDown className="ml-1 text-sm" />
                </Link>

                <ul className="hidden absolute w-[100px]  text-center -left-5 mt-1 bg-white shadow-md rounded group-hover:block">
                  {["Page 1", "Page 2", "Page 3", "Page 4"].map(
                    (page, index) => (
                      <li key={index} className="    py-2 hover:bg-gray-100">
                        <Link to={"/404-not-found"}>{page}</Link>
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li className="hover:scale-110">
                <Link
                  to={"/about"}
                  className={`   ${
                    isActive("/about")
                      ? "text-[#FB2E86]"
                      : "hover:text-[#FB2E86] hover:scale-110 "
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="hover:scale-110 ">
                <Link
                  to={"/shop"}
                  className={`  ${
                    isActive("/shop")
                      ? "text-[#FB2E86]"
                      : "hover:text-[#FB2E86]"
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li className="hover:scale-110 ">
                <Link
                  to={"/blog"}
                  className={`${
                    isActive("/blog")
                      ? "text-[#FB2E86]"
                      : "hover:text-[#FB2E86]"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li className="hover:scale-110 ">
                <Link
                  to={"/faq"}
                  className={`${
                    isActive("/faq") ? "text-[#FB2E86]" : "hover:text-[#FB2E86]"
                  }`}
                >
                  FAQ
                </Link>
              </li>
              <li className="hover:scale-110 ">
                <Link
                  to={"/contact"}
                  className={`${
                    isActive("/contact")
                      ? "text-[#FB2E86]"
                      : "hover:text-[#FB2E86]"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center">
              <input
                placeholder="Search your product"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // সার্চ টার্ম আপডেট করা
                className="border px-4 py-2 rounded-l-md text-sm focus:outline-none"
              />

              <button className="bg-[#FB2E86]  px-4 py-2 rounded-r-md">
                <IoSearch className="text-white text-lg" />
              </button>
            </div>

            {searchTerm && filteredProducts.length > 0 && (
              <ul className="absolute bg-white border rounded-md shadow-md mt-1 w-full max-h-60 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100"
                  >
                    {/* প্রোডাক্ট ইমেজ */}
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded"
                    />

                    {/* প্রোডাক্ট নাম */}
                    <Link
                      to={`/shop/${product.id}`}
                      className="text-gray-700 hover:text-blue-500"
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div
            onClick={handleMenu}
            className="lg:hidden text-2xl cursor-pointer"
          >
            {menuShow ? <RxCross2 /> : <SlMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            menuShow ? "block" : "hidden"
          }`}
        >
          <ul className="bg-gray-50 mt-4 p-4 rounded shadow-md">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Shop", path: "/shop" },
              { name: "Blog", path: "/blog" },
              { name: "FAQ", path: "/faq" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={item.path}
                  className={`block py-2 ${
                    isActive(item.path)
                      ? "text-[#FB2E86]"
                      : "hover:text-[#FB2E86]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
