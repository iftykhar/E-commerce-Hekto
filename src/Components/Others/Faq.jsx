import React from "react";
import SponserLogo from "../HomePage/SponserLogo";
import PageHeading from "../Others/PageHeading";


const Faq = () => {
  return (
    <>
    <PageHeading
        headline="FAQ"
        p1="Home"
        p2=". Pages"
        page=". Faq"
      />
      <section>
        <div className="container mx-auto">
          <div className="pt-36 pb-24">
            <div className="lg:flex gap-24">
              <div className="py-10">
                <div className="pb-12">
                  <p className="text-[36px] font-bold font-josef text-[#1D3178]">
                    Generel Information
                  </p>
                </div>

                <div className="py-4">
                  <p className="text-[17px] font-bold font-josef pb-3 text-[#1D3178]">
                    Eu dictumst cum at sed euismood condimentum?
                  </p>
                  <p className="text-[16px]  font-josef text-[#A1ABCC]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed <br /> tristique mollis vitae, consequat
                    gravida sagittis.
                  </p>
                </div>

                <div className="py-4">
                  <p className="text-[17px] font-bold font-josef pb-3 text-[#1D3178]">
                    Magna bibendum est fermentum eros.
                  </p>
                  <p className="text-[16px]  font-josef text-[#A1ABCC]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed <br /> tristique mollis vitae, consequat
                    gravida sagittis.
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[17px] font-bold font-josef pb-3 text-[#1D3178]">
                    Odio muskana hak eris conseekin sceleton?
                  </p>
                  <p className="text-[16px]  font-josef text-[#A1ABCC]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed <br /> tristique mollis vitae, consequat
                    gravida sagittis.
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[17px] font-bold font-josef pb-3 text-[#1D3178]">
                    Elit id blandit sabara boi velit gua mara?
                  </p>
                  <p className="text-[16px]  font-josef text-[#A1ABCC]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed <br /> tristique mollis vitae, consequat
                    gravida sagittis.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F8FD] p-10 rounded">
                <p className="font-josef py-4 font-bold text-[24px] text-[#151875]">
                  Ask a Question
                </p>

                <div className="max-w-[600px] mx-auto py-16">
                  <form className="space-y-6">
                    {/* Row 1: Name and Email */}
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <input
                          type="text"
                          placeholder="Your Name*"
                          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="w-1/2">
                        <input
                          type="email"
                          placeholder="Your E-mail*"
                          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Row 2: Subject */}
                    <div>
                      <input
                        type="text"
                        placeholder="Subject*"
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <textarea
                        placeholder="Type Your Message*"
                        rows="4"
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="">
                      <button
                        type="submit"
                        className="bg-pink-500 text-white py-3 px-6 rounded hover:bg-pink-600 transition"
                      >
                        Send Mail
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <SponserLogo />
        </div>
      </section>
    </>
  );
};

export default Faq;
