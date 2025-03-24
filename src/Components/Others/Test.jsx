import React from "react";
import logo from "../../assets/img/Logo121.png";

const Test = () => {
  return (
    <>
      <nav>
        <div className="container mx-auto">

<div className="flex justify-between items-center">
          <div className=" flex items-center ">
            <img src={logo} alt="" />
          </div>

          <div >
                <ul className="flex gap-8  ">
                    <li><a href="#home">Home</a></li>
                    <li className="group relative"><a href="#services">Services</a>
                        <ul className="hidden absolute w-[100px] py-2 hover:bg-gray-100  text-center -left-5 mt-1 bg-white shadow-md rounded group-hover:block">
                            <li>Page 1</li>
                            <li>Page 2</li>
                            <li>Page 3</li>
                            <li>Page 4</li>
                        </ul>
                    </li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Reviews">Reviews</a></li>
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><a href="#White level">White level</a></li>
                </ul>
            </div>

            <div class="space-x-10">
                <button>Log in</button>
                <button>Book a demo</button>
            </div>

          </div> 
        </div>
      </nav>
    </>
  );
};

export default Test;
