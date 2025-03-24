import React from "react";
import SponserLogo from "../HomePage/SponserLogo";
import { Link } from "react-router-dom";
import { getAuth,sendPasswordResetEmail , GoogleAuthProvider, signInWithPopup ,signInWithRedirect,signOut  } from "firebase/auth";
import app from "../../firebase.config";
import { FcGoogle } from "react-icons/fc";



const SignIn = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();


   // Handle Sign-In
   const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Sign-In Error:", error);
      // alert("Sign-In Failed! Please try again.");
    }
  };

  


   
  return (
    <>
      <div className="mx-auto container">
        
<div className="py-12 ">
        <div className="   justify-center mx-auto shadow-lg rounded-sm    items-center text-center w-[544px] h-[474] bg-white   ">

          <h1 className="font-josef font-bold text-[32px] pt-16 ">Login</h1>

          <p className="font-Lato text-[17px] pb-12   text-[#9096B2]">
            Please login using account detail bellow.
          </p>

          <div className="space-y-7 pb-4">

          <input
            type="email"
            placeholder="Email Address"
            className="border-2  p-2 placeholder:font-Lato placeholder:text-[16px]  w-[432px] h-[52px] "
          />

          <input
            type="password"
            placeholder="Password"
            className="border-2 p-2 placeholder:font-Lato placeholder:text-[16px]  w-[432px] h-[52px] "
          />
          </div>

        <p className="font-Lato text-[17px] hover:underline text-[#9096B2] text-left pl-[60px]  "><Link to={'/forgetpass'}>Forgot your password?</Link></p>
        <div className="py-4 ">

        <button className="w-[432px] hover:scale-105  rounded h-[47px] bg-[#FB2E86] text-white font-Lato font-bold text-[17px]">Sign In</button>
        </div>

        <div className=" bg-gray-100 shadow text-center justify-center flex ">
      <button onClick={handleSignIn} className="m-2 px-5 text-[20px]  cursor-pointer flex items-center gap-2"
 >
         <FcGoogle className="text-[30px]"/>Sign In with Google

      </button>
      
    </div>

        <p className="font-Lato pb-6 pt-4 text-[17px]  text-[#9096B2]">Don’t have an Account?<Link to={'/signup'}><span className="hover:underline"> Create account</span></Link></p>
        </div>

        </div>
        </div>
      

      <SponserLogo />
    </>
  );
};

export default SignIn;
