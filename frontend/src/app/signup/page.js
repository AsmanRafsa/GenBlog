"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";
import profile from "public/images/profile.png";
import { useState } from "react";

export default function signUp() {
  const [formData, setFormData] = useState({});
  const [errors,setErrors] = useState()

  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }
  function handleSignUp(e) {
    e.preventDefault();
    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "Please enter your first name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "Please enter your last name");
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter your email");
    (formData.phoneNumber === undefined || formData.phoneNumber === "") &&
      (errors.phoneNumber = "Please enter your phone number");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your password");
    (formData.confirmPassword === undefined ||
      formData.confirmPassword === "") &&
      (errors.confirmPassword = "Please confirm your password");
    setErrors(errors);
    console.log(formData);
    console.log(errors);
  }

  return (
    <>
      <Nav />
      <div className="bg-[#0775c6]">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-[2rem] text-white my-[2em]">
            CREATE AN ACCOUNT
          </h3>
          <form className="flex flex-col  p-[4em] bg-white my-[3em] w-[30vw] h-[70vh] rounded-[5px]">
            <div className="flex justify-center items-center">
              <Image
                src={profile}
                alt=""
                width={120}
                height={120}
                className="mt-[-8.5em]  bg-gray-300 rounded-[50%]"
              />
            </div>
            <div className="flex gap-3">
              <div className="w-[50%]">
                <div className="">
                  {/* {errors.firstName && (
                    <p className="text-red-500 text-center mt-5">
                      {errors.firstName}
                    </p>
                  )} */}
                  <input
                    type="text"
                    placeholder="First Name"
                    className="shadow shadow-gray-400 p-3 my-3 outline-none w-[100%]"
                    name="firstName"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <div className="">
                  {/* {errors.lastName && (
                    <p className="text-red-500 text-center mt-5">
                      {errors.lastName}
                    </p>
                  )} */}
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="shadow shadow-gray-400 p-3 my-3 outline-none w-[100%]"
                    name="lastName"
                    // onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div>
              {/* {errors.email && (
                <p className="text-red-500 text-center mt-5">{errors.email}</p>
              )} */}
              <input
                name="email"
                type="email"
                className="shadow shadow-gray-400 p-3 my-3 outline-none w-[100%]"
                placeholder="Email Address"
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              {/* {errors.phoneNumber && (
                <p className="text-red-500 text-center mt-5">
                  {errors.phoneNumber}
                </p>
              )} */}
              <input
                name="phoneNumber"
                type="text"
                className="shadow shadow-gray-400 p-3 my-3 outline-none w-[100%]"
                placeholder="Phone Number"
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              {/* {errors.password && (
                <p className="text-red-500 text-center mt-5">
                  {errors.password}
                </p>
              )} */}
              <input
                type="password"
                className="shadow shadow-gray-400 my-5 p-3 outline-none w-[100%]"
                placeholder="Password"
                name="password"
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              {/* {errors.confirmPassword && (
                <p className="text-red-500 text-center mt-5">
                  {errors.confirmPassword}
                </p>
              )} */}
              <input
                type="password"
                className="shadow shadow-gray-400 my-5 p-3 outline-none w-[100%]"
                placeholder="Confirm Password"
                name="password"
                // onChange={(e) => handleChange(e)}
              />
            </div>
            <button
              className="w-[100%] text-white bg-[#0775c6] p-4 rounded-[5px]"
              onClick={(e) => handleChange(e)}
            >
              Sign Up
            </button>
            <div className="flex justify-between my-5">
              <div className="flex gap-3">
                <input type="checkbox" className="" />
                <p className="text-[1.2rem]">Remember me</p>
              </div>
              <div>
                <p className="text-[#0775c6] font-medium text-[1.2rem]">
                  Forgot password?
                </p>
              </div>
            </div>
            <p className="my-4 text-[1.2rem]">
              Dont have an account?{" "}
              <span className="text-[#0775c5] text-[1.2rem]">Signup</span>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
