"use client";
import Image from "next/image";
import profile from "/public/images/profile.png";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";
export default function Login() {
  const [formData, setFormData] = useState();
  function getLoginData(e) {
    e.preventDefault()(...formData, [e, target.name], e.target.value);
  }

  return (
    <>
      <Nav />
      <div className="bg-[#0775c6]">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-[2rem] text-white my-[2em]">
            LOGIN TO YOUR ACCOUNT
          </h3>
          <form className="flex flex-col  p-[4em] bg-white my-[3em] w-[30vw] h-[50vh] rounded-[5px]">
            <div className="flex justify-center items-center">
              <Image
                src={profile}
                alt=""
                width={120}
                height={120}
                className="mt-[-8.5em]  bg-gray-300 rounded-[50%]"
              />
            </div>
            <input
              name="email"
              type="email"
              className="shadow shadow-gray-400 p-3 my-3"
              placeholder="Email Address"
              onChange={(e) => {
                getLoginData(e);
              }}
            />
            <input
              type="password"
              className="shadow shadow-gray-400 my-5 p-3"
              placeholder="password"
              name="password"
              onChange={()=>{getLoginData(e)}}

            />
            <button className="w-[100%] text-white bg-[#0775c6] p-4 rounded-[5px]">
              Login
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
