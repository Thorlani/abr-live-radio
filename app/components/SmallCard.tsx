import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineCardGiftcard } from "react-icons/md";

const SmallCard = ({
  className,
  children,
  useCase,
}: {
  className?: string;
  children?: string;
  useCase?: string;
}) => {
  return (
    <div className="min-h-[267px] max-w-[238px]">
      <Image
        src={"/images/apara.png"}
        alt="license-to-live image"
        width={237}
        height={187}
        className="rounded-t-[4px]"
      />
      <div className="bg-white w-[237px] flex items-start relative z-10 p-[2%]">
        <div className="relative flex flex-col py-2.5 justify-between gap-4">
          <div>
            <div className="flex items-center  font-bold text-[13px]">
              AUG 29, 2023{" "}
              <div className="w-[6px] h-[6px] rounded-[50%] bg-[#828282] mx-2"></div>{" "}
              45 MINS
            </div>
          </div>
          <h3 className="font-bold">
            Relationship Button - Starting Afresh as a Widow
          </h3>
          <div className="flex items-center gap-5">
            {useCase === "categories" ? (
              <Image
                src={"/svg/play-btn.svg"}
                alt="license-to-live image"
                width={40}
                height={40}
              />
            ) : (
              <p className=" font-medium text-[13px]">More Episodes </p>
            )}

            <div className="flex items-center gap-4">
              <div className="w-[30px] h-[30px] bg-[#E1E1E1] flex justify-center items-center rounded-[50%]">
                <IoShareSocialSharp size={16.5} />
              </div>
              <div className="w-[30px] bg-[#E1E1E1] h-[30px] flex justify-center items-center rounded-[50%]">
                <MdOutlineCardGiftcard size={16.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
