import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="min-w-full h-fit flex flex-col">
      <div className="min-w-full h-fit px-[2%] py-[1%] flex justify-between items-center">
        <Image
          src={"/svg/abr-logo.svg"}
          alt="logo icon"
          width={108}
          height={51}
        />
        <ul className="flex items-center gap-8 font-bold text-[15px]">
          <li>Home</li>
          <li className="flex items-center gap-1">
            Company <IoIosArrowDown />
          </li>
          <li>Resources</li>
          <li>Contact us</li>
          <li>Advertise</li>
          <li className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[192px] h-[43px] rounded-4xl bg-[#00000032] text-lg text-white placeholder:text-white placeholder:font-bold placeholder:text-sm indent-8.5 focus:outline-[white]"
            />
            <CgSearch className="absolute top-[35%] left-[5%]" color="white" />
          </li>
        </ul>
      </div>
      <div className="min-w-full h-fit px-[2%] py-[2%] flex justify-between items-center relative bg-black">
        {/* <Image
          src={"/images/nav-bg.png"}
          alt="nav background"
          className="absolute top-0 left-0 z-[-10]"
          fill
        /> */}
        <div className="w-[40%] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={"/svg/play-btn.svg"}
              alt="play icon"
              width={46}
              height={46}
            />
            <div>
              <h2 className="font-bold text-lg capitalize text-white">
                Listen to ABR Live Radio
              </h2>
              <p className="uppercase text-sm font-light text-[#9CCC65]">
                on air
              </p>
            </div>
          </div>
          <div className="cursor-pointer flex items-center gap-3 text-white">
            <Image
              src={"/svg/calender.svg"}
              alt="play icon"
              width={18}
              height={18}
            />
            View schedules
          </div>
        </div>
        <ul className="flex items-center gap-8 text-white text-[15px] font-bold">
          <li>|</li>
          <li className="cursor-pointer flex items-center gap-3">
            <Image
              src={"/svg/book.svg"}
              alt="play icon"
              width={18}
              height={18}
            />
            Latest News
          </li>
          <li className="cursor-pointer flex items-center gap-3">
            <Image
              src={"/svg/mic.svg"}
              alt="play icon"
              width={18}
              height={18}
            />
            New Episodes
          </li>
          <li className="cursor-pointer flex items-center gap-3">
            <Image
              src={"/svg/box.svg"}
              alt="play icon"
              width={18}
              height={18}
            />
            Our Services
          </li>
          <li className="cursor-pointer flex items-center gap-3">
            <Image
              src={"/svg/pod.svg"}
              alt="play icon"
              width={18}
              height={18}
            />
            All Podcasts
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
