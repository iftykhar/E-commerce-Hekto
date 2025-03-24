import { useState } from "react";
import "./App.css";
import Home from "./PAGES/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Pages from "./PAGES/Pages";
import Products from "./PAGES/Products";
import Blog from "./PAGES/Blog";
import Shop from "./PAGES/Shop";
import Layout from "./Components/Others/Layout";
import ProductDetails from "./PAGES/ProductDetails";
import Cart from "./Components/Others/Cart";
import Test from "./Components/Others/Test";
import CheckoutPage from "./Components/Others/CheckoutPage";
import OrderComplete from "./Components/Others/OrderComplete";
import SignIn from "./Components/Others/SignIn";
import SignUp from "./Components/Others/SignUp";
import ForgetPassword from "./Components/Others/ForgetPassword";
import BlogPage_2 from "./Components/Blog/BlogPage_2";
import About from "./Components/AboutUs/About";
import Contact from "./Components/ContactUs/Contact";
import NotFound from "./Components/Others/NotFound";
import Faq from "./Components/Others/Faq";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const domain = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/order-complete" element={<OrderComplete />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404-not-found" element={<NotFound />} />
        <Route path="/forgetpass" element={<ForgetPassword />} />
        <Route path="/maurisblogpost" element={<BlogPage_2 />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    )
  );

  return (
    <>
    
      
    <RouterProvider router={domain}>
      
    </RouterProvider>
    
    </>
  );
}

export default App;
