"use client";
import { useFetchTrendingEpisode } from "@/lib/queryAndMutation/episode";
import Image from "next/image";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { setPage } from "@/redux/slices/episodeSlice";

const ListOfEpisodes = () => {
  const { data, isPending } = useFetchTrendingEpisode();

  const dispatch = useDispatch();
  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center gap-10 py-[2%]">
        {isPending && <p>Loading...</p>}
        {data?.data && (
          <>
            {data?.data?.data.map((item: any) => (
              <div className="shadow">
                <Image
                  src={item?.picture_url}
                  alt={item?.author}
                  width={300}
                  height={288}
                  className="rounded-t-[4px]"
                />
                <div className="bg-white w-[300px] flex items-start relative z-10 p-[2%]">
                  <div className="relative left-[-25px] top-[10px]">
                    <Image
                      src={"/svg/play-btn.svg"}
                      alt="play-button image"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="relative left-[-15px] flex flex-col py-2.5 justify-between gap-4 h-[131px]">
                    <h3 className="max-w-[255px] font-semibold text-xl">
                      {item?.title}
                    </h3>
                    <div>
                      <p className=" font-medium text-[13px]">
                        Sept 7, 2023{" "}
                        <span className="w-[0.5px] h-[12px] bg-[#979797]"></span>{" "}
                        35 mins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default ListOfEpisodes;
