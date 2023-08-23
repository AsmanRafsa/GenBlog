import Nav from "../components/Nav";
import Image from "next/image";
import heroBackground from "/public/images/blog.webp";
import heroImage from "/public/images/hero.jpg";
import searchImage from "/public/images/search.png";


export default function Home() {
  return (
    <div className="">
      <Nav />
      <div>
        <Image src={heroBackground} width={5000} />
      </div>
      <div className="flex gap-[1em] container mx-auto">
        <div className="my-[2em] border border-[#0775c6] p-[1em] rounded-[8px] flex gap-3">
          <div><Image src={heroImage} width={700} className="rounded-[7px]"/></div>
          <div>
          <h4 className="text-[1.5rem] text-blue-600 font-medium my-5">Quote Of The Day...</h4>
          <p>
            No matter how hard life is...dont forget to pray...and never let
            negative people spoil your name.o matter how hard life is...dont
            forget to pray...and never let negative people spoil...
          </p>
          <p className="text-blue-500 my-5">By Rafsa Asman | Aug 24 2023 | 0 Comments</p>
          <button className="border border-[#0775c6] py-[1em] px-[2em] text-[#0775c6] rounded-[7px]">Read More</button>
          </div>
        </div>
        <div className="border border-[#0775c6] p-[1em] rounded-[8px] my-[1em]">
          <div className="flex gap-5 my-3">
            <Image src={searchImage} width={20}/>
            <input type="text" placeholder="Search" className="text-gray-300 outline-none font-semibold"/>
          </div>
          <h2 className="text-center font-bold text-[2rem]">Recent Blogs</h2>
          <a className="text-blue-500 underline decoration-[#0775c6]">How to set up Timeshift with BTRFS in Fedora </a>
        </div>
      </div>
    </div>
  );
}
