"use client";
import { useFetchPodcastEpisode } from "@/lib/queryAndMutation/episode";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { setPage } from "@/redux/slices/latestEpisode";

const ListOfPodcasts = () => {
  const { data, isPending } = useFetchPodcastEpisode();

  const maxCharacters = 250;

  const getTruncatedHtml = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > maxCharacters
      ? text.slice(0, maxCharacters) + "..."
      : text;
  };

  const dispatch = useDispatch();
  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {data?.data && (
        <>
          {data?.data?.data.map(
            (item: {
              picture_url: string;
              id: number;
              title: string;
              description: string;
            }) => (
              <div
                key={item.id}
                className="w-full text-[#282828] border-b-[1px] border-[#DCDCDC] pb-[2%] mt-3"
              >
                {/* Podcast Info */}
                <div className="flex flex-col items-start sm:flex-row gap-6">
                  <Image
                    src={item?.picture_url}
                    alt="Podcast thumbnail"
                    width={157}
                    height={129}
                    className="rounded-t-[4px] object-cover"
                  />

                  <div className="flex-1 text-[#282828]">
                    <div className="uppercase text-sm font-semibold flex items-center">
                      SEPT 3, 2023{" "}
                      <div className="w-[6px] h-[6px] rounded-[50%] bg-[#282828] mx-2"></div>{" "}
                      28 MINS
                    </div>
                    <h2 className="text-lg text-[#282828] sm:text-xl font-bold mt-1">
                      {item?.title}
                    </h2>
                    <p className="leading-relaxed text-[#282828] max-w-[578px]">
                      {getTruncatedHtml(item?.description)}
                    </p>
                    <div className="mt-2 space-y-6">
                      <div className="flex items-center gap-3">
                        <Image
                          src={"/svg/play-btn.svg"}
                          alt="spotify logo"
                          width={32}
                          height={32}
                        />
                        <div className="w-[30px] h-[30px] bg-[#E1E1E1] flex justify-center items-center rounded-[50%]">
                          <TbNotes size={16.5} />
                        </div>
                        <div className="w-[30px] h-[30px] bg-[#E1E1E1] flex justify-center items-center rounded-[50%]">
                          <IoShareSocialSharp size={16.5} />
                        </div>
                        <div className="w-[30px] h-[30px] bg-[#E1E1E1] flex justify-center items-center rounded-[50%]">
                          <MdOutlineCardGiftcard size={16.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </>
      )}
      <div className="flex justify-start">
        <div className="w-fit h-fit">
          <Pagination
            currentPage={data?.data?.current_page}
            totalPages={data?.data?.total}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ListOfPodcasts;
