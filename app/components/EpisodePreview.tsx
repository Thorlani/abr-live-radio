"use client";
import { FaVolumeUp, FaShareAlt, FaGift } from "react-icons/fa";
import Image from "next/image";
import BackToHome from "../components/BackToHome";
import { useFetchAnEpisode } from "@/lib/queryAndMutation/episode";
import { useState } from "react";

const EpisodePreview = () => {
  const { data, isPending } = useFetchAnEpisode();

  const [expanded, setExpanded] = useState(false);

  const maxCharacters = 250;

  const getTruncatedHtml = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > maxCharacters
      ? text.slice(0, maxCharacters) + "..."
      : text;
  };

  return (
    <div className=" text-white min-h-[60vh] px-4 py-6 sm:px-12 relative">
      <Image
        src="/images/bg-pod.png"
        alt="bg-pod"
        className="w-full h-full absolute top-0 left-0 z-[-10]"
        width={157}
        height={129}
      />
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <BackToHome />

        <>
          {isPending && <p>Loading...</p>}
          {data?.data && (
            <>
              {/* Podcast Info */}
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Image
                  src={data?.data?.picture_url}
                  alt="Podcast thumbnail"
                  className="object-cover"
                  width={157}
                  height={129}
                />

                <div className="flex-1">
                  <p className="uppercase text-sm text-gray-400 font-semibold">
                    Sept 3, 2023 • 28 mins
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                    {data?.data?.title}
                  </h2>
                  <div className="mt-3 leading-relaxed text-gray-200 max-w-[1021px]">
                    {expanded ? (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data?.data?.description,
                        }}
                      />
                    ) : (
                      <p>{getTruncatedHtml(data?.data?.description)}</p>
                    )}

                    <span
                      onClick={() => setExpanded(!expanded)}
                      className="text-green-400 font-semibold ml-1 cursor-pointer"
                    >
                      {expanded ? "SHOW LESS" : "READ MORE"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Audio player controls */}
              <div className="mt-10 space-y-6">
                {/* Progress Bar */}
                <div className="relative w-full">
                  <div className="flex justify-between text-sm text-gray-300 mb-1 px-1">
                    <span>00:15</span>
                    <span>28:04</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-1 relative">
                    <div className="w-[10%] bg-green-400 h-1 rounded-full"></div>
                    <div className="absolute left-[10%] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full"></div>
                    <FaVolumeUp className="w-6 h-6 absolute right-[-45px] top-[-20px]" />
                  </div>
                </div>

                <div className="w-full h-fit flex items-center justify-between">
                  {/* Control Buttons */}
                  <div className="flex items-center justify-center gap-6">
                    <button>
                      <Image
                        src="/svg/prev.svg"
                        alt="prev icon"
                        className="object-cover"
                        width={30}
                        height={30}
                      />
                    </button>
                    <button className="bg-red-600 p-4 rounded-full">
                      <Image
                        src="/svg/play-btn.svg"
                        alt="next icon"
                        className="object-cover"
                        width={30}
                        height={30}
                      />
                    </button>
                    <button>
                      <Image
                        src="/svg/next.svg"
                        alt="next icon"
                        className="object-cover"
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>

                  {/* Extra Controls */}
                  <div className="flex items-center justify-center gap-6 mt-6">
                    <FaShareAlt className="w-6 h-6" />
                    <FaGift className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default EpisodePreview;
