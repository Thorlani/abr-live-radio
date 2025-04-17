"use client";
import { useFetchAPodcast } from "@/lib/queryAndMutation/podcast";
import Image from "next/image";
import { useState } from "react";

const PodcastPreview = () => {
  const { data, isPending } = useFetchAPodcast();

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
      {isPending && <p>Loading...</p>}
      {data?.data && (
        <div className="max-w-6xl mx-auto">
          {/* Podcast Info */}
          <div className="flex flex-col items-start sm:flex-row gap-6">
            <Image
              src={data?.data?.picture_url}
              alt="Podcast thumbnail"
              width={390}
              height={350}
              className="rounded-t-[4px] object-cover"
            />

            <div className="flex-1">
              <p className="uppercase text-sm text-gray-400 font-semibold">
                PODCAST
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
              <div className="mt-14 space-y-6">
                <p className="font-semibold text-sm text-[#BFBFBF]">
                  Available on
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={"/svg/spotify.svg"}
                    alt="spotify logo"
                    width={32}
                    height={32}
                  />
                  <Image
                    src={"/svg/ribo.svg"}
                    alt="ribo logo"
                    width={32}
                    height={32}
                  />
                  <Image
                    src={"/svg/google.svg"}
                    alt="lgoogle podcast logo"
                    width={32}
                    height={32}
                  />
                  <Image
                    src={"/svg/wokpa.svg"}
                    alt="wokpa logo"
                    width={95}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastPreview;
