"use client";
import Nav from "../components/Nav";
import Image from "next/image";
import heroBackground from "/public/images/blog.webp";
import heroImage from "/public/images/hero.jpg";
import searchImage from "/public/images/search.png";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const imageUrl = "http://127.0.0.1:8000/api";
  const url = "http://127.0.0.1:8000/api/blogs";
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(url).then((response) => {
      response.json().then((data) => {
        // console.log(data);
        setBlogs(data);
        console.log(data);
      });
    });
  }, []);

  return (
    <div className="">
      <Nav />
      <div>
        <Image src={heroBackground} width={2000} alt="" />
      </div>
      <div className="flex gap-[10em] container mx-auto">
        <div className="flex flex-col">
          {blogs.map((blogItems) => {
            return (
              <div className="w-[100%] border-2 border-[#0A91F2] rounded-lg p-5 flex gap-5 my-5">
                <div className="w-[40%] h-[200px] rounded-lg">
                  <img
                    src={`${imageUrl}${blogItems.blogImage}`}
                    className="w-[120%] h-[100%] rounded-lg"
                  />
                </div>
                <div className="w-60%">
                  <h1 className="text-[#0775C6] text-4xl my-3">
                    {blogItems.blogTitle}
                  </h1>
                  <p className="mb-3">{blogItems.blogPost}</p>
                  <p className=" text-[#0A91F2] mb-3">
                    By {blogItems.author} | {blogItems.date_published} | 0
                    Comments
                  </p>
                  <Link>
                    <button className="border-2 rounded-md px-10 text-center py-2 shadow text-[#1EB9EA] border-[#0A91F2]">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-2 border-[#0775c6] p-[1em] rounded-[8px] my-[1em]">
          <div className="flex gap-5 my-3">
            <Image src={searchImage} width={20} alt="" />
            <input
              type="text"
              placeholder="Search"
              className=" outline-none font-semibold"
            />
          </div>
          <h2 className="text-center font-bold text-[2rem]">Recent Blogs</h2>
          <a className="text-blue-500 underline decoration-[#0775c6]">
            How to set up Timeshift with BTRFS in Fedora{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
