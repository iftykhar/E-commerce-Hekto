import React from "react";
import Pages from "../../PAGES/Pages";
import PageHeading from "./PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { removeFromCart, decrement, increment } from "../../slice/cartSlice";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartItemManager.cartItems);

  const calculateTotal = () =>
    cartData.reduce((sum, item) => sum + item.qty * item.price, 0);
  return (
    <>
      <PageHeading headline="Hekto Demo" />
      <div className="container mx-auto">
        <div className="pt-16 pb-8 space-y-2">
          <h1 className="font-Lato text-[24px] text-[#1D3178] font-bold">
            Hekto Demo
          </h1>
          <p className="font-Lato text-[12px] text-[#1D3178]">
            Cart/ Information/ Shipping/ Payment
          </p>
        </div>

        <div className="lg:flex justify-between">

          <div className=" pb-6   lg:w-[70%] ">

            <div className="bg-[#F8F8FD] rounded ">
              <div className="px-10 pt-12 pb-12 ">
                <div className="flex justify-between py-10   ">
                  <h1 className="font-bold font-josef text-[#1D3178] lg:text-[18px]">
                    Contact Information
                  </h1>
                  <p className="font-Lato font-medium lg:text-[14px] text-[#C1C8E1]">
                    Already have an account?
                  </p>
                </div>

                <div className="border-b border-[#BFC6E0] py-2 pt-8 ">
                  <input
                    placeholder="Email or mobile phone number"
                    type="text"
                    className="w-[80%]  bg-transparent  placeholder-slate-400"
                  />
                </div>

                <div className="flex items-center space-x-3 py-6">
                  <FaCircle className="text-[#19D16F]" />
                  <p>Keep me up to date on news and excluive offers</p>
                </div>

                <h1 className=" font-josef font-bold lg:text-[18px] text-[#1D3178] pt-20 pb-10">
                  Shipping address
                </h1>

                <div className="flex justify-between">
                  <div className="border-b border-[#BFC6E0] py-2 w-[47%]">
                    <input
                      placeholder="First name (optional)"
                      type="text"
                      className="w-[80%]  bg-transparent  placeholder-slate-400"
                    />
                  </div>

                  <div className="border-b border-[#BFC6E0] py-2 w-[47%]">
                    <input
                      placeholder="Last name"
                      type="text"
                      className="w-[80%]  bg-transparent  placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="border-b border-[#BFC6E0] pt-12 py-2 w-[100%] ">
                  <input
                    placeholder="Address"
                    type="text"
                    className="w-[80%]  bg-transparent  placeholder-slate-400"
                  />
                </div>

                <div className="border-b border-[#BFC6E0] pt-12 py-2 w-[100%] ">
                  <input
                    placeholder="Appaetnentment,suit,e.t.c (optinal)"
                    type="text"
                    className="w-[80%]  bg-transparent  placeholder-slate-400"
                  />
                </div>
                <div className="border-b border-[#BFC6E0] pt-12 py-2 w-[100%] ">
                  <input
                    placeholder="City"
                    type="text"
                    className="w-[80%]  bg-transparent  placeholder-slate-400"
                  />
                </div>

                <div className="flex justify-between py-12">
                  <div className="border-b border-[#BFC6E0] py-2 w-[47%]">
                    <input
                      placeholder="Bangladesh"
                      type="text"
                      className="w-[80%]  bg-transparent  placeholder-slate-400"
                    />
                  </div>

                  <div className="border-b border-[#BFC6E0] py-2 w-[47%]">
                    <input
                      placeholder="Postal Code"
                      type="text"
                      className="w-[80%]  bg-transparent  placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <button className="bg-[#FB2E86] px-8 py-3  text-white font-semibold font-josef text-[16px]">
                    Continue Shipping
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-[25%]">
            {cartData.map((item) => (
              <div>
                <div className="flex items-center   py-3 justify-between  border-b  border-gray-300 ">
                  <div className="flex    ">
                    <div className="flex    my-2 gap-4 ">
                      <div className="w-[83px]  h-[87px]  relative overflow-ellipsis flex items-center  border  ">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <TiDelete className="absolute -top-2 left-[88%] text-[20px]" />
                        </button>
                        <img src={item.thumbnail} alt="" />
                      </div>

                      <div>
                        <h3 className="font-josef text-[14px] text-[#000000]">
                          {item.title}
                        </h3>

                        <p className="font-josef text-[#A1A8C1] text-[14px]">
                          Brand: {item.brand}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className=" text-center  flex flex-col justify-center">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6 pb-11">
              <div className="bg-[#f4f4fc] rounded-md px-10 pb-5 mt-5    font-semibold text-[14px] text-[#C5CBE3]pb-4 ">
                <div className="flex justify-between pt-5   border-b-2 border-gray-300 ">
                  <p className="font-Lato font-semibold  text-[18px] text-[#1d3178]">
                    Subtotals:
                  </p>
                  <p className="font-Lato font-semibold  text-[18px] text-[#1d3178]">
                    ${calculateTotal().toFixed(2)}
                  </p>
                </div>

                <div className="flex justify-between border-b-2 pt-5 border-gray-300  ">
                  <p className="font-Lato font-semibold text-[18px] text-[#1d3178]">
                    Totals:
                  </p>
                  <p className="font-Lato font-semibold text-[18px] text-[#1d3178]">
                    ${Math.ceil(calculateTotal())}
                  </p>
                </div>

                <p className="font-Lato flex items-center py-5 gap-2 text-[12px] text-[#8A91AB]">
                  <FaCircle className="text-[#19D16F]" />
                  Shipping & taxes calculated at checkout
                </p>

                <div className="flex justify-center py-2">
                  <Link to={"/checkout/order-complete"}>
                    <button className="bg-[#19D16F] text-center  font-lato font-bold text-white rounded-md text-[14px] w-[312px] h-[40px]">
                      Confirm Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
