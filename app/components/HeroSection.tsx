import TitleAndDescription from "./TitleAndDescription";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="py-[2%] px-[4%] bg-[#f6f6f6]">
      <TitleAndDescription
        title={`EDITOR'S PICKS`}
        description="Featured Episodes"
      />
      <div className="min-w-full h-fit flex flex-col md:flex-row justify-between items-start gap-10 py-[2%]">
        <div className="w-[100%] md:w-[50%] h-full relative">
          <Image
            src={"/images/license-to-live.png"}
            alt="license-to-live image"
            width={670}
            height={561}
            className="w-full h-full rounded"
          />
          <div className="absolute bottom-0 left-0 px-5 py-2 w-full h-fit flex items-center gap-5 bg-[#00000050]">
            <Image
              src={"/svg/play-btn.svg"}
              alt="play icon"
              width={46}
              height={46}
            />
            <h2 className="text-white font-extrabold text-2xl max-w-[450px]">
              {`Bridging the Financing Gap in Nigeria's off-grid sector`}
            </h2>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-fit flex flex-col gap-1">
          <div className="w-full h-fit flex flex-col md:flex-row gap-10">
            <div className="shadow">
              <Image
                src={"/images/titi-benson.png"}
                alt="license-to-live image"
                width={300}
                height={288}
                className="rounded-t-[4px] w-full"
              />
              <div className="bg-white w-full md:w-[300px] flex items-start relative z-10 p-[2%]">
                <div className="relative left-[-25px] top-[10px]">
                  <Image
                    src={"/svg/play-btn.svg"}
                    alt="license-to-live image"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="relative left-[-15px] flex flex-col py-2.5 justify-between gap-4 h-[131px]">
                  <h3 className="md:max-w-[255px] font-semibold text-xl">
                    The Future of Work: Embracing Remote and Hybrid Workforces
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
            <div className="shadow">
              <Image
                src={"/images/apara.png"}
                alt="license-to-live image"
                width={300}
                height={288}
                className="rounded-t-[4px] w-full"
              />
              <div className="bg-white w-full md:w-[300px] flex items-start relative z-10 p-[2%]">
                <div className="relative left-[-25px] top-[10px]">
                  <Image
                    src={"/svg/play-btn.svg"}
                    alt="license-to-live image"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="relative left-[-15px] flex flex-col py-2.5 justify-between gap-4 h-[131px]">
                  <h3 className="md:max-w-[255px] font-semibold text-xl">
                    Compatibility in Relationship
                  </h3>
                  <div>
                    <p className=" font-medium text-[13px]">
                      Sept 5, 2023{" "}
                      <span className="w-[0.5px] h-[12px] bg-[#979797]"></span>{" "}
                      55 mins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/images/sell-btc.png"}
              alt="license-to-live image"
              width={300}
              height={88}
              className="w-full object-contain rounded-t-[4px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
