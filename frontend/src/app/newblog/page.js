"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useState } from "react";
export default function newBlog() {
  const [formData, setFormData] = useState({});
  const [errors, seterrors] = useState({});

//   function handleAddingBlogs() {
    function manageErrors(e) {
      e.preventDefault();
      const errors = {};
      (formData.title === undefined || formData.title === "") &&
        (errors.title = "Please enter your blog title");
      (formData.post === undefined || formData.post === "") &&
        (errors.post = "Please write the blog post");
      (formData.author === undefined || formData.author === "") &&
        (errors.author = "Please enter the name of the author");

      seterrors(errors);
      console.log(errors);
    }
    function getData(e) {
      e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData);
    }
//   }

  return (
    <div>
      <Nav />
      <div className="bg-[#0775c5] w-[100%] h-[130%]">
      <h1 className="text-center font-bold text-[2rem] text-white mt-5">
        Write a Blog
      </h1>
      <form className="flex flex-col  p-[4em]  w-[30vw]  rounded-[5px] container mx-auto bg-white">
        <div className="my-5">
          <p className="text-left my-1">BlogTitle:</p>
          {errors.title && (
            <p className="text-red-500 text-center mt-5">{errors.title}</p>
          )}
          <input
            name="title"
            type="text"
            placeholder="Blog Title"
            className="shadow shadow-black p-3  rounded-[5px] outline-none"
            onChange={(e) => {
              getData(e);
            }}
          />
        </div>
        <div>
          <p className="text-left my-1">BlogPost:</p>
          {errors.post && (
            <p className="text-red-500 text-center mt-5">{errors.post}</p>
          )}
          <textarea
            cols={30}
            rows={10}
            className="shadow shadow-black p-3 rounded-[5px] outline-none"
            placeholder="Blog Post"
            name="post"
            onChange={(e) => getData(e)}
          ></textarea>
        </div>
        <div>
          <p className="text-left my-1">BlogImage:</p>

          <input
            name="image"
            type="file"
            placeholder="Blog Image"
            className="shadow shadow-black p-3 rounded-[5px] outline-none"
            onChange={(e) => getData(e)}
          />
        </div>
        <div>
          <p className="text-left my-1">Author:</p>
          {errors.author && (
            <p className="text-red-500 text-center mt-5">{errors.author}</p>
          )}
          <input
            name="author"
            type="text"
            placeholder="Author"
            className="shadow shadow-black p-3 rounded-[5px] outline-none"
            onChange={(e) => getData(e)}
          />
        </div>
        <button
          className="bg-[#0775C6] p-[0.8em] rounded-xl text-white my-[1em]"
          onClick={(e) => {
            manageErrors(e);
          }}
          type="submit"
        >
          ADD YOUR BLOG
        </button>
      </form>
      <p className="my-[1em] text-center">Thank You For Adding a Blog!</p>
      </div>
      <Footer />
    </div>
  );
}
