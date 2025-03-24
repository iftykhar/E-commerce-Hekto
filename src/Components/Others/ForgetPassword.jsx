import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    const auth = getAuth();

  const handleResetPassword = (e) => {
    e.preventDefault(); 

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password reset email sent. Please check your inbox.");
        setError(""); 
      })
      .catch((error) => {
        const errorCode = error.code;
        

        if (errorCode === "auth/user-not-found") {
          setError("No user found with this email address.");
        } else if (errorCode === "auth/invalid-email") {
          setError("Invalid email address. Please try again.");
        } else {
          setError("Failed to send password reset email. Please try again.");
        }
        console.error("Password Reset Error:", error);
        setMessage(""); 
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>

        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded mb-4 "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
              setMessage("");
              
            }}
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded hover:bg-purple-600"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  
    </>
  )
}

export default ForgetPassword
