import { FaVolumeUp, FaShareAlt, FaGift } from "react-icons/fa";
import { IoChevronBackOutline, IoShareSocialSharp } from "react-icons/io5";
import GetMeIn from "../components/GetMeIn";
import Image from "next/image";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { TbNotes } from "react-icons/tb";

const Podcast = () => {
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
          {/* Podcast Info */}
          <div className="flex flex-col items-center sm:flex-row gap-6">
            <Image
              src="/images/hope-widow.png"
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
                Hope For the Widow
              </h2>
              <p className="mt-3 leading-relaxed text-gray-200 max-w-[578px]">
                The show aims to shed light on the challenges faced by less
                privileged widows, providing support and a platform to promote a
                better life. Join us in making a difference. #EmpoweringWidows
                #SupportingWidows.
              </p>
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
      </div>
      <div className="w-full h-fit flex justify-between gap-[30px] px-[4%] py-[2%]">
        <div className="w-full md:w-[75%]">
          <div className="border-b-[1px] border-[#DCDCDC] pb-[2%]">
            <h2 className=" font-extrabold text-sm text-[#5A5A5A]">
              ALL EPISODES (3 AVAILABLE)
            </h2>
          </div>
          <div className="w-full flex flex-wrap gap-5 py-[2%]">
            <div className="w-full text-[#282828] border-b-[1px] border-[#DCDCDC] pb-[2%]">
              {/* Podcast Info */}
              <div className="flex flex-col items-start sm:flex-row gap-6">
                <Image
                  src="/images/hope-widow.png"
                  alt="Podcast thumbnail"
                  width={157}
                  height={129}
                  className="rounded-t-[4px] object-cover"
                />

                <div className="flex-1 text-[#282828]">
                  <p className="uppercase text-sm font-semibold flex items-center">
                    SEPT 3, 2023{" "}
                    <div className="w-[6px] h-[6px] rounded-[50%] bg-[#282828] mx-2"></div>{" "}
                    28 MINS
                  </p>
                  <h2 className="text-lg text-[#282828] sm:text-xl font-bold mt-1">
                    The Funeral Experience – the Good, the Bad, and the Ugly
                  </h2>
                  <p className="mt-3 leading-relaxed text-[#282828] max-w-[578px]">
                    The struggles of a widow begin immediately when her husband
                    dies; she is immediately made to go through various
                    traditional rites, disregarding her pain and process of
                    grieving.
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
          </div>
        </div>
        <div className="hidden md:flex md:flex-col gap-[30px] md:w-[20%]">
          <div>
            <div>
              <p className="text-right uppercase text-[#5A5A5A] font-bold text-[11px]">
                adevertisement
              </p>
            </div>
            <Image
              src={"/images/mtn2.png"}
              alt="spotify logo"
              width={344}
              height={489}
            />
          </div>
          <Image
            src={"/images/pizza2.png"}
            alt="spotify logo"
            width={344}
            height={330}
          />
        </div>
      </div>
    </div>
  );
};

export default Podcast;
