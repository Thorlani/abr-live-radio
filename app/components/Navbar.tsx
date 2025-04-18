"use client";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { RiCloseLargeFill } from "react-icons/ri";
import { useFetchSearchPodcast } from "@/lib/queryAndMutation/podcast";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/redux/slices/searchSlice";
import { setPage as setCount } from "@/redux/slices/searchCountSlice";
import { RootState } from "@/lib/store";
import MediumCard from "./MediumCard";
import Pagination from "./Pagination";

const Navbar = () => {
  const route = useRouter();
  const [openMenuBar, setOpenMenuBar] = useState(false);

  useEffect(() => {
    if (openMenuBar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up by removing the class when component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [openMenuBar]);

  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.search.value);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPage(e.target.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(setPage(e.currentTarget.value));
    }
  };

  const { data, isPending } = useFetchSearchPodcast();

  const handlePageChange = (page: number) => {
    dispatch(setCount(page));
  };

  return (
    <>
      <nav className="hidden min-w-full h-fit md:flex flex-col">
        <div className="min-w-full h-fit px-[2%] py-[1%] flex justify-between items-center">
          <Image
            src={"/svg/abr-logo.svg"}
            alt="logo icon"
            width={108}
            height={51}
            onClick={() => route.push("/")}
            className="cursor-pointer"
          />
          <ul className="flex items-center gap-8 font-bold text-[15px]">
            <li onClick={() => route.push("/")} className="cursor-pointer">
              Home
            </li>
            <li className="flex items-center gap-1">
              Company <IoIosArrowDown />
            </li>
            <li>Resources</li>
            <li>Contact us</li>
            <li>Advertise</li>
            <li className="relative group">
              <input
                type="text"
                name="search"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                className="w-[192px] h-[43px] rounded-4xl bg-[#00000032] text-lg text-white placeholder:text-white placeholder:font-bold placeholder:text-sm indent-8.5 focus:outline-[white]"
              />
              <CgSearch
                className="absolute top-[35%] left-[5%]"
                color="white"
              />
              <div className="absolute z-[99] h-[500px] min-w-[650px] right-0 bg-[#F4F4F4] p-[8%] rounded-xl border-b-[2px] hidden group-hover:flex group-hover:flex-col justify-center items-center">
                {isPending && <p></p>}
                {data?.data && (
                  <div className="w-full flex flex-wrap justify-center items-center gap-x-10  overflow-y-scroll overflow-x-clip">
                    {data?.data?.data.map(
                      (item: {
                        picture_url: string;
                        id: number;
                        title: string;
                        description: string;
                        content_url: string;
                      }) => (
                        <div key={item.id}>
                          <MediumCard
                            id={item?.id}
                            imageUrl={item?.picture_url}
                            title={item?.title}
                            shareUrl={item?.content_url}
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
                {data?.data && (
                  <Pagination
                    currentPage={data?.data?.current_page}
                    totalPages={data?.data?.total}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="min-w-full h-fit flex justify-between items-center relative bg-black">
          <div className="w-[40%] px-[2%] py-[2%] flex items-center justify-between gap-3 relative">
            <Image
              src={"/images/bg-nav.png"}
              alt="nav background"
              className="absolute top-0 left-0 z-[10] w-full h-full object-cover"
              // width={608}
              // height={100}
              fill
            />
            <div className="w-full h-full flex items-center justify-between gap-3 relative z-20">
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
          </div>
          <ul className="flex items-center  px-[2%] py-[2%] gap-8 text-white text-[15px] font-bold">
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
            <li
              onClick={() => route.push("/episode")}
              className="cursor-pointer flex items-center gap-3"
            >
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
            <li
              onClick={() => route.push("/podcast")}
              className="cursor-pointer flex items-center gap-3"
            >
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
      <nav className="w-full h-fit p-[4%] flex justify-between items-center md:hidden">
        <div className="w-fit h-fit px-[2%] py-[1%] flex justify-between items-center">
          <Image
            src={"/svg/abr-logo.svg"}
            alt="logo icon"
            width={108}
            height={51}
            onClick={() => route.push("/")}
            className="cursor-pointer"
          />
        </div>
        <button
          onClick={() => setOpenMenuBar(!openMenuBar)}
          className="flex md:hidden "
        >
          <ul className="flex flex-col gap-1">
            <li className="w-[21px] h-[2px] bg-[#5a5a5a]"></li>
            <li className="w-[21px] h-[2px] bg-[#5a5a5a]"></li>
            <li className="w-[21px] h-[2px] bg-[#5a5a5a]"></li>
          </ul>
        </button>
        {openMenuBar && (
          <div className="fixed top-0 left-0 min-w-[100vw] min-h-[100dvh] z-[99999] bg-black/40 flex justify-end">
            <div className="w-[50%] h-[100vh] bg-white">
              <ul className="w-full h-full flex flex-col justify-center md:hidden gap-[55px] items-center">
                <button
                  onClick={() => setOpenMenuBar(!openMenuBar)}
                  className="flex absolute top-[40px] right-[20px] md:hidden "
                >
                  <RiCloseLargeFill color="#5a5a5a" />
                </button>
                <li
                  onClick={() => route.push("/")}
                  className="text-[#5a5a5a] lato-regular hover:text-[#000]"
                >
                  <div onClick={() => setOpenMenuBar(!openMenuBar)}>Home</div>
                </li>
                <li
                  onClick={() => route.push("/episode")}
                  className="text-[#5a5a5a] lato-regular hover:text-[#000]"
                >
                  <div onClick={() => setOpenMenuBar(!openMenuBar)}>
                    All Episodes
                  </div>
                </li>
                <li
                  onClick={() => route.push("/podcast")}
                  className="text-[#5a5a5a] lato-regular hover:text-[#000]"
                >
                  <div onClick={() => setOpenMenuBar(!openMenuBar)}>
                    All Podcasts
                  </div>
                </li>
                <li
                  onClick={() => route.push("/categories")}
                  className="text-[#5a5a5a] lato-regular hover:text-[#000]"
                >
                  <div onClick={() => setOpenMenuBar(!openMenuBar)}>
                    View Categories
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
