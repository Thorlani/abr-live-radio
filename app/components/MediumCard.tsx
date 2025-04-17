import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineCardGiftcard } from "react-icons/md";

const MediumCard = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-fit max-w-[238px] bg-[#F4F4F4] p-[2%] rounded-xl border-b-[2px] ">
      <Image
        src={"/images/apara.png"}
        alt="license-to-live image"
        width={237}
        height={187}
        className="rounded-t-[4px]"
      />
      <div className="flex items-start relative z-10 p-[2%]">
        <div className="relative flex flex-col justify-between gap-4">
          <h3 className="font-bold">Fitness Focus</h3>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4">
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
  );
};

export default MediumCard;
