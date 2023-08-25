import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex container mx-auto justify-between my-[2em]">
      <div>
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="genBlog Logo"
            width={150}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div>
        <ul className="flex gap-[3em] justify-center items-center cursor-pointer">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/newblog"}>
            <li>Write a blog</li>
          </Link>
          <Link href={"/login"}>
            <li>
              <button className=" shadow-gray-400 shadow p-[0.8em] rounded-[5px] ">
                Login
              </button>
            </li>
          </Link>
          <Link href={""}>
            <li>
              <button className="bg-[#0775C6] p-[0.8em] rounded-xl text-white">
                Sign Up
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
