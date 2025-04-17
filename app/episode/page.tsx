import { FaVolumeUp, FaShareAlt, FaGift } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import GetMeIn from "../components/GetMeIn";
import Image from "next/image";

const Episode = () => {
  return (
    <div className="w-full h-fit ">
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
          <div className="flex items-center space-x-2 mb-6">
            <IoChevronBackOutline className="w-4 h-4" />
            <a href="#" className="text-sm font-medium">
              Back to podcast
            </a>
          </div>

          {/* Podcast Info */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Image
              src="/images/hope.png"
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
                The Funeral Experience – the Good, the Bad, and the Ugly
              </h2>
              <p className="mt-3 leading-relaxed text-gray-200 max-w-[1021px]">
                The struggles of a widow begin immediately when her husband
                dies; she is immediately made to go through various traditional
                rites, disregarding her pain and process of grieving.Most people
                in Africa, argue that those rituals are intended to protect
                widows and not to harm them. This doesn’t appear to be the case
                as some of these practices and beliefs tend to dehumanise the
                very essence of their womanhood.In this episode, we will talk
                about these rites and possible solutions to the bad sides and
                even how to manage the ugly sides.The guest on this episode is
                Ms Grace Udodong.
                <span className="text-green-400 font-semibold ml-1 cursor-pointer">
                  READ MORE
                </span>
              </p>
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
        </div>
      </div>
      <div className="w-full h-fit px-[4%] py-[2%]">
        <div className="border-b-[1px] border-[#DCDCDC] pb-[2%]">
          <h2 className=" font-extrabold text-sm text-[#5A5A5A]">
            NEXT EPISODES IN QUEUE
          </h2>
        </div>
        <div className="w-full flex flex-wrap gap-5 py-[2%]">
          <div className="shadow">
            <Image
              src={"/images/titi-benson.png"}
              alt="license-to-live image"
              width={300}
              height={288}
              className="rounded-t-[4px]"
            />
            <div className="bg-white w-[300px] flex items-start relative z-10 p-[2%]">
              <div className="relative left-[-25px] top-[10px]">
                <Image
                  src={"/svg/play-btn.svg"}
                  alt="license-to-live image"
                  width={40}
                  height={40}
                />
              </div>
              <div className="relative left-[-15px] flex flex-col py-2.5 justify-between gap-4 h-[131px]">
                <h3 className="max-w-[255px] font-semibold text-xl">
                  The Future of Work: Embracing Remote and Hybrid Workforces
                </h3>
                <div>
                  <p className=" font-medium text-[13px]">
                    Sept 7, 2023{" "}
                    <span className="w-[0.5px] h-[12px] bg-[#979797]"></span> 35
                    mins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetMeIn />
    </div>
  );
};

export default Episode;
