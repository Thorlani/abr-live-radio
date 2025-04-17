"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useFetchTopCategory } from "@/lib/queryAndMutation/category";
import TitleAndDescription from "./TitleAndDescription";
import { useFetchLatestEpisode } from "@/lib/queryAndMutation/episode";
import MediumCard from "./MediumCard";
import { IoIosArrowForward } from "react-icons/io";

const MoreContent = () => {
  const route = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data, isPending } = useFetchTopCategory();
  console.log(data?.data);

  const { data: latestEpisode, isPending: isFetching } =
    useFetchLatestEpisode();

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex flex-col items-start overflow-x-clip gap-10 scroll-smooth hide-scrollbar"
      >
        {isPending && <p>Loading...</p>}
        {data?.data?.map(
          (
            item: {
              picture_url: string;
              id: number;
              name: string;
            },
            index: number
          ) => {
            return (
              <div key={index}>
                {index === 0 ? (
                  <>
                    <div key={item.id} className="w-full h-fit relative">
                      <div className="flex flex-col gap-10">
                        <div className="w-[100vw] pr-[1%] md:pr-[3%] h-fit flex justify-between items-start">
                          <TitleAndDescription description={item.name} />
                          <button
                            onClick={() => route.push("/categories")}
                            type="button"
                            className="bg-white border-[1px] flex items-center gap-2 px-5 py-2 text-[#9747FF] cursor-pointer border-[#9747FF] rounded-4xl"
                          >
                            View all <IoIosArrowForward color="#9747FF" />
                          </button>
                        </div>

                        <div
                          ref={scrollContainerRef}
                          className="flex items-start overflow-x-auto gap-10 scroll-smooth hide-scrollbar"
                        >
                          {isFetching && <p>Loading...</p>}
                          {latestEpisode?.data?.data.map(
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
                      </div>
                    </div>
                    <div className="w-full py-[2%] px-[4%] hidden md:flex justify-start items-center gap-10">
                      <Image
                        src={"/images/pizza.png"}
                        alt="pizza image"
                        width={285}
                        height={205}
                      />
                      <Image
                        src={"/images/mtn.png"}
                        alt="pizza image"
                        width={285}
                        height={205}
                      />
                      <Image
                        src={"/images/fam.png"}
                        alt="pizza image"
                        width={285}
                        height={205}
                      />
                    </div>
                  </>
                ) : (
                  <div key={item.id} className="w-full h-fit relative">
                    <div className="flex flex-col gap-10">
                      <div className="w-[100vw] pr-[1%] md:pr-[3%] h-fit flex justify-between items-start">
                        <TitleAndDescription description={item.name} />
                        <button
                          onClick={() => route.push("/categories")}
                          type="button"
                          className="bg-white border-[1px] flex items-center gap-2 px-5 py-2 text-[#9747FF] cursor-pointer border-[#9747FF] rounded-4xl"
                        >
                          View all <IoIosArrowForward color="#9747FF" />
                        </button>
                      </div>

                      <div
                        ref={scrollContainerRef}
                        className="flex items-start overflow-x-auto gap-10 scroll-smooth hide-scrollbar"
                      >
                        {isFetching && <p>Loading...</p>}
                        {latestEpisode?.data?.data.map(
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
                    </div>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MoreContent;
