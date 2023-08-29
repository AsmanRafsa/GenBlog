"use client";
import Image from "next/image";
import Hero from "/public/images/blog.webp";
import avatar from "/public/images/im.png";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function singleBlog({ params }) {
  const [singleBlog, setSingleBlog] = useState({});
  const url = `http://127.0.0.1:8000/api/blogs/${params.id}`;
  const imageUrl = "http://127.0.0.1:8000/api";
  useEffect(() => {
    fetch(url).then((response) => {
      response.json().then((data) => {
        setSingleBlog(data);
        console.log(data);
        console.log(singleBlog);
      });
    });
  }, []);

  const route=useRouter();


  const date = new Date(singleBlog.date_published);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const formattedDate = `${day}rd ${month} ${year}`;
  console.log(month);

  function deleteBlog(e) {
    e.preventDefault()
    axios.delete(url).then((response) => {
      console.log(response);

      route.push('/')
    });
  }

  return (
    // <div>
    <div className="container mx-auto">
      <Nav />
      {
        <>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-[3rem] text-[#0775c6] font-bold">
                {singleBlog.blogTitle}
              </h2>
              <div className="flex gap-[1em]">
                <button onClick={(e)=>{deleteBlog(e)}} className="border-2 rounded-md px-10 text-center py-2 shadow text-[#1EB9EA] border-[#0A91F2]">
                  DELETE
                </button>
                <button className="border-2 rounded-md px-10 text-center py-2 shadow text-[#1EB9EA] border-[#0A91F2]">
                  EDIT
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-10 items-center my-5">
                {/* <img src={`${imageUrl}${singleBlog.blogImage}`} alt="" width={70}/>
                 */}
                <img
                  src={`${imageUrl}${singleBlog.blogUserImage}`}
                  alt=""
                  width={70}
                />
                <p className="text-[2rem] font-bold">{singleBlog.author}</p>
              </div>
              <p className="text-gray-400 text-[1.5rem] ">{formattedDate}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={`${imageUrl}${singleBlog.blogImage}`}
              alt=""
              className="w-[100%] h-[80vh]"
            />
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: singleBlog.blogPost }}
            className="my-[1em] text-[2rem]"
          ></p>
        </>
      }
      <Footer />
    </div>
  );
}
