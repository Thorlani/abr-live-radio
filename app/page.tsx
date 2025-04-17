import Image from "next/image";
import HeroSection from "./components/HeroSection";
import TitleAndDescription from "./components/TitleAndDescription";
import BigRowCards from "./components/RowCards";
import SmallCard from "./components/SmallCard";
import MediumCard from "./components/MediumCard";
import GetMeIn from "./components/GetMeIn";

export default function Home() {
  return (
    <>
      <div className="min-w-full min-h-[221px] px-[8%] py-[1%] bg-white flex flex-col items-center justify-center">
        <Image
          src={"/images/first-bank.png"}
          alt="Advertisement icon"
          width={1176}
          height={221}
        />
      </div>
      <div className="w-full h-fit bg-white">
        <HeroSection />
        <div className="py-[2%] px-[4%] flex flex-col gap-8">
          <TitleAndDescription
            title={`Trending this week`}
            description="Featured Podcasts"
          />
          <BigRowCards />
        </div>
        <div className="py-[2%] px-[4%] flex flex-col gap-8">
          <TitleAndDescription title={`Newly added episodes`} />
          <SmallCard />
        </div>
        <div className="py-[2%] px-[4%]">
          <div className="w-full h-fit px-5 py-3 bg-[#F0E4FF] font-extrabold text-2xl">
            <h2>LISTEN BY ABR CATEGORIES</h2>
          </div>
        </div>
        <div className="py-[2%] px-[4%] flex flex-col gap-8">
          <TitleAndDescription description={`News & Storytelling`} />
          <MediumCard />
        </div>
        <div className="py-[2%] px-[4%] flex justify-center items-center gap-10">
          <Image
            src={"/images/pizza.png"}
            alt="pizza image"
            width={285}
            height={205}
          />
          <Image
            src={"/images/mtn.png"}
            alt="pizza image"
            width={285}
            height={205}
          />
          <Image
            src={"/images/fam.png"}
            alt="pizza image"
            width={285}
            height={205}
          />
        </div>
        <div className="py-[2%] px-[4%] flex flex-col gap-8">
          <TitleAndDescription description={`Educational`} />
          <MediumCard />
        </div>
        <div className="py-[2%] px-[4%] flex flex-col gap-8">
          <TitleAndDescription description={`Entertainment & Lifestyle`} />
          <MediumCard />
        </div>
        <div className="py-[2%] px-[4%] flex flex-col gap-8">
          <TitleAndDescription description={`Tech, Sport & Business`} />
          <MediumCard />
        </div>
        <div className="py-[2%] px-[4%] flex flex-col gap-8">
          <TitleAndDescription description={`Other Podcasts`} />
          <MediumCard />
        </div>
        <GetMeIn />
        <div className="w-full h-fit py-[2%] px-[4%] flex flex-col justify-center items-center gap-8">
          <div>
            <h2 className="text-[#282828] font-extrabold text-2xl">
              OUR GLOBAL PARTNERS
            </h2>
          </div>
          <div className="w-full flex justify-center items-center flex-wrap gap-8">
            <Image
              src={"/images/1.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/2.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/3.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/4.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
          </div>
          <div className="w-full flex justify-center items-center flex-wrap gap-8">
            <Image
              src={"/images/5.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/6.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/7.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/8.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/9.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
          </div>
          <div className="w-full flex justify-center items-center flex-wrap gap-8">
            <Image
              src={"/images/10.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/11.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/12.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/13.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/14.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
            <Image
              src={"/images/15.png"}
              alt="pizza image"
              width={176}
              height={124}
              className=" grayscale"
            />
          </div>
        </div>
      </div>
    </>
  );
}
