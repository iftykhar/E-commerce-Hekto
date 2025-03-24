import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiDataContext } from "../Components/Others/ContextApi";
import PageHeading from "../Components/Others/PageHeading";
import img17 from "../../src/assets/img/Grofdup 202.png";
import img19 from "../../src/assets/img/Group 20dfdasf4.png";
import img18 from "../../src/assets/img/Group dfasdf203.png";

const ProductDetails = () => {
  let productId = useParams();

  let data = useContext(ApiDataContext);

  let singleProduct = data.filter((item) => item.id == productId.id);
  

  return (
    <section>
      <PageHeading
        headline="Product Details"
        p1="Home"
        p2=". Pages"
        page=". Product Details"
      />

<div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section: Images */}
          <div className="flex-shrink-0 lg:w-1/3 flex lg:flex-col gap-4">
            {/* Thumbnail Images */}
            <div className="flex lg:flex-col gap-4">
              {singleProduct[0]?.images?.map((image, index) => (
                <div key={index} className="w-1/4 lg:w-full">
                  <img
                    src={image}
                    alt=""
                    className="border border-gray-200 rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="flex-grow lg:w-2/3">
            {singleProduct.map((item) => (
              <div key={item.id}>
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  {/* Price */}
                  <span className="text-lg font-semibold text-gray-900">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    ${(item.price + item.discountPercentage).toFixed(2)}
                  </span>
                  <span className="text-red-500 text-sm font-semibold">
                    -{item.discountPercentage}%
                  </span>
                </div>

                {/* Rating */}
                
                <div className="flex items-center mt-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="ml-1 text-gray-700">
                    {item.rating} (reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 text-gray-600">{item.description}</p>

                {/* Add to Cart */}
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Add To Cart
                </button>

                {/* Additional Info */}
                <div className="mt-6 text-sm text-gray-600">
                  <p>
                    <strong>Categories:</strong> {item.category}
                  </p>
                  <p>
                    <strong>Tags:</strong> {item.tags.join(", ")}
                  </p>
                  <p className="flex items-center gap-2 mt-4">
                    <strong>Share:</strong>
                    <a href="https://facebook.com">
                    <img src={img17} alt="Facebook" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={img18} alt="Facebook" />
                  </a>
                  <a href="https://x.com">
                    <img src={img19} alt="Facebook" />
                  </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
