import React, { useState } from "react";
import SponserLogo from "../HomePage/SponserLogo";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { use } from "react";

const SignUp = () => {
  let [idName, setUsername] = useState("");

  let [email, setEmail] = useState("");

  let [error, setError] = useState("");
  let [authMail,setauthMail] = useState('')
  const auth = getAuth();

  const navigate = useNavigate();

  const handleSignup = (e) => {
    // if (!/(?=.*[!#$%&? "])/.test(password)){
    //   setError('Must contain a special character')
    // }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/signin')
        sendEmailVerification(auth.currentUser).then(() => {
          alert("Signup successful! Please check your email to verify your account.");          
        });
      })
      .catch((error) => {
        const errorCode = error.code;


        console.error("Email Verification Error:", error);
        setError("Failed to send verification email. Please try again.");

        if (errorCode == "auth/invalid-email") {
          setError("Please enter a valid email address");
        }

        if (errorCode == "auth/email-already-in-use") {
          setError("This email is already registered");
        }
        console.error("Signup Error:", error);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const [password, setPassword] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const [validation, setValidation] = useState({
    letter: false,
    capital: false,
    number: false,
    length: false,
  });

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setValidation({
      letter: /[a-z]/.test(value),
      capital: /[A-Z]/.test(value),
      number: /[0-9]/.test(value),
      length: value.length >= 8,
    });
  };

  return (
    <>
      <div className="mx-auto container">
        <div className="py-12 ">
          <div className="   justify-center  mx-auto shadow-lg rounded-sm    items-center text-center w-[544px] h-[474] bg-white   ">
            <h1 className="font-josef font-bold text-[32px] pt-16 ">Sign Up</h1>

            <p className="font-Lato text-[17px] pb-12   text-[#9096B2]">
              Please Signup using account detail bellow.
            </p>

            <div className="space-y-7 pb-4">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
                className="border-2  p-2 placeholder:font-Lato placeholder:text-[16px]  w-[432px] h-[52px] "
              />
              <input
                onChange={handleEmail}
                type="email"
                placeholder="Email Address"
                className="border-2  p-2 placeholder:font-Lato placeholder:text-[16px]  w-[432px] h-[52px] "
              />
              {error && (
                <p className="bg-[#f92a87] ml-[58px] w-[432px] text-white font-Lato ">
                  {error}
                </p>
              )}

              <input
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
                onFocus={() => setMessageVisible(true)}
                onBlur={() => setMessageVisible(false)}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                className="border-2 p-2 placeholder:font-Lato placeholder:text-[16px]  w-[432px] h-[52px] "
              />
            </div>

            {messageVisible && (
              <div
                id="message"
                className="w-[432px] text-left max-w-md mt-0 bg-white  rounded-lg p-4 pl-[60px]"
              >
                <h3 className="text-lg font-bold mb-4">
                  Password must contain the following:
                </h3>
                <p
                  className={`text-sm flex items-center mb-2 ${
                    validation.letter ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span className="mr-2">{validation.letter ? "✔" : "✖"}</span>A{" "}
                  <b className="ml-1">lowercase</b> letter
                </p>
                <p
                  className={`text-sm flex items-center mb-2 ${
                    validation.capital ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span className="mr-2">{validation.capital ? "✔" : "✖"}</span>
                  A <b className="ml-1">capital (uppercase)</b> letter
                </p>
                <p
                  className={`text-sm flex items-center mb-2 ${
                    validation.number ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span className="mr-2">{validation.number ? "✔" : "✖"}</span>A{" "}
                  <b className="ml-1">number</b>
                </p>
                <p
                  className={`text-sm flex items-center ${
                    validation.length ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span className="mr-2">{validation.length ? "✔" : "✖"}</span>
                  Minimum <b className="ml-1">8 characters</b>
                </p>
              </div>
            )}

            <Link to={"/signin"}>
              <p className="font-Lato hover:underline text-[17px] text-[#9096B2] text-left pl-[60px]  ">
                Already have account?
              </p>
            </Link>
            <div className="py-4 ">
              <button
                onClick={handleSignup}
                className="w-[432px] hover:scale-105  rounded h-[47px]  hover:bg-pink-500 bg-[#FB2E86] text-white font-Lato font-bold text-[17px]"
              >
                Sign Up
              </button>
            </div>

            <p className="font-Lato pb-6 text-[17px] text-[#9096B2]">
              Don’t have an Account?Create account
            </p>
          </div>
        </div>
      </div>

      <SponserLogo />
    </>
  );
};

export default SignUp;
