import React from "react";
import PageHeading from "../Others/PageHeading";
import img1 from "../../assets/img/Groupsadfasdf 73.png";
import img2 from "../../assets/img/freedfads-delivery 1.png";
import img3 from "../../assets/img/cashbackdfsa 1.png";
import img4 from "../../assets/img/premium-qualitfasdsady 1.png";
import img5 from "../../assets/img/24-hourdsafadsfdasfs-support 1.png";
import img6 from "../../assets/img/Mask Grdsfsadfadoup.png";
import img7 from "../../assets/img/Mask Grodsfdsafup.png";
import img8 from "../../assets/img/Mask Grdadsfaoup.png";

const About = () => {
  return (
    <>
      <PageHeading
        headline="About Us"
        p1="Home"
        p2=". Pages"
        page=". About Us"
      />

      <div className="container mx-auto">

        <div>

          <div className="lg:flex gap-16   py-10  ">
            <div className="flex  items-center">
              <img src={img1} alt="" />
            </div>

            <div className="mt-12">
              <p className="lg:w-[522px] font-josef font-bold   text-[36px] text-[#151875]">
                Know About Our Ecomerce Business, History
              </p>
              <p className="lg:w-[550px] mt-5 leading-7 font-Lato font-semibold text-[16px] text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <button className="bg-[#FB2E86] w-[145px] h-[44px] rounded text-white mt-16">
                Contact us
              </button>
            </div>
          </div>

        </div>

        <section className="pb-16">
          <p className="font-bold font-josef py-16 text-[42px] text-center">
            Our Features
          </p>

          <div className=" flex flex-wrap gap-12 justify-center">

            <div className="w-[270px] hover:border-b-4 border-orange-400 hover:scale-110  h-[320px] shadow-2xl  justify-center  text-center bg-white">
              <div className="flex items-center  pt-12 justify-center">
                <img src={img2} alt="" />
              </div>

              <p className="font-josef pt-6 font-semibold text-[22px] text-[#151875]">
                Free Delivery
              </p>
              <p className="  pt-6   font-Lato text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Massa purus gravida.
              </p>
            </div>

            <div className="w-[270px] hover:border-b-4 border-orange-400 hover:scale-110    h-[320px] shadow-2xl  justify-center  text-center bg-white">
              <div className="flex items-center  pt-12 justify-center">
                <img src={img3} alt="" />
              </div>

              <p className="font-josef pt-6 font-semibold text-[22px] text-[#151875]">
                100% Cash Back
              </p>
              <p className="  pt-6   font-Lato text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Massa purus gravida.
              </p>
            </div>

            <div className="w-[270px] hover:border-b-4 border-orange-400  hover:scale-110   h-[320px] shadow-2xl  justify-center  text-center bg-white">
              <div className="flex items-center  pt-12 justify-center">
                <img src={img4} alt="" />
              </div>

              <p className="font-josef pt-6 font-semibold text-[22px] text-[#151875]">
                Quality Product
              </p>
              <p className="  pt-6   font-Lato text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Massa purus gravida.
              </p>
            </div>

            <div className="w-[270px] hover:border-b-4 border-orange-400 hover:scale-110   h-[320px] shadow-2xl  justify-center  text-center bg-white">
              <div className="flex items-center  pt-12 justify-center">
                <img src={img5} alt="" />
              </div>

              <p className="font-josef pt-6 font-semibold text-[22px] text-[#151875]">
                24/7 Support
              </p>
              <p className="  pt-6   font-Lato text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Massa purus gravida.
              </p>
            </div>

          </div>
        </section>

      </div>

      <section className="bg-[#FBFBFF]  w-full">

        <div className="container mx-auto">

            <div>
                <p className="font-bold text-center text-[42px] font-josef py-10">Our Client Say!</p>

                <div className="flex relative items-center gap-4 pt-5  justify-center">
                    <img src={img6} alt="" />
                    <img src={img7} alt=""  />
                    <img src={img8} alt="" />
                    
                </div>
                <div className="pt-4 ">
                    <p className="font-semibold py-2 text-[22px] text-center font-Lato">Selina Gomez</p>
                    <p className="font-semibold text-[10px] text-[#8A8FB9] text-center font-Lato">Ceo At Webecy Digital</p>
                </div>

                <p className="font-Lato py-10 text-center mx-auto  text-[16px] font-bold text-[#8A8FB9] lg:w-[690px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>

        </div>
      </section>
      <div className="py-16">

      </div>
    </>
  );
};

export default About;
