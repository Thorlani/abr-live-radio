"use client";

import { useFetchTopPodcast } from "@/lib/queryAndMutation/podcast";
import React, { useRef } from "react";
import BigRowCards from "./RowCards";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const TrendingPodCast = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 900; // Customize as needed
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const { data, isPending } = useFetchTopPodcast();
  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex items-start overflow-x-auto gap-10 scroll-smooth hide-scrollbar"
      >
        {isPending && <p>Loading...</p>}
        {data?.data?.data.map(
          (item: {
            picture_url: string;
            id: number;
            title: string;
            description: string;
          }) => (
            <div key={item.id}>
              <BigRowCards
                id={item?.id}
                imageUrl={item?.picture_url}
                title={item?.title}
                description={item?.description}
              />
            </div>
          )
        )}
      </div>

      <div className="w-fit flex items-center justify-center gap-2 rounded-2xl h-fit bg-gray-300/30 backdrop-blur-sm absolute right-2 top-[50%] z-10">
        <RiArrowLeftSFill
          onClick={() => handleScroll("left")}
          size={28}
          className="cursor-pointer hover:text-black text-gray-600"
        />
        <RiArrowRightSFill
          onClick={() => handleScroll("right")}
          size={28}
          className="cursor-pointer hover:text-black text-gray-600"
        />
      </div>
    </div>
  );
};

export default TrendingPodCast;
