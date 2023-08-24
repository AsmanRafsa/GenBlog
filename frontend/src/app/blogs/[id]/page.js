"use client";
import Image from "next/image";
import Hero from "/public/images/blog.webp";
import avatar from "/public/images/im.png";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  const date = new Date(singleBlog.date_published);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const formattedDate = `${day}rd ${month} ${year}`;
  console.log(month);
  return (
    // <div>
    <div className="container mx-auto">
      <Nav />
      {
        <>
          <div>
            <h2 className="text-[3rem] text-[#0775c6] font-bold">
              {singleBlog.blogTitle}
            </h2>
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
              <p className="text-gray-400 text-[1.5rem] ">
                {formattedDate}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={`${imageUrl}${singleBlog.blogImage}`}
              alt=""
              className="w-[100%] h-[80vh]"
            />
          </div>
          <p className="my-[1em] text-[2rem]">{singleBlog.blogPost}</p>
        </>
      }

      {/* 
        <p>
          Regardless of what career you choose, you’ll likely need to know how
          to type. According to
          <span className="text-[#0775c6] border border-black p-3 font-medium border-b-[#0667ac] border-b-2">
            Herzing University
          </span>
          , the average individual types about 40 words per minute. However,
          this is significantly less than individuals trained to use the touch-
          type method who can typically expect to type 75 words per minute or
          more.
        </p>
        <p className="my-[1em] text-[2rem]">
          It’s easy to imagine all the benefits of faster typing, such as
          writing up memos and documents quicker, saving time in your work and
          personal life, making it easier to take notes during a meeting, and
          even having a marketable skill. Specific jobs, such as transcription
          and office work, may have, or expect, a certain typing speed from
          their employees, so increasing your typing speed can be a marketable
          skill set to help you get ahead in many ways.
        </p>
        <h3 className="text-[#0775c6] font-bold text-[2rem]">
          1. Test Your Current Typing Speed
        </h3>
        <p className="my-[1em] text-[2rem]">
          If you don’t know your current typing speed, take a few minutes to
          take one of the many free typing tests online to learn about your wpm.
          We recommend{" "}
          <span className="text-[#0775c6] border border-black p-3 font-medium border-b-[#0667ac] border-b-2">
            Typing.com{" "}
          </span>
          for free typing tests.
        </p>
        <p className="my-[1em] text-[2rem]">
          Jot this number down and see how it compares to the average typing
          speed of 40 wpm. From here, you can make a goal for your typing speed.
        </p>
        <h3 className="text-[#0775c6] font-bold text-[2rem]">
          2. Make your Goal Progress, not Perfection
        </h3>
        <p className="my-[1em] text-[2rem]">
          After you’ve learned your typing speed, set a goal to help you get
          better at typing.
        </p>
        <p className="my-[1em] text-[2rem]">
          It’s tempting to want to double or triple your typing speed quickly.
          However, it’s essential to focus on accuracy above all else before you
          work on improving your typing speed.
        </p>
        <p className="my-[1em] text-[2rem]">
          Typing speed will come with practice, but learning to type quickly
          will not save you time in the long run if your work is error-filled.
          If your accuracy is low, you’ll need to edit your work extensively,
          which ultimately won’t save you time or frustration.
        </p>
        <p className="my-[1em] text-[2rem]">
          Type slowly to avoid making mistakes. Most people don’t need to learn
          how to type over 100 wpm. For most, 60 to 80 wpm is an excellent
          typing goal that will help you finish your work faster.
        </p>
        <p className="my-[1em] text-[2rem]">
          Set your mindset first that accuracy is more important than typing
          speed and work to improve your typing speed and accuracy
          simultaneously so that your end results are accurate, fast typing
          skills.
        </p>
        <h3 className="text-[#0775c6] font-bold text-[2rem]">
          3. Learn to Touch Type
        </h3>
        <p className="my-[1em] text-[2rem]">
          Learning to touch type is the only way to improve your typing speed
          significantly.
        </p>
        <p className="my-[1em] text-[2rem]">
          Touch typing is a typing technique that involves not looking at your
          keyboard and limiting your overall finger motion by using all ten
          fingers to type. Instead of typing with only your index fingers, you
          should be using every finger and keeping your fingers close to the
          home row of your keyboard when you are touch typing.
        </p>
        <p className="my-[1em] text-[2rem]">
          Limiting your hand and finger movements will increase your wpm and
          reduce stress on your hands while you type. We recommend paying
          special attention to your little fingers and ring fingers as these
          fingers are frequently underused when typing, which can lead to
          unnecessary stress on your thumbs and index fingers and limited reach
          while you’re typing.
        </p>
        <h3 className="text-[#0775c6] font-bold text-[2rem]">Conclusion</h3>
        <p className="my-[1em] text-[2rem]">
          Improving your typing skills can benefit you in many ways, from giving
          you an advantage over other
          <br /> job applicants, saving you time writing memos or emails,
          providing you with a wider job scope like
          <span className="text-[#0775c6] border border-black p-3 font-medium border-b-[#0667ac] border-b-2">
            transcriptionist
          </span>
          ,
          <span className="text-[#0775c6] border border-black p-3 font-medium border-b-[#0667ac] border-b-2">
            closed captioning
          </span>
          and taking notes during a meeting. While you practice typing, don’t
          forget that you can use other time- saving tools to help with some of
          these situations.
        </p>
        <p className="my-[1em] text-[2rem]">
          Transcription tools, like otta, can save you time by transcribing
          audio recordings or transcribing video calls live, which saves you
          from needing to type notes during the meeting. ou can also use otta
          oice Input to transcribe your own voice as you speak so that you don’t
          have to type your thoughts for that email or memo. Even if you are a
          speedy typist, transcription and voice tools can be a great way to
          save yourself time and energy throughout your busy workday.
        </p>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-[#0775c6] font-bold text-[2rem]">
            Place Your Comment
          </h4>
          <textarea
            cols={50}
            rows={20}
            className="border-2 border-[#0775c6] outline-none"
          ></textarea>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
