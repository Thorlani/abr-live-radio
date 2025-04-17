import { AiOutlineExclamationCircle } from "react-icons/ai";
import Image from "next/image";

const GetMeIn = () => {
  return (
    <div className="py-[4%] px-[8%] flex w-full h-fit bg-[#F6E8E8] my-[4%]">
      <div className="w-full md:w-[50%] h-fit flex flex-col gap-5 md:gap-14">
        <div>
          <h2 className="text-[#282828] font-extrabold text-[32px]">
            Never stop listening!
          </h2>
          <p className="text-[#282828] text-2xl max-w-[362px]">
            Every episodes is a journey you don't wanna miss out on.{" "}
          </p>
        </div>
        <div className="mt-[30px]">
          <p className="max-w-[487px]">
            Get the latest headlines and unique ABR stories, sent every weekday.
          </p>
          <div className="flex gap-1 items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[292px] h-[43px] rounded bg-[#D9D9D9] text-lg text-[#5A5A5A] placeholder:text-[#5A5A5A] placeholder:font-bold placeholder:text-sm indent-2.5 focus:outline-[#5A5A5A]"
            />
            <button className="bg-[#CC0001] px-4 py-2.5 rounded-[4px] font-semibold text-white">
              Get me in
            </button>
            <AiOutlineExclamationCircle />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%] relative h-fit flex items-center justify-center">
        <Image
          src={"/images/music.png"}
          alt="music img"
          width={404}
          height={404}
        />
        <Image
          src={"/images/music2.png"}
          alt="music img"
          width={218}
          height={218}
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default GetMeIn;
