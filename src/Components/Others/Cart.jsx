import React from "react";
import PageHeading from "./PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  increment,
  decrement,
  clearCart,
  removeFromCart,
} from "../../slice/cartSlice";
import SponserLogo from "../HomePage/SponserLogo";
import { TiDelete } from "react-icons/ti";

const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartItemManager.cartItems);

  const calculateTotal = () =>
    cartData.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <>
      <PageHeading
        headline="Cart Details"
        p1="Home"
        p2=". Pages"
        page=". Cart Details"
      />
      <div></div>
      <div className="container mx-auto ">
        <div className="lg:flex  relative overflow-hidden justify-between ">
          <h1
            className={`text-gray-400 absolute top-[50%] left-[30%] text-center text-[42px] font-josef font-semibold ${
              Math.ceil(calculateTotal()) === 0 ? "" : "hidden"
            }`}
          >
            Your cart is empty.
          </h1>

          <div className=" lg:w-[65%]  ">
            <div className="flex   pt-24 pb-6 ">
              <h2 className="font-josef  w-[40%]  font-bold  lg:text-[20px] text-[#1d3178]">
                Product
              </h2>
              <h2 className="font-josef  w-[20%]  text-center font-bold lg:text-[20px] text-[#1d3178]">
                Price
              </h2>
              <h2 className="font-josef  font-bold  w-[20%]  text-center lg:text-[20px] text-[#1d3178]">
                Quantity
              </h2>
              <h2 className="font-josef  font-bold w-[20%]  text-center lg:text-[20px] text-[#1d3178]">
                Total
              </h2>
            </div>

            {cartData.map((item) => (
              <div>
                <div className="flex   py-3  border-b border-gray-300 ">
                  <div className="flex  w-[40%] ">
                    <div className="flex  my-2 gap-4 ">
                      <div className="lg:w-[83px]  h-[87px] relative overflow-ellipsis flex items-center  border  ">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <TiDelete className="absolute -top-2 left-[88%] text-[20px]" />
                        </button>
                        <img src={item.thumbnail} alt="" />
                      </div>

                      <div>
                        <h3 className="font-josef text-[12px] lg:text-[14px] text-[#000000]">
                          {item.title}
                        </h3>
                        <p className="font-josef text-[#A1A8C1] text-[10px] lg:text-[14px]">
                          Brand: {item.brand}
                        </p>
                        <p className="font-josef text-[#A1A8C1] text-[10px] lg:text-[14px]">
                          Stock: {item.stock}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="w-[20%] text-[10px] lg:text-[16px]  text-center  flex flex-col justify-center">
                    {item.price}
                  </p>
                  <p className="w-[20%]  text-center items-center flex flex-col justify-center">
                    <div class="flex text-[10px] lg:text-[16px] lg:w-[50%] w-[100%] bg-[#E7E7EF] justify-around items-center">
                      <div
                        class="cursor-pointer bg-[#bebfc2] px-1 lg:px-2"
                        onClick={() => dispatch(decrement(item.id))}
                      >
                        -
                      </div>

                      <div>{item.qty}</div>
                      <div
                        class="cursor-pointer bg-[#bebfc2] px-1 lg:px-2"
                        onClick={() => dispatch(increment(item.id))}
                      >
                        +
                      </div>
                    </div>
                  </p>
                  <p className="w-[20%] text-[10px] lg:text-[16px] text-center flex flex-col justify-center">
                    {(item.qty * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className=" lg:w-[28%]  pt-24 pb-6 gap-5 ">
            <h2 className="font-josef   text-center  font-bold text-[20px] text-[#1d3178]">
              Cart Total
            </h2>

            <div>
              <div className="bg-[#f4f4fc] rounded-md px-10 pb-5 mt-5   font-semibold text-[14px] text-[#C5CBE3]pb-4 ">
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
                  <Link to={"/checkout"}>
                    <button className="bg-[#19D16F] text-center  font-lato font-bold text-white rounded-md text-[14px] w-[312px] h-[40px]">
                      Proceed To Checkout
                    </button>
                  </Link>
                </div>
              </div>

              <h2 className="font-josef py-6  text-center  font-bold text-[20px] text-[#1d3178]">
                Calculate Shiping
              </h2>

              <div className="bg-[#f4f4fc]  rounded-md px-14 space-y-6 pt-6 pb-12 ">
                <input type="text" className="border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full font-semibold text-[14px] bg-transparent text-[#C5CBE3] border-gray-300 pt-4" placeholder="Bangladesh"/>

                <input type="text" className="border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full font-semibold text-[14px] bg-transparent text-[#C5CBE3] border-gray-300 pt-4" placeholder="Mirpur Dhaka - 1200"/>
                <input type="text" className="border-b-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full font-semibold text-[14px] bg-transparent text-[#C5CBE3] border-gray-300 pt-4" placeholder="Postal Code"/>

              
                <div className="pt-8">
                  <button className="bg-[#FB2E86] w-[179px] h-[41px]  text-white font-semibold text-[16px] ">
                    Calculate Shiping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between  py-10 lg:w-[65%] ">

          <button className="w-[134px]  px-0 text-white h-[39px] bg-[#FB2E86] font-josef font-semibold text-[16px]">
            Update Curt
          </button>

          <button
            className="w-[134px]  px-0 text-white h-[39px] bg-[#FB2E86] font-josef font-semibold text-[16px] "
            onClick={() => dispatch(clearCart())}
          >
            Clear Curt
          </button>
        </div>
      </div>

      <SponserLogo />
    </>
  );
};

export default Cart;
