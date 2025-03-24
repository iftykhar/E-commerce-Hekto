import React from "react";
import PageHeading from "./PageHeading";
import tick from "../../assets/img/Vectorww 16.png";
import tick1 from "../../assets/img/Ellipse 70.png";
import tick3 from "../../assets/img/Vectorfsdfds 15.png";
import { Link } from "react-router-dom";
import fff from "../../assets/img/payment_success_icon.png";

const OrderComplete = () => {
  return (
    <>
      <PageHeading
        headline="Order Complete"
        p1="Home"
        p2=". Pages"
        page=". Order Complete"
      />

      <div className="container mx-auto ">
        <div className=" py-4 ">
          <div className="flex items-center  text-center justify-center">
            <img src={fff} alt="" className="w-[300px]" />
          </div>

          <div className="flex flex-col items-center ">
            <h1 className="text-[36px] font-josef py-6 text-center font-bold text-[#101750]">
              Your Order Is Completed!
            </h1>
            <p className="font-Lato font-semibold lg:w-[700px] text-center  text-[16px] py-4 text-[#8D92A7]">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <Link to={"/shop"}>
              <button className="font-Lato font-semibold text-white text-[16px] bg-[#FF1788] px-6 py-3">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComplete;
