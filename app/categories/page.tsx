import Image from "next/image";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  return (
    <div className="w-full h-fit bg-white p-[4%]">
      {" "}
      <div className="border-b-[1px] border-[#DCDCDC] pb-[2%]">
        <h2 className=" font-extrabold text-[28px] text-[#5A5A5A]">
          ALL PODCASTS
        </h2>
      </div>
      <div className="py-[2%] flex items-center gap-5">
        <div className="flex items-center">
          Sort by :{" "}
          <div className="ml-2 flex font-bold items-center gap-2">
            Popular{" "}
            <div className="flex items-center gap-1">
              <div className="w-[4px] h-[4px] rounded-[50%] bg-[#282828]"></div>
              <div className="w-[4px] h-[4px] rounded-[50%] bg-[#282828]"></div>
              <div className="w-[4px] h-[4px] rounded-[50%] bg-[#282828]"></div>
            </div>{" "}
          </div>
        </div>
        <li className="hidden md:inline">|</li>
        <div className="flex items-center">
          Sort by :{" "}
          <div className="ml-2 flex font-bold items-center gap-2">
            Popular{" "}
            <div className="flex items-center gap-1">
              <div className="w-[4px] h-[4px] rounded-[50%] bg-[#282828]"></div>
              <div className="w-[4px] h-[4px] rounded-[50%] bg-[#282828]"></div>
              <div className="w-[4px] h-[4px] rounded-[50%] bg-[#282828]"></div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="pb-[2%] border-b-[1px] border-[#DCDCDC]">
        <CategoryCard />
      </div>
      <div className="pb-[2%] flex flex-col gap-[20px]">
        <h2 className=" font-extrabold text-[28px] text-[#5A5A5A]">
          Explore other categories
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-[20px]">
          <Image
            src={"/images/breaking.png"}
            alt="license-to-live image"
            width={306}
            height={177}
          />
          <Image
            src={"/images/entertain.png"}
            alt="license-to-live image"
            width={306}
            height={177}
          />
          <Image
            src={"/images/business.png"}
            alt="license-to-live image"
            width={306}
            height={177}
          />
          <Image
            src={"/images/product.png"}
            alt="license-to-live image"
            width={306}
            height={177}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
