import Image from "next/image";

const BigRowCards = () => {
  return (
    <div className="w-[288px] h-[424px] relative">
      <Image
        src={"/images/license-to-live.png"}
        alt="license-to-live image"
        width={288}
        height={424}
        className="w-full h-full rounded"
      />
      <div className="absolute bottom-0 left-0 px-5 py-2 w-full h-fit flex flex-col items-start text-white">
        <p>8 Episodes</p>
        <h4 className="font-extrabold text-2xl max-w-[450px]">
          Hope For the Widow
        </h4>
      </div>
    </div>
  );
};

export default BigRowCards;
