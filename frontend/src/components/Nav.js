import Image from "next/image";
import Logo from "/public/images/logo.svg";
export default function Nav() {
  return (
    <div className="flex container mx-auto justify-between my-[2em]">
      <div>
        <Image src={Logo} alt="genBlog Logo" width={150} />
      </div>
      <div >
        <ul className="flex gap-[3em]">
          <li>Home</li>
          <li>Featured Posts</li>
          <li>
            <button className=" shadow-gray-400 shadow-lg p-[0.8em] rounded-xl ">Login</button>
          </li>
          <li>
            <button className="bg-[#0775C6] p-[0.8em] rounded-xl text-white">Sign Up</button>
          </li>
        </ul>
        
      </div>
    </div>
  );
}
