"use client";
import axios from "axios";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useState } from "react";
export default function newBlog() {
  const url = "http://127.0.0.1:8000/api/blogs";
  const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };
  // const
  const [formData, setFormData] = useState({
    blogTitle: "",
    blogImage: null,
    author: "",
    blogPost: "",
  });
  const [errors, seterrors] = useState({});

  const editorRef = useRef(null);

  //   function handleAddingBlogs() {
  function manageErrors() {
    // e.preventDefault();
    const errors = {};
    (formData.blogTitle === undefined || formData.blogTitle === "") &&
      (errors.blogTitle = "Please enter the name of the title");
    (formData.blogImage === undefined || formData.blogImage === "") &&
      (errors.blogImage = "Please upload an image");
    (formData.blogPost === undefined || formData.blogPost === "") &&
      (errors.blogPost = "Please write the blog post");
    (formData.author === undefined || formData.author === "") &&
      (errors.author = "Please enter the name of the author");

    seterrors(errors);
    console.log(errors);
  }
  function handleChange(e) {
    console.log(e);
  }
  function getData(e) {
    e.preventDefault();
    manageErrors() ? console.log(formData) : console.log(formData);

    const newFormData = new FormData();
    newFormData.append("blogTitle", formData.blogTitle);
    newFormData.append("blogPost", formData.blogPost);
    newFormData.append("author", formData.author);
    if (formData.blogImage != null) {
      newFormData.append("blogImage", formData.blogImage);
    }

    axios.post(url, newFormData).then((response) => {
      console.log(response);
    });
  }

  return (
    <div>
      <Nav />
      <div className="bg-[#0775c5] w-[100%] h-[130%]">
        <h1 className="text-center font-bold text-[2rem] text-white mt-5">
          Write a Blog
        </h1>
        <form className="flex flex-col  p-[4em]  w-[50vw]  rounded-[5px] container mx-auto bg-white">
          <div className="my-5">
            <p className="text-left my-1">BlogTitle:</p>
            {errors.blogTitle && (
              <p className="text-red-500 text-center mt-5">
                {errors.blogTitle}
              </p>
            )}
            <input
              name="title"
              type="text"
              placeholder="Blog Title"
              className="shadow shadow-black p-3  rounded-[5px] outline-none"
              onChange={(e) => {
                setFormData({ ...formData, blogTitle: e.target.value });
              }}
            />
          </div>
          <div>
            <p className="text-left my-1">BlogPost:</p>
            {/* {errors.post && (
              <p className="text-red-500 text-center mt-5">{errors.post}</p>
            )} */}
            <Editor
              onEditorChange={() => {
                setFormData({ ...formData, blogPost: log() });
              }}
              apiKey="bxbvgzc9g0kxb2bgbpgn0o44mpcohzxc9xt6gbmnd2mjnjjn"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
          <div>
            <p className="text-left my-1">BlogImage:</p>
            {errors.blogImage && (
              <p className="text-red-500 text-center mt-5">
                {errors.blogImage}
              </p>
            )}
            <input
              name="image"
              type="file"
              placeholder="Blog Image"
              className="shadow shadow-black p-3 rounded-[5px] outline-none"
              onChange={(e) => {
                setFormData({ ...formData, blogImage: e.target.files[0] });
              }}
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
              onChange={(e) => {
                setFormData({ ...formData, author: e.target.value });
              }}
            />
          </div>
          <button
            className="bg-[#0775C6] p-[0.8em] rounded-xl text-white my-[1em]"
            onClick={(e) => {
              getData(e);
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
