import Image from "next/image";
import PodcastPreview from "../components/PodcastPreview";
import ListOfPodcasts from "../components/ListOfPodcasts";

const Podcast = () => {
  return (
    <div className="w-full h-fit ">
      <PodcastPreview />
      <div className="w-full h-fit flex justify-between gap-[30px] px-[4%] py-[2%]">
        <div className="w-full md:w-[75%]">
          <div className="border-b-[1px] border-[#DCDCDC] pb-[2%]">
            <h2 className=" font-extrabold text-sm text-[#5A5A5A]">
              ALL EPISODES
            </h2>
          </div>
          <div className="w-full flex flex-col gap-5 py-[2%]">
            <ListOfPodcasts />
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
