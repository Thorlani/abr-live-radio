import GetMeIn from "../components/GetMeIn";

import EpisodePreview from "../components/EpisodePreview";
import ListOfEpisodes from "../components/ListOfEpisodes";

const Episode = () => {
  return (
    <div className="w-full h-fit ">
      <EpisodePreview />
      <div className="w-full h-fit px-[4%] py-[2%]">
        <div className="border-b-[1px] border-[#DCDCDC] pb-[2%]">
          <h2 className=" font-extrabold text-sm text-[#5A5A5A]">
            NEXT EPISODES IN QUEUE
          </h2>
        </div>
        <ListOfEpisodes />
      </div>
      <GetMeIn />
    </div>
  );
};

export default Episode;
