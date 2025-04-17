"use client";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { useFetchTopPodcast } from "@/lib/queryAndMutation/podcast";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { setPage } from "@/redux/slices/podcastSlice";

const CategoryCard = () => {
  const dispatch = useDispatch();
  const { data, isPending } = useFetchTopPodcast();

  const maxCharacters = 50;

  const getTruncatedHtml = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > maxCharacters
      ? text.slice(0, maxCharacters) + "..."
      : text;
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center gap-5 py-[2%]">
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
                <div key={item?.id} className="min-h-[267px] max-w-[238px]">
                  <Image
                    src={item?.picture_url}
                    alt="license-to-live image"
                    width={237}
                    height={187}
                    className="rounded-t-[4px]"
                  />
                  <div className="bg-white w-[237px] flex items-start relative z-10 p-[2%]">
                    <div className="relative flex flex-col py-2.5 justify-between gap-4">
                      <h3 className="font-bold">{item?.title}</h3>
                      <h4 className="font-medium">
                        {/* <span className="font-bold">EP12:</span> Cardio Vascular
                    Exercise Part 3 */}
                        {getTruncatedHtml(item?.description)}
                      </h4>
                      <div>
                        <div className="flex items-center font-bold text-[13px]">
                          AUG 29, 2023{" "}
                          <div className="w-[6px] h-[6px] rounded-[50%] bg-[#828282] mx-2"></div>{" "}
                          45 MINS
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <Image
                          src={"/svg/play-btn.svg"}
                          alt="license-to-live image"
                          width={40}
                          height={40}
                        />

                        <div className="flex items-center gap-4">
                          <div className="w-[30px] h-[30px] bg-[#E1E1E1] flex justify-center items-center rounded-[50%]">
                            <IoShareSocialSharp size={16.5} />
                          </div>
                          <div className="w-[30px] bg-[#E1E1E1] h-[30px] flex justify-center items-center rounded-[50%]">
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
      </div>
      <Pagination
        currentPage={data?.data?.current_page}
        totalPages={data?.data?.total}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default CategoryCard;
