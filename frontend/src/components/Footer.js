import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Facebook from "/public/images/facebook-icon.svg";
import LinkedIn from "/public/images/linkedin-icon.svg";
import Twitter from "/public/images/twitter-icon.svg";
import Instagram from "/public/images/instagram-icon.svg";

export default function Footer() {
  return (
    <>
    <div className="container mx-auto my-[1em]">
      <h1 className="text-center font-semibold text-[2rem]">JOIN OUR COMMUNITY OF OVER <span className=" text-[#0775c8]">200,000</span> BLOGGERS</h1>
      <div className="flex justify-center items-center my-3">
      <input placeholder="Email address" className="shadow shadow-gray-500 py-[1em] px-[3em] w-[50%]"/>
      <button className="bg-[#0775c6] p-[1em] text-white font-medium">Subscribe</button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
      <Image src={Logo} alt="" width={200}/>
      <p className="text-center my-5 text-[1.2rem]">Follow us on:</p>
      <div className="flex gap-6">
      <Image src={Facebook} alt="" width={30}/>
      <Image src={LinkedIn} alt="" width={30}/>
      <Image src={Twitter} alt="" width={30} />
      <Image src={Instagram} alt="" width={30}/>
      </div>
      </div>
      <div>
      <p className="text-[2rem] font-medium text-[#0775c6] my-5">Quick Links</p>
      <ul className="flex flex-col gap-2 text-[1.3rem] cursor-pointer">
        <li>About blog</li>
        <li>News letter</li>
        <li>Contact us</li>
        <li>Podcasts</li>
        <li>Careers</li>
        <li>Write for us</li>
      </ul>
      </div>
      <div>
      <h3 className="text-[2rem] font-medium text-[#0775c6] my-5">Top Articles</h3>
      <ul className="flex flex-col gap-2 text-[1.3rem] cursor-pointer">
        <li>How to start a blog</li>
        <li>How to create a blog content</li>
        <li>How to find readers for your log</li>
        <li>Strategies to build a community</li>
        <li>How tp create money blogging</li>
        <li>Ways to make blogging life easier</li>
      </ul>
      </div>
      </div>
    </div>
      <div className="flex justify-center gap-[1em] bg-[#d9d9d9] p-3 cursor-pointer">
        <p>Copyright  2023</p>
        <p>genblog.com</p>
        <p>.All rights reserved</p>
      </div>
      </>
  );
}
